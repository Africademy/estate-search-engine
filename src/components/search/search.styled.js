import styled from "styled-components"
import { colors } from "../../theme"

export const SearchWrapper = styled.main`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${colors.blue};
  padding: 5vw 0 5vw;
`
export const SearchBar = styled.section`
  width: 70%;
  height: 100px;
  background-color: ${colors.darkBlue};
  border-radius: 10px;
`
