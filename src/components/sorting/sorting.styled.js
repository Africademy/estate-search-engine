import styled from "styled-components"
import { colors } from "../../theme"

export const SortingWrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 5vh;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 10px 5vw 10px;
`
export const SortContainer = styled.div`
  width: max-content;
  height: max-content;
  position: relative;
`
export const SortDropdown = styled.div`
  position: absolute;
  z-index: 5;
  width: 75%;
  height: auto;
  top: 100%;
  right: 0;
  background-color: #f3f3f3;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  transition: 0.3s ease-in-out;
  transform-origin: center 0;
`
export const SortInput = styled.input`
  height: 40px;
  font-size: 1em;
  padding: 10px;
  border: 1px solid #9b9b9b;
  border-radius: 10px;

  &:focus {
    outline: none;
    border-radius: 10px 10px 0 0;
  }
`
export const Label = styled.label`
  font-size: 1em;
  margin: 0 10px 0 0;
`
export const Item = styled.button`
  border: none;
  padding: 10px 20px 10px;
  font-size: 1em;
  text-align: left;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #d9d9d9;
  }
  &:focus {
    outline: none;
  }
`
