import styled from "styled-components"
import { colors } from "../../theme"
import search from "../../static/icons/search.svg"

export const SearchWrapper = styled.main`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${colors.blue};
  padding: 5vw 0 5vw;
  position: relative;
  z-index: 10;
`
export const SearchBar = styled.section`
  width: 80%;
  height: 100px;
  background-color: ${colors.darkBlue};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0;
  position: relative;
`
export const SearchInput = styled.input`
  height: 60%;
  width: 40%;
  font-size: 1.1em;
  border-radius: 5px;
  border: none;
  padding: 10px 10px 10px 45px;
  background-image: url(${search});
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 2% center;

  :focus {
    outline: none;
  }
`
export const Select = styled.input`
  width: 60px;
  height: 50px;
  font-size: 1em;
  padding: 10px;

  :focus {
    outline: none;
  }
`
export const SearchBtn = styled.button`
  border: none;
  padding: 20px 40px 20px;
  background-color: ${colors.pink};
  color: #fff;
  cursor: pointer;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`
export const ToggleAdvanced = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  border: none;
  cursor: pointer;
  background-color: rgba(67, 97, 238, 0.3);
  transition: 0.3s ease-in-out;

  svg {
    transition: 0.3s ease-in-out;
    transform: rotate(${props => (props.toggleAdvanced ? "90deg" : 0)});
  }

  :focus {
    outline: none;
  }
  :hover {
    transition: 0.3s ease-in-out;
    background-color: rgba(67, 97, 238, 0.6);
  }
`
