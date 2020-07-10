import React, { useState, useEffect } from "react"
import {
  SortingWrapper,
  SortContainer,
  SortInput,
  Label,
  SortDropdown,
  Item,
  InputContainer,
} from "./sorting.styled"
import DisplayType from "../displayType/displayType"
import { useDispatch, useSelector } from "react-redux"
import { sortFromLowest } from "../actions/sortFromLowest"
import { sortFromHighest } from "../actions/sortFromHighest"

const Sorting = ({ handleSwitch }) => {
  const dispatch = useDispatch()
  const estates = useSelector(state => state.Filter)
  const [sortInput, setSortInput] = useState("Price")
  const [trigger, setTrigger] = useState(false)
  const [toggleDropdown, setDropdown] = useState(false)
  const handleSorting = e => {
    if (e.target.name === "lowest") {
      setSortInput(e.target.innerText)
      dispatch(sortFromLowest())
    } else if (e.target.name === "highest") {
      setSortInput(e.target.innerText)
      dispatch(sortFromHighest())
    }
    handleSwitch()
    setDropdown(!toggleDropdown)
  }
  return (
    <SortingWrapper>
      <DisplayType />
      <SortContainer>
        <Label>Sort by</Label>
        <InputContainer>
          <SortInput
            onClick={() => setDropdown(!toggleDropdown)}
            value={sortInput}
            readOnly
            placeholder="price"
          />
          <SortDropdown toggle={toggleDropdown}>
            <Item name="lowest" onClick={e => handleSorting(e)} key={1}>
              From lowest
            </Item>
            <Item name="highest" onClick={e => handleSorting(e)} key={2}>
              From highest
            </Item>
          </SortDropdown>
        </InputContainer>
      </SortContainer>
    </SortingWrapper>
  )
}

export default Sorting
