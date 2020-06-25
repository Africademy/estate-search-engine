import React, { useState } from "react"
import {
  FiltersWrapper,
  BasicSearchWrapper,
  SearchWrapper,
  AdvancedSearchWrapper,
} from "./filters.styled"
import { SearchInput } from "../search/search.styled"
import BasicFilter from "../searchEngine/basicFilters/basicFilter"

const Filters = () => {
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
          <SearchInput type="text" />
          <BasicFilter
            array={types}
            title={"Type of estate"}
            name={"chooseType"}
            handleToggle={toggleDropdown}
            toggleState={toggle}
          />
        </SearchWrapper>
      </BasicSearchWrapper>
      <AdvancedSearchWrapper></AdvancedSearchWrapper>
    </FiltersWrapper>
  )
}

export default Filters
