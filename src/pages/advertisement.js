import React, { Component } from "react"
import {
  Wrapper,
  Title,
  Description,
  Highlight,
} from "../components/advertisement/advertisement.styled"
import Layout from "../components/layout"
import AddForm from "../components/form/addForm/addForm"
import { advantages } from "../components/form/submit/submit"

class Advertisement extends Component {
  state = {
    name: "",
    street: "",
    city: "",
    district: "",
    insertType: "choose",
    toggleDropdown: false,
    toggleCurrency: false,
    sell: true,
    rent: false,
    sellAndRent: false,
    sellPrice: 0,
    rentPrice: 0,
    currency: "",
    basicError: "",
    clearBasics: "Clear all",
    clearPrices: "Clear all",
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleRentAndSellChoose = e => {
    e.preventDefault()
    switch (e.target.name) {
      case "rent": {
        this.setState({ [e.target.name]: true }, () => {
          this.setState({ sell: false, sellAndRent: false })
        })
        return
      }
      case "sell": {
        this.setState({ [e.target.name]: true }, () => {
          this.setState({ rent: false, sellAndRent: false })
        })
        return
      }
      case "sellAndRent": {
        this.setState({ [e.target.name]: true }, () => {
          this.setState({ rent: false, sell: false })
        })
        return
      }
      default: {
        return
      }
    }
  }
  getPrice = e => {
    e.preventDefault()
    console.log(e.which)
    this.setState({ rentPrice: e.target.value })
  }
  handleInsertType = (e, name) => {
    e.preventDefault()
    this.setState({ insertType: name }, () => {
      this.toggleTypeDropdown()
    })
  }
  handleInsertCurrency = (e, name) => {
    e.preventDefault()
    this.setState({ currency: name }, () => {
      this.setState({ toggleCurrency: false })
    })
  }
  toggleRent = () => {
    if (!this.state.sell) {
      this.setState({ rent: true })
    } else {
      this.setState({ rent: !this.state.rent })
    }
  }
  toggleSell = () => {
    if (!this.state.rent) {
      this.setState({ sell: true })
    } else {
      this.setState({ sell: !this.state.sell })
    }
  }

  toggleTypeDropdown = () => {
    this.setState({ toggleDropdown: !this.state.toggleDropdown })
  }
  toggleCurrencyDropdown = () => {
    this.setState({ toggleCurrency: !this.state.toggleCurrency })
  }
  validateBasics = () => {
    const { name, street, city, district, insertType } = this.state
    if (
      name === "" &&
      street === "" &&
      city === "" &&
      district === "" &&
      insertType === "choose"
    ) {
      this.setState({ basicError: "You have to fill all fields" })
    } else {
      this.setState({ basicError: "" })
    }
  }
  clearAllFields = e => {
    e.preventDefault()
    switch (e.target.name) {
      case "basics": {
        this.setState({
          name: "",
          street: "",
          city: "",
          district: "",
          insertType: "choose",
        })
        return
      }
      case "prices": {
        return
      }
      default: {
        return null
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const { name, street, city, district, insertType, currency } = this.state
    this.validateBasics()
    const newEstate = {
      name: name,
      address: street,
      city: city,
      district: district,
      type: insertType,
      prices: [
        {
          type: "Sell",
          price: "",
          currency: currency,
        },
      ],
      advantages: advantages,
    }
  }

  render() {
    const {
      name,
      street,
      city,
      district,
      insertType,
      toggleDropdown,
      sell,
      sellPrice,
      rent,
      rentPrice,
      toggleCurrency,
      currency,
    } = this.state
    return (
      <Layout>
        <Wrapper>
          <Title>Sell or rent your estate?</Title>
          <Description>
            Would you rather sell or rent your estate? No matter what you
            prefer, it is best <Highlight>place</Highlight> to do it
          </Description>
          <AddForm
            name={name}
            street={street}
            city={city}
            district={district}
            basicError={this.state.basicError}
            insertType={insertType}
            toggleDropdown={toggleDropdown}
            toggleCurrency={toggleCurrency}
            sell={sell}
            sellPrice={sellPrice}
            rent={rent}
            sellAndRent={this.state.sellAndRent}
            rentPrice={rentPrice}
            currency={currency}
            handleInput={this.handleInput}
            handleInsertType={this.handleInsertType}
            toggleTypeDropdown={this.toggleTypeDropdown}
            toggleCurrencyDropdown={this.toggleCurrencyDropdown}
            handleInsertCurrency={this.handleInsertCurrency}
            toggleRent={this.toggleRent}
            toggleSell={this.toggleSell}
            handleSubmit={this.handleSubmit}
            clearAllFields={this.clearAllFields}
            clearBasics={this.state.clearBasics}
            clearPrices={this.state.clearPrices}
            getPrice={this.getPrice}
            handleRentAndSellChoose={this.handleRentAndSellChoose}
          />
        </Wrapper>
      </Layout>
    )
  }
}

export default Advertisement
