import React from "react"
import { AdvancedWrapper } from "./advancedSearch.styled"
import AdvancedFilter from "../searchEngine/advancedFilters/advancedFilters"

const AdvancedSearch = ({
  toggleAdvanced,
  insertMinRoom,
  insertMaxRoom,
  minRooms,
  maxRooms,
}) => {
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
    </AdvancedWrapper>
  )
}

export default AdvancedSearch
