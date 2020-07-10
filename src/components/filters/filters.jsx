import React, { useState } from "react"
import {
  FiltersWrapper,
  BasicSearchWrapper,
  SearchWrapper,
  AdvancedSearchWrapper,
} from "./filters.styled"
import { SearchInput } from "../search/search.styled"
import BasicFilter from "../searchEngine/basicFilters/basicFilter"
import { useSelector } from "react-redux"

const Filters = ({ searchInput, handleSearchInput, lang }) => {
  const searchProps = useSelector(state => state.search)
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
            value={searchProps !== undefined ? searchProps.search : ""}
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
          chooseType={searchProps !== undefined ? searchProps.estateType : ""}
        />
        <BasicFilter
          array={types}
          title={"Rent or buy"}
          name={"chooseType"}
          handleToggle={toggleDropdown}
          toggleState={toggle}
          chooseType={searchProps !== undefined ? searchProps.transaction : ""}
        />
      </BasicSearchWrapper>
      <AdvancedSearchWrapper></AdvancedSearchWrapper>
    </FiltersWrapper>
  )
}

export default Filters
