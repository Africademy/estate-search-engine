import React, { useState } from "react"
import {
  AdvancedWrapper,
  GridFooter,
  Footer,
  ClearFieldsBtn,
  SubmitBtn,
} from "./advancedSearch.styled"
import AdvancedFilter from "../searchEngine/advancedFilters/advancedFilters"
import AdvantagesFilter from "../searchEngine/advantagesFilter/advantagesFilter"
import advantages from "../../data/advantages.json"

// TODO ADVANCED SEARCHING
const AdvancedSearch = ({
  toggleAdvanced,
  insertMinRoom,
  insertMaxRoom,
  minRooms,
  maxRooms,
}) => {
  const [advs] = useState(advantages)
  const [filters] = useState([
    { key: 1, name: "Luxurious", checked: false },
    { key: 2, name: "Only with price", checked: false },
    { key: 3, name: "Only with photo", checked: false },
  ])
  const [rooms, setMinRooms] = useState([
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
  ])
  const [year] = useState([
    { key: 1, value: "Any" },
    { key: 2, value: 1930 },
    { key: 3, value: 1940 },
    { key: 4, value: 1950 },
    { key: 5, value: 1980 },
    { key: 6, value: 2000 },
    { key: 7, value: 2005 },
    { key: 8, value: 2010 },
    { key: 9, value: 2015 },
    { key: 10, value: 2020 },
  ])

  const [floor] = useState()
  return (
    <AdvancedWrapper toggleAdvanced={toggleAdvanced}>
      <AdvancedFilter
        min={minRooms}
        max={maxRooms}
        insertMinRoom={insertMinRoom}
        insertMaxRoom={insertMaxRoom}
        dropdown={true}
        title={"Amount of rooms"}
        icon={false}
        array={rooms}
        readOnly={true}
      />
      <AdvancedFilter
        min={minRooms}
        max={maxRooms}
        insertMinRoom={insertMinRoom}
        insertMaxRoom={insertMaxRoom}
        dropdown={false}
        title={"Price per meter"}
        icon={true}
        array={rooms}
        readOnly={false}
      />
      <AdvancedFilter title={"Floor"} array={rooms} dropdown={true} />
      <AdvancedFilter
        min={minRooms}
        max={maxRooms}
        insertMinRoom={insertMinRoom}
        insertMaxRoom={insertMaxRoom}
        dropdown={false}
        title={"Building floors"}
        icon={false}
        array={rooms}
        readOnly={false}
      />
      <AdvancedFilter
        min={minRooms}
        max={maxRooms}
        insertMinRoom={insertMinRoom}
        insertMaxRoom={insertMaxRoom}
        dropdown={true}
        title={"Construction year"}
        icon={false}
        array={year}
        readOnly={false}
      />
      <AdvantagesFilter title={"Advantages"} array={advs} />
      <AdvantagesFilter title={"Filters"} array={filters} />
      <GridFooter>
        <Footer>
          <ClearFieldsBtn>Clear</ClearFieldsBtn>
          <SubmitBtn>Search</SubmitBtn>
        </Footer>
      </GridFooter>
    </AdvancedWrapper>
  )
}

export default AdvancedSearch
