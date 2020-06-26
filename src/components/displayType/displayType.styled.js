import styled from "styled-components"
import { colors } from "../../theme"

export const DisplayWrapper = styled.section`
  width: 10vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
export const ShowOnMap = styled.button`
  font-size: 1em;
  border: none;
  background-color: #dedede;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  position: relative;
  padding: 10px 20px 10px;
  border-radius: 50px;

  svg {
    margin: 0 5px 0 0;
  }
  &:focus {
    outline: none;
  }
`
export const ShowList = styled(ShowOnMap)``
