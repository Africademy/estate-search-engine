import styled from "styled-components"
import { colors } from "../../theme"

export const EmptyWrapper = styled.section`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 4vw 0 4vw;
`
export const Message = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
`
export const ComeBackBtn = styled.button`
  font-size: 1em;
  padding: 20px 40px 20px;
  border-radius: 50px;
  border: none;
  background-color: ${colors.pink};
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(-5px);
    transition: 0.3s ease-in-out;
    box-shadow: 0 1.4px 2.2px -10px rgba(0, 0, 0, 0.022),
      0 3.5px 5.3px -10px rgba(0, 0, 0, 0.032),
      0 6.5px 10px -10px rgba(0, 0, 0, 0.04),
      0 11.6px 17.9px -10px rgba(0, 0, 0, 0.048),
      0 21.7px 33.4px -10px rgba(0, 0, 0, 0.058),
      0 52px 80px -10px rgba(0, 0, 0, 0.08);
  }
`
