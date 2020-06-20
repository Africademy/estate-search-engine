import React from "react"
import { PricesWrapper, Checkbox, ChooseWrapper, Choose } from "./prices.styled"
import {
  Header,
  SubTitle,
  ClearBtn,
  Inputs,
  Item,
} from "../basics/basics.styled"
import Rent from "./rent/rent"

const Prices = ({
  clearAllFields,
  rent,
  toggleDropdown,
  toggleCurrencyDropdown,
  currency,
  currencies,
  toggleCurrency,
  handleInsertCurrency,
  rentPrice,
  sell,
  sellAndRent,
  sellPrice,
  clearPrices,
  getPrice,
  handleRentAndSellChoose,
}) => {
  return (
    <PricesWrapper>
      <Header>
        <SubTitle>Prices</SubTitle>
        <ClearBtn
          switch={clearPrices}
          name="prices"
          onClick={e => clearAllFields(e)}
        >
          {clearPrices}
        </ClearBtn>
      </Header>
      <ChooseWrapper>
        <Choose>
          <Checkbox
            onChange={e => handleRentAndSellChoose(e)}
            name="rent"
            status={rent}
            type="checkbox"
          />
          Rent
        </Choose>
        <Choose>
          <Checkbox
            onChange={e => handleRentAndSellChoose(e)}
            status={sell}
            name="sell"
            type="checkbox"
          />
          Sell
        </Choose>
        <Choose>
          <Checkbox
            onChange={e => handleRentAndSellChoose(e)}
            status={sellAndRent}
            name="sellAndRent"
            type="checkbox"
          />
          Rent & Sell
        </Choose>
      </ChooseWrapper>
      <Rent
        toggleCurrencyDropdown={toggleCurrencyDropdown}
        toggleCurrency={toggleCurrency}
        toggleDropdown={toggleDropdown}
        currency={currency}
        currencies={currencies}
        rentPrice={rentPrice}
        getPrice={getPrice}
      />
    </PricesWrapper>
  )
}

export default Prices
