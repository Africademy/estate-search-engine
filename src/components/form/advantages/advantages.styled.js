import styled from "styled-components"
import { colors } from "../../../theme"

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  padding: 0 0 2vw;
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
  background-color: ${props =>
    props.selected ? colors.accept : colors.purple};
  color: #fff;
  margin: 0 10px 10px 0;
  cursor: pointer;
`
export const Selected = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-flow: row wrap;
  margin: 50px 0 0;
`
export const SelectedItems = styled(List)``
export const SelectedItem = styled(Item)`
  background-color: ${props =>
    props.selected ? colors.accept : colors.purple};
  display: flex;
  height: max-content;
  width: max-content;
  align-items: center;
  -webkit-align-items: center;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #ff0043;
    transition: 0.3s ease-in-out;
  }
`
export const Remove = styled.button`
  height: 18px;
  width: 18px;
  display: flex;
  margin: 0 0 0 5px;
  border: none;
  background: none;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: #fff;
    transform: rotate(-45deg);
  }
`
