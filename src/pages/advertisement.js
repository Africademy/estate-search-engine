import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Wrapper,
  Title,
  Description,
  Highlight,
} from "../components/advertisement/advertisement.styled"
import Layout from "../components/layout"
import AddForm from "../components/form/addForm/addForm"
import { advantages } from "../components/form/submit/submit"
import { addEstate } from "../components/actions/addEstate"

const mapStateToProps = state => ({
  lang: state.SwitchLanguage,
  advantages: state.AddAdvantages,
  estates: state.Estates,
})

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
    sellPrice: 0,
    rentPrice: 0,
    currency: "",
    basicError: "",
    priceError: "",
    advantagesError: "",
    clearBasics: "Clear all",
    clearPrices: "Clear all",
    uniqueKey: 0,
    validBasics: false,
    validPrices: false,
    validAdvantages: false,
    firstFile: null,
    secondFile: null,
    thirdFile: null,
  }

  componentDidMount() {
    const { estates } = this.props
    this.setState({ uniqueKey: estates.length + 1 })
  }

  handleFiles = e => {
    e.preventDefault()
    const reader = new FileReader()
    const name = e.target.name
    const file = e.target.files[0]
    console.log(file, reader)
    reader.readAsDataURL(file)
    reader.onloadend = e => {
      this.setState({ [name]: e.target.result })
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleRentAndSellChoose = e => {
    e.preventDefault()
    if (e.target.name === "rent") {
      this.setState({ [e.target.name]: true }, () => {
        this.setState({ sell: false })
      })
    } else if (e.target.name === "sell") {
      this.setState({ [e.target.name]: true }, () => {
        this.setState({ rent: false })
      })
    }
  }
  getPrice = e => {
    e.preventDefault()
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
      this.setState({ basicError: "", validBasics: true })
    }
  }
  validatePrice = () => {
    if (this.state.rent) {
      if (
        typeof parseInt(this.state.rentPrice) !== "number" ||
        parseInt(this.state.rentPrice) === 0 ||
        isNaN(parseInt(this.state.rentPrice)) ||
        this.state.rentPrice === ""
      ) {
        this.setState({ priceError: "Please fill all required fields" })
      } else {
        this.setState({ priceError: "", validPrices: true })
      }
    }
  }
  validateAdvantages = () => {
    const { advantages } = this.props
    if (advantages.length === 0) {
      this.setState({ advantagesError: "Please choose at least one advantage" })
    } else {
      this.setState({ advantagesError: "", validAdvantages: true })
    }
  }
  resetAllFields = () => {
    this.setState({
      name: "",
      street: "",
      city: "",
      district: "",
      insertType: "choose",
      toggleDropdown: false,
      toggleCurrency: false,
      sell: true,
      rent: false,
      sellPrice: 0,
      rentPrice: 0,
      currency: "",
      clearBasics: "Clear all",
      clearPrices: "Clear all",
      validBasics: false,
      validPrices: false,
      validAdvantages: false,
    })
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
        this.setState({
          rentPrice: 0,
          currency: "",
        })
        return
      }
      default: {
        return null
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    let newEstate
    const {
      uniqueKey,
      name,
      street,
      city,
      district,
      insertType,
      currency,
      rentPrice,
    } = this.state
    const { dispatch } = this.props
    this.validateBasics()
    this.validatePrice()
    this.validateAdvantages()
    const { validBasics, validPrices, validAdvantages } = this.state
    console.log(validBasics, validPrices, validAdvantages)
    setTimeout(() => {
      if (validBasics && validPrices && validAdvantages) {
        console.log("valid")
        this.setState(
          prevState => ({ uniqueKey: prevState.uniqueKey + 1 }),
          e => {
            newEstate = {
              key: uniqueKey,
              name: name,
              address: street,
              city: city,
              district: district,
              type: insertType,
              seen: false,
              prices: [
                {
                  type: "Sell",
                  price: rentPrice,
                  currency: currency,
                },
              ],
              advantages: advantages,
            }
            dispatch(addEstate(newEstate))
          }
        )
      }
    }, 800)
    this.resetAllFields()
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
    const { lang, dispatch } = this.props
    return (
      <Layout>
        <Wrapper>
          <Title lang={lang}>
            {lang
              ? "Sell or rent your estate?"
              : "Sprzedajesz czy wynajmujesz?"}
          </Title>
          {lang ? (
            <Description>
              Would you rather sell or rent your estate? No matter what you
              prefer, it is best <Highlight>place</Highlight> to do it
            </Description>
          ) : (
            <Description>
              Sprzedajesz czy wynajmujesz swoją nieruchomość? Nie zależnie od
              wyboru to jest najlepsze <Highlight>miejsce</Highlight> do tego
            </Description>
          )}
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
            priceError={this.state.priceError}
            advantagesError={this.state.advantagesError}
            firstFile={this.state.firstFile}
            secondFile={this.state.secondFile}
            thirdFile={this.state.thirdFile}
            handleFiles={this.handleFiles}
          />
        </Wrapper>
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(Advertisement)
