import styled from "styled-components"

export const FavouritesWrapper = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw 10vw 0;
`
export const Container = styled.section`
  width: 100%;
  height: 100%;
`
export const List = styled.section`
  ${props => {
    if (props.estate > 0) {
      return `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1vw;
        grid-row-gap: 1vw;
        justify-content: center;
      `
    } else {
      return `
        display: flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
      `
    }
  }};
  margin: 2vw 0 0;
`
