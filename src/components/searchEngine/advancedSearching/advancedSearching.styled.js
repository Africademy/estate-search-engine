import styled from "styled-components"

export const AdvancedWrapper = styled.main`
  position: absolute;
  width: 100%;
  min-height: 10vh;
  height: 30vh;
  left: 0;
  background-color: #fff;
  top: 100%;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 3.6px -10px rgba(0, 0, 0, 0.017),
    0 4.7px 8.7px -10px rgba(0, 0, 0, 0.024),
    0 8.9px 16.4px -10px rgba(0, 0, 0, 0.03),
    0 15.9px 29.3px -10px rgba(0, 0, 0, 0.036),
    0 29.7px 54.7px -10px rgba(0, 0, 0, 0.043),
    0 71px 131px -10px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: 15% 15% 60%;
  grid-row-gap: 2vw;
  grid-column-gap: 2vw;
  padding: 1vw;
`
