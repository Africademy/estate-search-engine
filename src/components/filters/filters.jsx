import React, { useState } from "react"
import {
  FiltersWrapper,
  BasicSearchWrapper,
  SearchWrapper,
  AdvancedSearchWrapper,
  FilterWrapper,
  Label,
  MinPrice,
  ChooseValue,
  Dropdown,
} from "./filters.styled"
import { SearchInput } from "../search/search.styled"
import BasicFilter from "../searchEngine/basicFilters/basicFilter"

const Filters = ({ searchInput, handleSearchInput, lang }) => {
  const [types] = useState([
    { key: 1, name: "Flat" },
    { key: 2, name: "House" },
    { key: 3, name: "Garage" },
    { key: 4, name: "Commercial" },
    { key: 5, name: "Parcels" },
    { key: 6, name: "Rooms" },
    { key: 7, name: "All" },
  ])
  const [toggle, setToggle] = useState(false)

  const toggleDropdown = () => {
    setToggle(!toggle)
  }
  return (
    <FiltersWrapper>
      <BasicSearchWrapper>
        <SearchWrapper>
          <SearchInput
            value={searchInput !== undefined ? searchInput : ""}
            type="text"
            placeholder={lang ? "Search..." : "Szukaj..."}
            onChange={e => handleSearchInput(e)}
          />
        </SearchWrapper>
        <BasicFilter
          array={types}
          title={"Type of estate"}
          name={"chooseType"}
          handleToggle={toggleDropdown}
          toggleState={toggle}
        />
        <BasicFilter
          array={types}
          title={"Rent or buy"}
          name={"chooseType"}
          handleToggle={toggleDropdown}
          toggleState={toggle}
        />
        <FilterWrapper>
          <Label>Price</Label>
          <ChooseValue>
            <MinPrice min={0} max={2000} type="number" />
            <Dropdown></Dropdown>
          </ChooseValue>
        </FilterWrapper>
      </BasicSearchWrapper>
      <AdvancedSearchWrapper></AdvancedSearchWrapper>
    </FiltersWrapper>
  )
}

export default Filters
