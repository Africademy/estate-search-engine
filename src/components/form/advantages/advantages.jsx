import React from "react"
import {
  Wrapper,
  List,
  Item,
  Selected,
  SelectedItem,
  SelectedItems,
  Remove,
} from "./advantages.styled"
import { ClearBtn, Header, SubTitle } from "../basics/basics.styled"
import { useDispatch, useSelector } from "react-redux"
import { AddAdvantages } from "../../actions/addAdvantages"
import { removeAdvantage } from "../../actions/removeAdvantage"

const Advantages = ({ advantages, clearPrices }) => {
  const advs = useSelector(state => state.AddAdvantages)
  const dispatch = useDispatch()

  const handleSelect = (adv, e) => {
    e.preventDefault()
    adv.selected = true
    advantages.filter(_adv => {
      return _adv.key !== adv.key
    })
    dispatch(AddAdvantages(adv))
  }
  const handleRemoveSelected = (e, adv) => {
    e.preventDefault()
    dispatch(removeAdvantage(adv.key))
    adv.selected = false
  }
  return (
    <Wrapper>
      <Header>
        <SubTitle>Advantages</SubTitle>
        <ClearBtn switch={clearPrices}>{clearPrices}</ClearBtn>
      </Header>
      <List>
        {advantages.map(adv => {
          return (
            <Item
              onClick={e => handleSelect(adv, e)}
              selected={adv.selected}
              key={adv.key}
            >
              {adv.name}
            </Item>
          )
        })}
      </List>
      <Selected>
        {advs.length > 0 ? <SubTitle>You selected</SubTitle> : null}
        <SelectedItems>
          {advs.length > 0
            ? advs.map(adv => {
                return (
                  <SelectedItem
                    onClick={e => handleRemoveSelected(e, adv)}
                    selected={adv.selected}
                    key={adv.key}
                  >
                    {adv.name} <Remove />
                  </SelectedItem>
                )
              })
            : null}
        </SelectedItems>
      </Selected>
    </Wrapper>
  )
}

export default Advantages
