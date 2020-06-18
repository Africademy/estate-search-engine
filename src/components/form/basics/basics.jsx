import React from "react"
import {
  BasicsWrapper,
  Header,
  ClearBtn,
  SubTitle,
  Inputs,
  InputWrapper,
  Label,
  Input,
  ReadOnlyInput,
  DropdownInput,
  Dropdown,
  ErrorMessage,
  Item,
} from "./basics.styled"

const Basics = ({
  clearAllFields,
  handleInput,
  name,
  street,
  city,
  district,
  toggleTypeDropdown,
  insertType,
  toggleDropdown,
  types,
  handleInsertType,
  basicError,
  clearBasics,
}) => {
  return (
    <BasicsWrapper>
      <Header>
        <SubTitle>Basics</SubTitle>
        <ClearBtn
          switch={clearBasics}
          name="basics"
          onClick={e => clearAllFields(e)}
        >
          {clearBasics}
        </ClearBtn>
      </Header>
      <Inputs>
        <InputWrapper>
          <Label htmlFor="estateName">Name</Label>
          <Input
            onChange={e => handleInput(e)}
            name="name"
            type="text"
            value={name}
            placeholder="eg. Valley Apartments"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="estateStreet">Street</Label>
          <Input
            onChange={e => handleInput(e)}
            name="street"
            type="text"
            value={street}
            placeholder="eg. State Street 40"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="estateCity">City</Label>
          <Input
            onChange={e => handleInput(e)}
            name="city"
            type="text"
            value={city}
            placeholder="eg. State Street 40"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="estateDistrict">District</Label>
          <Input
            onChange={e => handleInput(e)}
            name="district"
            type="text"
            value={district}
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
      {basicError === "" ? null : <ErrorMessage>{basicError}</ErrorMessage>}
    </BasicsWrapper>
  )
}

export default Basics
