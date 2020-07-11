import styled from "styled-components"
import { colors } from "../../../theme"

export const AdvancedWrapper = styled.main`
  position: absolute;
  width: 95%;
  min-height: 10vh;
  height: 30vh;
  left: 0;
  background-color: #fff;
  top: 100%;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 3.6px -10px rgba(0, 0, 0, 0.017),
    0 4.7px 8.7px -10px rgba(0, 0, 0, 0.024),
    0 8.9px 16.4px -10px rgba(0, 0, 0, 0.03),
    0 15.9px 29.3px -10px rgba(0, 0, 0, 0.036),
    0 29.7px 54.7px -10px rgba(0, 0, 0, 0.043),
    0 71px 131px -10px rgba(0, 0, 0, 0.06);
  padding: 1vw;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  transition: 0.3s ease-in-out;

  ${props => {
    if (!props.toggle) {
      return `
      clip: rect(0 90% 50% 30%);
      clip-path: inset(0 5% 90% 5%);
      `
    }
  }};
  transform-origin: 100% 0;
`
export const Filters = styled.div`
  width: 100%;
  height: 10vh;
  display: grid;
  grid-template-columns: 15% 15% 60%;
  grid-row-gap: 2vw;
  grid-column-gap: 2vw;
`
export const Buttons = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
  align-items: center;
  -webkit-align-items: center;
`
export const ClearAllFields = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  color: ${colors.pink};
  height: max-content;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const SubmitBtn = styled(ClearAllFields)`
  background-color: ${colors.pink};
  color: #fff;
  padding: 20px 40px 20px;
  border-radius: 5px;
  margin: 0 0 0 80px;
`
