import React from "react"
import { AdvancedWrapper } from "./advancedSearching.styled"
import AdvancedFilter from "../advancedFilter/advancedFilter"
import CheckboxCollection from "../checkboxCollection/checkboxCollection"
import { useSelector } from "react-redux"
import { toggleAmountOfRooms } from "../../actions/advancedActions/toggleAmountOfRooms"
import { toggleMaxAmountOfRooms } from "../../actions/advancedActions/toggleMaxAmountOfRooms"
import { toggleMinFloor } from "../../actions/advancedActions/toggleMinFloor"
import { toggleMaxFloor } from "../../actions/advancedActions/toggleMaxFloor"

const AdvancedSearching = ({
  rooms,
  insertValue,
  minRooms,
  maxRooms,
  floors,
  minFloor,
  maxFloor,
}) => {
  const toggleDropdown = useSelector(state => state.toggleRoomsDropdown)
  const toggleMaxRooms = useSelector(state => state.toggleMaxRooms)
  const toggleFloor = useSelector(state => state.toggleFloor)
  const toggleMaximumFloor = useSelector(state => state.toggleMaxFloor)
  return (
    <AdvancedWrapper>
      <AdvancedFilter
        insertValue={insertValue}
        array={rooms}
        title={"Amount of rooms"}
        minValue={minRooms}
        maxValue={maxRooms}
        toggle={toggleDropdown}
        maxToggle={toggleMaxRooms}
        lowerName={"minRooms"}
        higherName={"maxRooms"}
        firstDispatch={toggleAmountOfRooms}
        secondDispatch={toggleMaxAmountOfRooms}
      />
      <AdvancedFilter
        title={"Choose floor"}
        array={floors}
        minValue={minFloor}
        maxValue={maxFloor}
        lowerName={"minFloor"}
        higherName={"maxFloor"}
        firstDispatch={toggleMinFloor}
        secondDispatch={toggleMaxFloor}
        toggle={toggleFloor}
        maxToggle={toggleMaximumFloor}
        insertValue={insertValue}
      />
      <CheckboxCollection />
    </AdvancedWrapper>
  )
}

export default AdvancedSearching
