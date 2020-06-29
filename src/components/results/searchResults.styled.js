import styled from "styled-components"

export const Container = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
`
export const ResultsWrapper = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2vw;
  grid-column-gap: 2vw;
  padding: 2vw 5vw 5vw;
`
