import React, { Component } from "react"
import {
  Wrapper,
  Title,
  Description,
  Highlight,
} from "../components/advertisement/advertisement.styled"
import Layout from "../components/layout"
import AddForm from "../components/form/addForm/addForm"

class Advertisement extends Component {
  state = {
    estateName: "",
    estateStreet: "",
    estateCity: "",
    estateDistrict: "",
    insertType: "choose",
    toggleDropdown: false,
    toggleCurrency: false,
    sell: true,
    rent: false,
    currency: "",
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
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
  toggleTypeDropdown = () => {
    this.setState({ toggleDropdown: !this.state.toggleDropdown })
  }
  toggleCurrencyDropdown = () => {
    this.setState({ toggleCurrency: !this.state.toggleCurrency })
  }

  render() {
    const {
      estateName,
      estateStreet,
      estateCity,
      estateDistrict,
      insertType,
      toggleDropdown,
      sell,
      rent,
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
            estateName={estateName}
            estateStreet={estateStreet}
            estateCity={estateCity}
            estateDistrict={estateDistrict}
            insertType={insertType}
            toggleDropdown={toggleDropdown}
            toggleCurrency={toggleCurrency}
            sell={sell}
            rent={rent}
            currency={currency}
            handleInput={this.handleInput}
            handleInsertType={this.handleInsertType}
            toggleTypeDropdown={this.toggleTypeDropdown}
            toggleCurrencyDropdown={this.toggleCurrencyDropdown}
            handleInsertCurrency={this.handleInsertCurrency}
          />
        </Wrapper>
      </Layout>
    )
  }
}

export default Advertisement
