import styled from "styled-components"
import { colors } from "../../../theme"

export const Wrapper = styled.section`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const SubmitBtn = styled.button`
  padding: 20px 40px 20px;
  font-size: 1em;
  color: #fff;
  background-color: ${colors.pink};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
