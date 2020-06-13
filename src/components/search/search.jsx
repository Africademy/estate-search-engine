import React, { Component, createRef } from "react"
import {
  SearchWrapper,
  SearchBar,
  SearchInput,
  SearchBtn,
} from "./search.styled"
import HomepageIllustration from "../homepageIllustration/homepageIllustration"
import Types from "../searchEngine/basicFilters/typeOf/typeOf"
import arrowDown from "../../static/icons/nav-arrow-down.svg"

class Search extends Component {
  constructor() {
    super()
    this.state = {
      rent: false,
      chooseType: "Choose...",
      choosePayment: "Sell or rent?",
      toggleType: false,
      togglePayment: false,
      toggleRooms: false,
      minRooms: 0,
      maxRooms: 4,
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
        { key: 1, type: "Sell" },
        { key: 2, type: "Rent" },
      ],
    }
    this.type = createRef()
  }
  handleOption = e => {
    this.setState({ chooseType: e.target.innerText })
  }
  toggleDropdown = () => {
    this.setState({ toggleType: !this.state.toggleType })
  }
  handleTransaction = e => {
    this.setState({ choosePayment: e.target.innerText })
  }
  render() {
    const { types, rooms, transaction } = this.state
    return (
      <SearchWrapper>
        <HomepageIllustration />
        <SearchBar>
          <SearchInput type="search" placeholder="Search..." />
          <Types
            reference={this.type}
            toggleState={this.state.toggleType}
            toggleDropdown={this.toggleDropdown}
            types={this.state.types}
            chooseType={this.state.chooseType}
          />
          <SearchBtn>Search</SearchBtn>
        </SearchBar>
      </SearchWrapper>
    )
  }
}

export default Search
