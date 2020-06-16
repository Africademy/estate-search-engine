import React, { Component, createRef } from "react"
import {
  SearchWrapper,
  SearchBar,
  InputWrapper,
  SearchInput,
  SearchDropDown,
  Result,
  SearchBtn,
  ToggleAdvanced,
  Filters,
} from "./search.styled"
import HomepageIllustration from "../homepageIllustration/homepageIllustration"
import AdvancedSearch from "../advancedSearch/advancedSearch"
import BasicFilter from "../searchEngine/basicFilters/basicFilter"
import EstatesData from "../../data/estates.json"

class Search extends Component {
  constructor() {
    super()
    this.state = {
      rent: false,
      city: "",
      chooseType: "Choose...",
      choosePayment: "Choose...",
      toggleType: false,
      togglePayment: false,
      togglePrice: false,
      toggleAdvanced: false,
      toggleSearchDropdown: false,
      estates: EstatesData,
      found: null,
      minRooms: "",
      maxRooms: "",
      price: "Choose...",
      minPrice: 0,
      maxPrice: 0,
      types: [
        { key: 1, name: "Flat" },
        { key: 2, name: "House" },
        { key: 3, name: "Garage" },
        { key: 4, name: "Commercial" },
        { key: 5, name: "Parcels" },
        { key: 6, name: "Rooms" },
        { key: 7, name: "All" },
      ],
      rooms: [
        { key: 1, amount: "Studio" },
        { key: 2, amount: 1 },
        { key: 3, amount: 2 },
        { key: 4, amount: 3 },
        { key: 5, amount: 4 },
        { key: 6, amount: "More than 4" },
      ],
      transaction: [
        { key: 1, name: "Sell" },
        { key: 2, name: "Rent" },
      ],
    }
    this.type = createRef()
  }
  handleSearchInput = e => {
    const { estates } = this.state
    this.setState({ city: e.target.value }, () => {
      const foundedEstates = estates.filter(estate => {
        return estate.city.includes(this.formatSearchInput())
      })
      this.setState({ found: foundedEstates })
    })
  }
  toggleDropdown = () => {
    this.setState({ toggleType: !this.state.toggleType })
  }
  insertAttributes = e => {
    this.setState({ [e.target.name]: e.target.innerText })
  }
  handleTransaction = () => {
    this.setState({
      togglePayment: !this.state.togglePayment,
    })
  }
  openPrice = () => {
    this.setState({ togglePrice: true })
  }
  handlePrice = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.setState({
          price: `${this.state.minPrice} - ${this.state.maxPrice}`,
        })
      }
    )
  }
  applyPrice = () => {
    this.setState({ togglePrice: false })
  }
  handleRangeChange = e => {
    this.setState({ price: e.target.value })
  }
  handleAdvancedSettings = () => {
    this.setState({ toggleAdvanced: !this.state.toggleAdvanced })
  }
  formatSearchInput = () => {
    const { city } = this.state
    const capital = city.slice(0, 1).toUpperCase()
    const rest = city.slice(1, city.length).toLowerCase()
    const search = capital.concat(rest)
    return search
  }
  insertLocation = estate => {
    this.setState({
      city: `${estate.city}, ${estate.district}`,
      toggleSearchDropdown: false,
    })
  }
  handleSearch = () => {
    const { estates, chooseType, city } = this.state
    let res = estates.filter(estate => {
      return `${estate.city}, ${estate.district}` === this.state.city
    })
    if (chooseType !== "Choose...") {
      let choosen = res.filter(estate => {
        return estate.type === chooseType
      })
      res = choosen
    }
    console.log(res)
  }

  render() {
    const { types, transaction, found } = this.state
    return (
      <SearchWrapper>
        <HomepageIllustration />
        <SearchBar>
          <InputWrapper>
            <SearchInput
              onFocus={() => this.setState({ toggleSearchDropdown: true })}
              onChange={e => this.handleSearchInput(e)}
              value={this.state.city}
              type="search"
              placeholder="Search..."
              isEmpty={this.state.city}
              toggle={this.state.toggleSearchDropdown}
            />
            {this.state.city !== "" ? (
              <SearchDropDown toggle={this.state.toggleSearchDropdown}>
                {found !== null
                  ? found.map(estate => {
                      return (
                        <Result onClick={() => this.insertLocation(estate)}>
                          {estate.city}, {estate.district}
                        </Result>
                      )
                    })
                  : null}
              </SearchDropDown>
            ) : null}
          </InputWrapper>
          <Filters>
            <BasicFilter
              chooseType={this.state.chooseType}
              title={"Type of estate"}
              array={types}
              insert={this.insertAttributes}
              handleToggle={this.toggleDropdown}
              toggleState={this.state.toggleType}
              applyPrice={this.applyPrice}
              name={"chooseType"}
            />
            <BasicFilter
              chooseType={this.state.choosePayment}
              title={"Rent or buy?"}
              array={transaction}
              insert={this.insertAttributes}
              handleToggle={this.handleTransaction}
              toggleState={this.state.togglePayment}
              applyPrice={this.applyPrice}
              name={"choosePayment"}
            />
            <BasicFilter
              chooseType={this.state.price}
              array={null}
              title={"Price"}
              handleToggle={this.handlePrice}
              toggleState={this.state.togglePrice}
              applyPrice={this.applyPrice}
              handleRangeChange={this.handleRangeChange}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              name={"price"}
              openPrice={this.openPrice}
              handlePrice={this.handlePrice}
            />
            <ToggleAdvanced
              toggleAdvanced={this.state.toggleAdvanced}
              onClick={() => this.handleAdvancedSettings()}
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path
                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M21.79 10.763l-2.168-.368-1.097-2.65.358-.502.918-1.284a.259.259 0 0 0-.029-.339L18.39 4.237a.252.252 0 0 0-.334-.03l-1.79 1.276-2.707-1.113-.103-.608-.26-1.543a.26.26 0 0 0-.26-.219h-1.954a.261.261 0 0 0-.26.222l-.372 2.18-2.645 1.114-1.782-1.284a.252.252 0 0 0-.15-.046.251.251 0 0 0-.185.08L4.2 5.648a.263.263 0 0 0-.03.339l1.283 1.802-1.08 2.657-.611.103-1.543.26a.26.26 0 0 0-.219.26v1.955c0 .13.091.238.222.26l2.18.371L5.515 16.3l-.364.506-.912 1.267a.26.26 0 0 0 .03.34l1.383 1.382a.252.252 0 0 0 .334.03l1.804-1.285 2.606 1.072.102.61.26 1.559a.26.26 0 0 0 .26.219h1.958a.26.26 0 0 0 .26-.221l.367-2.166 2.651-1.098.502.36 1.289.92c.04.03.092.046.149.046.07 0 .132-.025.184-.078l1.384-1.383a.263.263 0 0 0 .029-.339l-1.276-1.792 1.098-2.651.608-.101 1.558-.26a.26.26 0 0 0 .22-.26v-1.97a.244.244 0 0 0-.21-.244z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </ToggleAdvanced>
          </Filters>
          <SearchBtn onClick={() => this.handleSearch()}>Search</SearchBtn>
          <AdvancedSearch
            minRooms={this.state.minRooms}
            maxRooms={this.state.maxRooms}
            insertMinRoom={this.insertMinRoom}
            insertMaxRoom={this.insertMaxRoom}
            toggleAdvanced={this.state.toggleAdvanced}
          />
        </SearchBar>
      </SearchWrapper>
    )
  }
}

export default Search
