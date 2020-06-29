import React, { useState } from "react"
import { FormWrapper } from "./addForm.styled"
import Images from "../images/images"
import Basics from "../basics/basics"
import Prices from "../prices/prices"
import Localization from "../map/localization"
import Advantages from "../advantages/advantages"
import Submit from "../submit/submit"
import advantagesJSON from "../../../data/advantages.json"

const AddForm = ({
  name,
  street,
  city,
  district,
  handleInput,
  insertType,
  handleInsertType,
  toggleDropdown,
  toggleTypeDropdown,
  toggleCurrency,
  toggleCurrencyDropdown,
  sell,
  sellPrice,
  rentPrice,
  rent,
  currency,
  handleInsertCurrency,
  handleSubmit,
  basicError,
  clearAllFields,
  clearBasics,
  clearPrices,
  getPrice,
  handleRentAndSellChoose,
  priceError,
  advantagesError,
  firstFile,
  secondFile,
  thirdFile,
  handleFiles,
}) => {
  const [types] = useState([
    { key: 1, name: "Flat" },
    { key: 2, name: "House" },
    { key: 3, name: "Garage" },
    { key: 4, name: "Commercial" },
    { key: 5, name: "Parcels" },
    { key: 6, name: "Rooms" },
  ])
  const [currencies] = useState([
    { key: 1, name: "PLN" },
    { key: 2, name: "EUR" },
    { key: 3, name: "USD" },
  ])
  return (
    <FormWrapper onSubmit={e => handleSubmit(e)}>
      <Images
        firstFile={firstFile}
        secondFile={secondFile}
        thirdFile={thirdFile}
        handleFiles={handleFiles}
      />
      <Basics
        city={city}
        name={name}
        street={street}
        types={types}
        clearAllFields={clearAllFields}
        district={district}
        basicError={basicError}
        handleInput={handleInput}
        toggleTypeDropdown={toggleTypeDropdown}
        toggleDropdown={toggleDropdown}
        insertType={insertType}
        handleInsertType={handleInsertType}
        clearBasics={clearBasics}
      />
      <Prices
        currencies={currencies}
        currency={currency}
        toggleDropdown={toggleDropdown}
        toggleCurrency={toggleCurrency}
        toggleCurrencyDropdown={toggleCurrencyDropdown}
        sell={sell}
        sellPrice={sellPrice}
        rentPrice={rentPrice}
        rent={rent}
        handleInsertCurrency={handleInsertCurrency}
        clearAllFields={clearAllFields}
        clearPrices={clearPrices}
        getPrice={getPrice}
        handleRentAndSellChoose={handleRentAndSellChoose}
        priceError={priceError}
      />
      <Localization />
      <Advantages
        clearPrices={clearPrices}
        advantages={advantagesJSON}
        advantagesError={advantagesError}
      />
      <Submit />
    </FormWrapper>
  )
}

export default AddForm
