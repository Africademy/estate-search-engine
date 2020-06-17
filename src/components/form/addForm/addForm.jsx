import React, { useState } from "react"
import {
  FormWrapper,
  Images,
  Imgs,
  ImageContainer,
  Img,
  Basics,
  SubTitle,
  Inputs,
  InputWrapper,
  Label,
  Input,
  ReadOnlyInput,
  DropdownInput,
  Dropdown,
  Item,
  Prices,
  RentWrapper,
  Wrapper,
  Settings,
  Select,
  Currency,
  CurInput,
  CheckboxWrapper,
  Checkbox,
  PriceInputWrapper,
  PriceInput,
  PriceLabel,
  CurDropdown,
} from "./addForm.styled"
import Advantages from "../advantages/advantages"

const AddForm = ({
  estateName,
  estateStreet,
  estateCity,
  estateDistrict,
  handleInput,
  insertType,
  handleInsertType,
  toggleDropdown,
  toggleTypeDropdown,
  toggleCurrency,
  toggleCurrencyDropdown,
  sell,
  rent,
  currency,
  handleInsertCurrency,
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
  const [advantages] = useState([
    { key: 1, name: "Garage" },
    { key: 2, name: "TV" },
    { key: 3, name: "Full AGD" },
    { key: 4, name: "Internet" },
    { key: 5, name: "Security" },
  ])
  return (
    <FormWrapper>
      <Images>
        <SubTitle>Images</SubTitle>
        <Imgs>
          <ImageContainer></ImageContainer>
        </Imgs>
      </Images>
      <Basics>
        <SubTitle>Basics</SubTitle>
        <Inputs>
          <InputWrapper>
            <Label htmlFor="estateName">Name</Label>
            <Input
              onChange={e => handleInput(e)}
              name="estateName"
              type="text"
              value={estateName}
              placeholder="eg. Valley Apartments"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="estateStreet">Street</Label>
            <Input
              onChange={e => handleInput(e)}
              name="estateStreet"
              type="text"
              value={estateStreet}
              placeholder="eg. State Street 40"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="estateCity">City</Label>
            <Input
              onChange={e => handleInput(e)}
              name="estateCity"
              type="text"
              value={estateCity}
              placeholder="eg. State Street 40"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="estateDistrict">District</Label>
            <Input
              onChange={e => handleInput(e)}
              name="estateDistrict"
              type="text"
              value={estateDistrict}
              placeholder="eg. State Street 40"
            />
          </InputWrapper>
          <DropdownInput>
            <Label>Type of estate</Label>
            <ReadOnlyInput
              onClick={() => toggleTypeDropdown()}
              value={insertType}
              type="text"
              readOnly
            />
            <Dropdown toggle={toggleDropdown}>
              {types.map(type => {
                return (
                  <Item
                    onClick={e => handleInsertType(e, type.name)}
                    key={type.key}
                  >
                    {type.name}
                  </Item>
                )
              })}
            </Dropdown>
          </DropdownInput>
        </Inputs>
      </Basics>
      <Prices>
        <SubTitle>Prices</SubTitle>
        <CheckboxWrapper>
          <RentWrapper rent={rent}>
            <Settings>
              <Select>
                <Checkbox type="checkbox" />
                Rent
              </Select>
              <Currency>
                <CurInput
                  placeholder="Currency"
                  toggle={toggleDropdown}
                  onClick={() => toggleCurrencyDropdown()}
                  value={currency}
                  type="text"
                  readOnly
                />
                <CurDropdown toggle={toggleCurrency}>
                  {currencies.map(cur => {
                    return (
                      <Item
                        onClick={e => handleInsertCurrency(e, cur.name)}
                        key={cur.key}
                      >
                        {cur.name}
                      </Item>
                    )
                  })}
                </CurDropdown>
              </Currency>
            </Settings>
            <Inputs>
              <PriceInputWrapper>
                <PriceInput name="monthly" type="text" />
                <PriceLabel htmlFor="monthly">/ month</PriceLabel>
              </PriceInputWrapper>
            </Inputs>
          </RentWrapper>
          <Wrapper>
            <Select>
              <Checkbox type="checkbox" />
              Sell
            </Select>
            <Inputs>
              <PriceInputWrapper>
                <PriceInput name="pay-once" type="text" />
              </PriceInputWrapper>
            </Inputs>
          </Wrapper>
        </CheckboxWrapper>
      </Prices>
      <Advantages advantages={advantages} />
    </FormWrapper>
  )
}

export default AddForm
