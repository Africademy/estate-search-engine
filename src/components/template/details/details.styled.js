import styled from "styled-components"
import { colors } from "../../../theme"
import { small } from "../../breakpoints"

export const DetailsWrapper = styled.section`
  width: 100%;
  height: auto;
  margin: 0 0 3vw;

  @media all and (max-width: ${small}) {
    margin: 10vw 0 10vw;
  }
`
export const Title = styled.h3`
  font-size: 1.5em;
`
export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 10px;
  margin: 1vw 0 0;
`
export const Position = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  width: 100%;
  padding: 15px 30px 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0.7px 2.2px -10px rgba(0, 0, 0, 0.028),
    0 1.7px 5.3px -10px rgba(0, 0, 0, 0.04),
    0 3.1px 10px -10px rgba(0, 0, 0, 0.05),
    0 5.6px 17.9px -10px rgba(0, 0, 0, 0.06),
    0 10.4px 33.4px -10px rgba(0, 0, 0, 0.072),
    0 25px 80px -10px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0.7px 2.2px -10px rgba(0, 0, 0, 0.045),
      0 1.7px 5.3px -10px rgba(0, 0, 0, 0.065),
      0 3.1px 10px -10px rgba(0, 0, 0, 0.08),
      0 5.6px 17.9px -10px rgba(0, 0, 0, 0.095),
      0 10.4px 33.4px -10px rgba(0, 0, 0, 0.115),
      0 25px 80px -10px rgba(0, 0, 0, 0.16);
  }
`
export const Category = styled.p`
  font-size: 1em;
  font-weight: 600;
`
export const Value = styled.p`
  font-size: 1em;
  font-weight: 600;
  color: ${colors.pink};
`
