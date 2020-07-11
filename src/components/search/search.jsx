import React, { Component, createRef } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
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
import Error from "../error/error"
import HomepageIllustration from "../homepageIllustration/homepageIllustration"
import BasicFilter from "../searchEngine/basicFilters/basicFilter"
import AdvancedSearching from "../searchEngine/advancedSearching/advancedSearching"
import EstatesData from "../../data/estates.json"
import { filterByCity } from "../actions/filterByCity"
import { filterByType } from "../actions/filterByType"
import { filterByTransaction } from "../actions/filterByTransaction"
import { filterByPrice } from "../actions/filterByPrice"
import { toggleAmountOfRooms } from "../actions/advancedActions/toggleAmountOfRooms"
import { toggleMaxAmountOfRooms } from "../actions/advancedActions/toggleMaxAmountOfRooms"
import { toggleMinFloor } from "../actions/advancedActions/toggleMinFloor"
import { toggleMaxFloor } from "../actions/advancedActions/toggleMaxFloor"
import { resetAdvantages } from "../actions/advancedActions/resetAdvantages"
import { handleSearch } from "../actions/searchData"
import { handleError } from "../actions/handleError"
import { number } from "prop-types"

const mapStateToProps = state => {
  return {
    lang: state.SwitchLanguage,
    filter: state.Filter,
    search: state.search,
    error: state.error,
  }
}

class Search extends Component {
  constructor() {
    super()
    this.state = {
      rent: false,
      city: "",
      chooseType: "",
      choosePayment: "",
      toggleType: false,
      togglePayment: false,
      togglePrice: false,
      toggleAdvancedSettings: false,
      toggleSearchDropdown: false,
      estates: EstatesData,
      found: null,
      minRooms: 0,
      maxRooms: 0,
      price: "",
      minPriceValue: number,
      maxPriceValue: number,
      minPriceForMeter: 0,
      maxPriceForMeter: 0,
      minFloor: 0,
      maxFloor: 0,
      toggleMinDrop: false,
      toggleMaxDrop: false,
      result: [],
      types: [
        { key: 8, name: "All" },
        { key: 1, name: "Flat" },
        { key: 2, name: "House" },
        { key: 3, name: "Garage" },
        { key: 4, name: "Commercial" },
        { key: 5, name: "Parcels" },
        { key: 6, name: "Rooms" },
      ],
      rooms: [
        { key: 1, amount: "Studio" },
        { key: 2, amount: 1 },
        { key: 3, amount: 2 },
        { key: 4, amount: 3 },
        { key: 5, amount: 4 },
        { key: 6, amount: "+4" },
      ],
      transaction: [
        { key: 1, name: "Buy" },
        { key: 2, name: "Rent" },
      ],
      floor: [
        { key: 1, amount: "Parter" },
        { key: 2, amount: 1 },
        { key: 3, amount: 2 },
        { key: 4, amount: 3 },
        { key: 5, amount: 4 },
        { key: 6, amount: 5 },
      ],
      filters: [
        { name: "city", value: "Warsaw, Wola" },
        { name: "type", value: "Flat" },
      ],
    }
    this.type = createRef()
  }
  handleSearchInput = e => {
    e.preventDefault()
    const { estates } = this.state
    this.setState({ city: e.target.value }, () => {
      const foundedEstates = estates.filter(estate => {
        return estate.city.includes(this.formatSearchInput())
      })
      const districts = []
      let reduced
      let result = []
      let city
      foundedEstates.forEach(estate => {
        districts.push(estate.district)
        reduced = [...new Set(districts)]
      })
      const obj = new Object()
      foundedEstates.forEach(estate => {
        city = estate.city
      })
      reduced.map(item => {
        obj.city = city
        obj.district = item
        result = [...result, { city: city, district: item }]
      })
      this.setState({ found: result })
    })
  }
  toggleDropdown = e => {
    e.preventDefault()
    this.setState({ toggleType: !this.state.toggleType })
  }

  insertAttributes = e => {
    e.preventDefault()
    const { dispatch } = this.props
    switch (e.target.name) {
      case "chooseType": {
        this.setState({ [e.target.name]: e.target.innerText }, () => {
          dispatch(filterByType(this.state.chooseType))
        })
        return
      }
      case "choosePayment": {
        this.setState({ [e.target.name]: e.target.innerText }, () => {
          dispatch(filterByTransaction(this.state.choosePayment))
        })
        return
      }
      default: {
        this.setState({ [e.target.name]: e.target.innerText })
      }
    }
  }
  insertValue = (e, value) => {
    e.preventDefault()
    const { dispatch } = this.props
    const name = e.target.name
    console.log(name)
    this.setState({ [e.target.name]: value }, () => {
      if (name === "minRooms") {
        dispatch(toggleAmountOfRooms(value))
      }
      if (name === "maxRooms") {
        dispatch(toggleMaxAmountOfRooms(value))
      }
      if (name === "minFloor") {
        dispatch(toggleMinFloor(value))
      }
      if (name === "maxFloor") {
        console.log(name)
        dispatch(toggleMaxFloor(value))
      }
    })
  }

  handleTransaction = e => {
    e.preventDefault()
    this.setState({
      togglePayment: !this.state.togglePayment,
    })
  }
  openPrice = e => {
    e.preventDefault()
    this.setState({ togglePrice: true })
  }
  handlePrice = (e, value) => {
    e.preventDefault()
    if (e.target.name === "minPrice")
      this.setState({ minPriceValue: value }, () => {
        this.setState({ toggleMinDrop: false })
      })
    if (e.target.name === "maxPrice")
      this.setState({ maxPriceValue: value }, () => {
        this.setState({ toggleMaxDrop: false })
      })
  }
  applyPrice = e => {
    e.preventDefault()
    const { dispatch } = this.props
    const { minPrice, maxPrice } = this.state
    this.setState({ togglePrice: false }, () => {
      dispatch(filterByPrice(minPrice, maxPrice))
    })
  }
  handleRangeChange = e => {
    e.preventDefault()
    this.setState({ price: e.target.value })
  }
  handleAdvancedSettings = e => {
    e.preventDefault()
    this.setState({
      toggleAdvancedSettings: !this.state.toggleAdvancedSettings,
    })
  }
  formatSearchInput = () => {
    const { city } = this.state
    const capital = city.slice(0, 1).toUpperCase()
    const rest = city.slice(1, city.length).toLowerCase()
    const search = capital.concat(rest)
    return search
  }
  insertLocation = (estate, e) => {
    e.preventDefault()
    this.setState({
      city: `${estate.city}, ${estate.district}`,
      toggleSearchDropdown: false,
    })
  }
  handleResetFields = e => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(resetAdvantages())
    this.setState({
      city: "",
      chooseType: "",
      choosePayment: "",
      minRooms: 0,
      maxRooms: 0,
      minPrice: 0,
      maxPrice: 0,
      minFloor: 0,
      maxFloor: 0,
    })
  }
  toggleDropdowns = e => {
    e.preventDefault()
    if (e.target.name === "minPrice") this.setState({ toggleMinDrop: true })
    if (e.target.name === "maxPrice") this.setState({ toggleMaxDrop: true })
  }
  handleSearch = e => {
    e.preventDefault()
    const {
      chooseType,
      city,
      choosePayment,
      price,
      minPriceValue,
      maxPriceValue,
      minRooms,
      maxRooms,
    } = this.state
    const values = {
      search: city,
      estateType: chooseType,
      transaction: choosePayment,
      minPrice: minPriceValue,
      maxPrice: maxPriceValue,
      minRooms: minRooms,
      maxRooms: maxRooms,
    }
    const { dispatch } = this.props

    if (minPriceValue > maxPriceValue) {
      dispatch(handleError())
      setTimeout(() => {
        dispatch(handleError())
      }, 3000)
    } else {
      dispatch(filterByCity(this.state.city))
      dispatch(filterByPrice(minPriceValue, maxPriceValue))
      dispatch(handleSearch(values))
      navigate("/results")
    }
  }

  render() {
    const { types, transaction, found } = this.state
    const { lang } = this.props
    return (
      <SearchWrapper>
        <HomepageIllustration />
        <SearchBar
          toggle={this.state.toggleAdvancedSettings}
          onSubmit={e => this.handleSearch(e)}
        >
          <InputWrapper>
            <SearchInput
              onFocus={() => this.setState({ toggleSearchDropdown: true })}
              onChange={e => this.handleSearchInput(e)}
              value={this.state.city}
              type="search"
              placeholder={lang ? "Search..." : "Szukaj..."}
              isEmpty={this.state.city}
              toggle={this.state.toggleSearchDropdown}
            />
            {this.state.city !== "" ? (
              <SearchDropDown toggle={this.state.toggleSearchDropdown}>
                {found !== null
                  ? found.map(estate => {
                      return (
                        <Result
                          key={estate.key}
                          onClick={e => this.insertLocation(estate, e)}
                        >
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
              title={lang ? "Type of estate" : "Typ budynku"}
              array={types}
              insert={this.insertAttributes}
              insertMinRoom={this.insertValue}
              insertMaxRoom={this.insertValue}
              handleToggle={this.toggleDropdown}
              toggleState={this.state.toggleType}
              applyPrice={this.applyPrice}
              name={"chooseType"}
            />
            <BasicFilter
              chooseType={this.state.choosePayment}
              title={lang ? "Rent or buy?" : "Wynajem czy zakup?"}
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
              title={lang ? "Price" : "Cena"}
              handleToggle={this.handlePrice}
              toggleState={this.state.togglePrice}
              applyPrice={this.applyPrice}
              handleRangeChange={this.handleRangeChange}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              name={"price"}
              openPrice={this.openPrice}
              handlePrice={this.handlePrice}
              toggleDropdowns={this.toggleDropdowns}
              toggleMin={this.state.toggleMinDrop}
              toggleMax={this.state.toggleMaxDrop}
              minPriceValue={this.state.minPriceValue}
              maxPriceValue={this.state.maxPriceValue}
            />
          </Filters>
          <SearchBtn>{lang ? "Search" : "Szukaj"}</SearchBtn>
          <Error />
        </SearchBar>
      </SearchWrapper>
    )
  }
}

export default connect(mapStateToProps)(Search)

/*
<ToggleAdvanced
              toggle={this.state.toggleAdvancedSettings}
              onClick={e => this.handleAdvancedSettings(e)}
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

            <AdvancedSearching
            minRooms={this.state.minRooms}
            maxRooms={this.state.maxRooms}
            insertValue={this.insertValue}
            rooms={this.state.rooms}
            floors={this.state.floor}
            minFloor={this.state.minFloor}
            maxFloor={this.state.maxFloor}
            handleResetFields={this.handleResetFields}
            toggleAdvancedSettings={this.state.toggleAdvancedSettings}
            handleAdvanced={this.handleAdvancedSettings}
          />
 */
