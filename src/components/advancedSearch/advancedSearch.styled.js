import styled from "styled-components"

export const AdvancedWrapper = styled.section`
  width: 100%;
  height: ${props => (props.toggleAdvanced ? "30vh" : 0)};
  background-color: #ffffff;
  position: absolute;
  z-index: 0;
  left: 0;
  top: 110%;
  border-radius: 10px;
  box-shadow: 0 0.7px 2.2px -10px rgba(0, 0, 0, 0.034),
    0 1.8px 5.3px -10px rgba(0, 0, 0, 0.048),
    0 3.4px 10px -10px rgba(0, 0, 0, 0.06),
    0 6px 17.9px -10px rgba(0, 0, 0, 0.072),
    0 11.3px 33.4px -10px rgba(0, 0, 0, 0.086),
    0 27px 80px -10px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  padding: 10px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
