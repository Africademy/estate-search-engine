import styled from "styled-components"

export const OnMapWrapper = styled.main`
  width: 90%;
  height: 65vh;
  background-color: #ccc;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const SwitchView = styled.div`
  width: max-content;
  height: max-content;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  z-index: 40;
  top: 1vw;
  left: 1vw;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const ThreeDimension = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  padding: 10px 20px 10px;
  height: max-content;
  width: max-content;
  cursor: pointer;
  font-weight: ${props => (props.pitch === 40 ? "600" : "500")};

  &:focus {
    outline: none;
  }
`
export const TwoDimension = styled(ThreeDimension)`
  font-weight: ${props => (props.pitch === 0 ? "600" : "500")};
`
export const ShowAll = styled(ThreeDimension)``

export const ZoomOut = styled(SwitchView)`
  left: 10vw;
`
