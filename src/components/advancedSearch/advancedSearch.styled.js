import styled from "styled-components"
import { colors } from "../../theme"

export const AdvancedWrapper = styled.section`
  width: 100%;
  height: auto;
  transform: scale(${props => (props.toggleAdvanced ? 1 : 0)});
  visibility: ${props => (props.toggleAdvanced ? "visible" : "hidden")};
  transform-origin: 80% 0;
  background-color: #ffffff;
  position: absolute;
  z-index: 0;
  left: 0;
  top: 110%;
  border-radius: 10px;
  box-shadow: 0 0.7px 2.2px -10px rgba(0, 0, 0, 0.034),
    0 1.8px 5.3px -10px rgba(0, 0, 0, 0.048),
    0 3.4px 10px -10px rgba(0, 0, 0, 0.06),
    0 6px 17.9px -10px rgba(0, 0, 0, 0.072),
    0 11.3px 33.4px -10px rgba(0, 0, 0, 0.086),
    0 27px 80px -10px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  padding: 10px;

  display: grid;
  grid-template-areas: "filter filter1 filter2 filter3 filter4" "filter5 filter6 . . footer";
`
export const GridFooter = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: footer;
  align-items: baseline;
`
export const Footer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const ClearFieldsBtn = styled.button`
  font-size: 1em;
  width: max-content;
  height: max-content;
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const SubmitBtn = styled(ClearFieldsBtn)`
  font-size: 1em;
  width: max-content;
  height: max-content;
  padding: 20px 40px 20px;
  border: none;
  background-color: ${colors.pink};
  color: #fff;
  border-radius: 5px;
`
