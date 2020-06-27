import styled from "styled-components"

export const MarkerWrapper = styled.button`
  width: max-content;
  height: max-content;
  font-size: 1em;
  padding: 10px 20px 10px;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  border: none;

  box-shadow: 0 1.6px 2.2px -5px rgba(0, 0, 0, 0.039),
    0 3.8px 5.3px -5px rgba(0, 0, 0, 0.057),
    0 7.1px 10px -5px rgba(0, 0, 0, 0.07),
    0 12.7px 17.9px -5px rgba(0, 0, 0, 0.083),
    0 23.8px 33.4px -5px rgba(0, 0, 0, 0.101),
    0 57px 80px -5px rgba(0, 0, 0, 0.14);

  display: flex;
  align-items: center;
  -webkit-align-items: center;

  svg {
    margin: 0 5px 0 0;
  }

  &:focus {
    outline: none;
  }
`
