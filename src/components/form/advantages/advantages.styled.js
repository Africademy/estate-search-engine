import styled from "styled-components"
import { colors } from "../../../theme"

export const Wrapper = styled.section`
  width: 100%;
  height: 40vh;
`
export const List = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  margin: 2vw 0 0;
`
export const Item = styled.button`
  font-size: 1em;
  padding: 10px 20px 10px;
  border-radius: 50px;
  border: none;
  background-color: ${colors.purple};
  color: #fff;
  margin: 0 10px 0 0;
  cursor: pointer;
`
