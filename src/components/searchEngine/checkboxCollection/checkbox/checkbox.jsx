import React, { useEffect } from "react"
import { Wrapper, Input, Label } from "./checkbox.styled"
import { useDispatch, useSelector } from "react-redux"
import { filterByAdvantages } from "../../../actions/advancedActions/filterByAdvantages"
import { removeSelectedAdvantage } from "../../../actions/advancedActions/removeSelectedAdvantage"

const Checkbox = ({ item }) => {
  const dispatch = useDispatch()
  const advs = useSelector(state => state.filterByAdvantages)
  const handleCheck = item => {
    if (item.checked) {
      item.checked = !item.checked
      dispatch(removeSelectedAdvantage(item))
    } else {
      item.checked = !item.checked
      dispatch(filterByAdvantages(item))
    }
  }
  useEffect(() => {}, [advs])
  return (
    <Wrapper>
      <Input
        onChange={() => handleCheck(item)}
        checked={item.checked}
        type="checkbox"
      />
      <Label>{item.name.en}</Label>
    </Wrapper>
  )
}

export default Checkbox
