import styled from "styled-components"

export const Container = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 0 5vw 0;
`
export const ResultsWrapper = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1vw;
  grid-column-gap: 1vw;

  padding: 5vw 0 0;
`
