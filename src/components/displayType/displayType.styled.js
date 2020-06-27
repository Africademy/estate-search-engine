import styled from "styled-components"
import { colors } from "../../theme"

export const DisplayWrapper = styled.section`
  width: 15vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
export const ShowOnMap = styled.button`
  font-size: 1em;
  border: none;
  background-color: ${props => (props.path ? colors.pink : "#ccc")};
  color: ${props => (props.path ? "#fff" : "#000")};
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
export const ShowList = styled(ShowOnMap)`
  background-color: ${props => (props.path ? "#ccc" : colors.pink)};
  color ${props => (props.path ? "#000" : "#fff")}
`
