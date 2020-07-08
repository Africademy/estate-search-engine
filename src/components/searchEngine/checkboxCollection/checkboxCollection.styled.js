import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Checkboxes = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: auto;
`
