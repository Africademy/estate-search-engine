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
export const Type = styled.p`
  height: 100%;
  color: #fff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  font-size: 1.2em;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  svg {
    transform: rotate(${props => (props.toggleType ? "90deg" : 0)});
  }
`
export const Switch = styled.input`
  height: 30px;
  width: 120px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  z-index: 0;

  :focus {
    outline: none;
  }

  :before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 40px;
    border-radius: 50px;
    background-color: ${colors.pink};
    bottom: 0;
    z-index: -1;
  }
  :after {
    content: ${props => {
      if (props.rent) {
        return `
          "Rent"
        `
      } else {
        return `
          "Sell"
        `
      }
    }};
    display: flex;
    align-items: center;
    padding: 10px 20px 10px;
    width: max-content;
    height: 40px;
    position: absolute;
    border-radius: 50px;
    z-index: -1;
    bottom: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    background-color: #fff;
  }
  :checked:after {
    transform: translateX(65%);
  }
`
export const SelectWrapper = styled.div`
  display: flex;
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
export const ArrowIcon = styled.img`
  transition: 0.3s ease-in-out;
  transform: rotate(${props => (props.toggleType ? "-180deg" : 0)});
`
export const SearchBtn = styled.button`
  border: none;
  padding: 20px 40px 20px;
  background-color: ${colors.pink};
  color: #fff;
  cursor: pointer;
  font-size: 1em;
`
