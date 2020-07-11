import React, { useState } from "react"
import {
  FiltersWrapper,
  BasicSearchWrapper,
  SearchWrapper,
  AdvancedSearchWrapper,
} from "./filters.styled"
import { SearchInput, SearchBtn } from "../search/search.styled"
import BasicFilter from "../searchEngine/basicFilters/basicFilter"
import { useSelector, useDispatch } from "react-redux"
import { filterByPrice } from "../actions/filterByPrice"

const Filters = ({ searchInput, handleSearchInput, lang }) => {
  const dispatch = useDispatch()
  const searchProps = useSelector(state => state.search)
  const [chooseType, setType] = useState("")
  const [togglePrice, setTogglePrice] = useState(false)
  const [toggleMinDrop, setMinDrop] = useState(false)
  const [toggleMaxDrop, setMaxDrop] = useState(false)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
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
  const openPrice = e => {
    e.preventDefault()
    setTogglePrice(true)
  }
  const handlePrice = (e, value) => {
    e.preventDefault()
    console.log("click")
    if (e.target.name === "minPrice") {
      setMinPrice(value)
      setMinDrop(false)
    } else if (e.target.name === "maxPrice") {
      setMaxPrice(value)
      setMaxDrop(false)
    }
  }
  const toggleDropdowns = e => {
    e.preventDefault()
    if (e.target.name === "minPrice") setMinDrop(true)
    if (e.target.name === "maxPrice") setMaxDrop(true)
  }
  const handleRangeChange = e => {
    e.preventDefault()
    setTogglePrice(e.target.value)
  }
  const handleSearch = e => {
    e.preventDefault()
    console.log("submit")
  }
  return (
    <FiltersWrapper onSubmit={e => handleSearch(e)}>
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
          title={lang ? "Type of estate" : "Typ"}
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
        <BasicFilter
          chooseType={chooseType}
          array={null}
          title={lang ? "Price" : "Cena"}
          handleToggle={handlePrice}
          toggleState={togglePrice}
          handleRangeChange={handleRangeChange}
          minPriceValue={
            searchProps !== undefined ? searchProps.minPrice : minPrice
          }
          maxPriceValue={
            searchProps !== undefined ? searchProps.maxPrice : maxPrice
          }
          name={"price"}
          openPrice={openPrice}
          handlePrice={handlePrice}
          toggleMin={toggleMinDrop}
          toggleMax={toggleMaxDrop}
          toggleDropdowns={toggleDropdowns}
        />
        <SearchBtn>{lang ? "Search" : "Szukaj"}</SearchBtn>
      </BasicSearchWrapper>
      <AdvancedSearchWrapper></AdvancedSearchWrapper>
    </FiltersWrapper>
  )
}

export default Filters
