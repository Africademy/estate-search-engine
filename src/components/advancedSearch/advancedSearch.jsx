import React, { useState } from "react"
import { AdvancedWrapper } from "./advancedSearch.styled"
import AdvancedFilter from "../searchEngine/advancedFilters/advancedFilters"
import AdvantagesFilter from "../searchEngine/advantagesFilter/advantagesFilter"
import advantages from "../../data/advantages.json"

const AdvancedSearch = ({
  toggleAdvanced,
  insertMinRoom,
  insertMaxRoom,
  minRooms,
  maxRooms,
}) => {
  const [advs] = useState(advantages)
  return (
    <AdvancedWrapper toggleAdvanced={toggleAdvanced}>
      <AdvancedFilter
        minRooms={minRooms}
        maxRooms={maxRooms}
        insertMinRoom={insertMinRoom}
        insertMaxRoom={insertMaxRoom}
        dropdown={true}
      />
      <AdvancedFilter
        minRooms={minRooms}
        maxRooms={maxRooms}
        insertMinRoom={insertMinRoom}
        insertMaxRoom={insertMaxRoom}
        dropdown={true}
      />
      <AdvantagesFilter advs={advs} />
    </AdvancedWrapper>
  )
}

export default AdvancedSearch
