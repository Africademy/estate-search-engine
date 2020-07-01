import styled from "styled-components"

export const FiltersWrapper = styled.section`
  width: 100%;
  height: 10vh;
  background-color: #d7d7d7;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 1vw 5vw 1vw;
`
export const BasicSearchWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const SearchWrapper = styled.div`
  width: 30%;
  display: flex;
`
export const AdvancedSearchWrapper = styled.div`
  width: 100%;
  height: auto;
`
export const FilterWrapper = styled.div`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const Label = styled.label``
export const MinPrice = styled.input`
  padding: 10px;
  font-size: 1em;
`
export const ChooseValue = styled.div`
  position: relative;
`
export const Dropdown = styled.div`
  width: 100%;
  height: 10vh;
  position: absolute;
  background-color: #ccc;
  z-index: 10;
`
