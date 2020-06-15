import styled from "styled-components"

export const ImageContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: #ccc;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
`
export const Img = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  transition: 0.7s ease-in-out;
`
export const EstateWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 2.2px -6px rgba(0, 0, 0, 0.011),
    0 0 5.3px -6px rgba(0, 0, 0, 0.016), 0 0px 10px -6px rgba(0, 0, 0, 0.02),
    0 0 17.9px -6px rgba(0, 0, 0, 0.024), 0 0 33.4px -6px rgba(0, 0, 0, 0.029),
    0 0px 80px -6px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-5px);
    transition: 0.3s ease-in-out;
    box-shadow: 0 0.9px 2.2px -6px rgba(0, 0, 0, 0.025),
      0 2.2px 5.3px -6px rgba(0, 0, 0, 0.036),
      0 4.1px 10px -6px rgba(0, 0, 0, 0.045),
      0 7.4px 17.9px -6px rgba(0, 0, 0, 0.054),
      0 13.8px 33.4px -6px rgba(0, 0, 0, 0.065),
      0 33px 80px -6px rgba(0, 0, 0, 0.09);
  }
  &:hover ${Img} {
    transition: 0.7s ease-in-out;
    transform: translateX(-100%);
  }
`
export const ContentContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 10px 10px 10px 15px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Type = styled.p`
  font-size: 1em;
`
