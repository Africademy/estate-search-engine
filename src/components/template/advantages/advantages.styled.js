import styled from "styled-components"
import { medium } from "../../breakpoints"

export const AdvantagesWrapper = styled.section`
  width: 100%;
  height: auto;
`
export const List = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  margin: 2vw 0 0;

  @media all and (max-width: ${medium}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
  }
`
export const Item = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #ffffff;
  text-align: center;
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 30px 0 30px;
  box-shadow: 0 0.9px 2.2px -10px rgba(0, 0, 0, 0.025),
    0 2.1px 5.3px -10px rgba(0, 0, 0, 0.036),
    0 4px 10px -10px rgba(0, 0, 0, 0.045),
    0 7.1px 17.9px -10px rgba(0, 0, 0, 0.054),
    0 13.4px 33.4px -10px rgba(0, 0, 0, 0.065),
    0 32px 80px -10px rgba(0, 0, 0, 0.09);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`
export const Icon = styled.img`
  height: 40px;
`
