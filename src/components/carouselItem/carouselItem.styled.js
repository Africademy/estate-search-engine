import styled from "styled-components"

export const CarouselItemWrapper = styled.div`
  height: 100%;
  width: 15vw;
  background-color: #ffffff;
  margin: 0 20px 0 0;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 1.6px 2.2px -10px rgba(0, 0, 0, 0.02),
    0 3.8px 5.3px -10px rgba(0, 0, 0, 0.028),
    0 7.1px 10px -10px rgba(0, 0, 0, 0.035),
    0 12.7px 17.9px -10px rgba(0, 0, 0, 0.042),
    0 23.8px 33.4px -10px rgba(0, 0, 0, 0.05),
    0 57px 80px -10px rgba(0, 0, 0, 0.07);
  transition: 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 1.6px 2.2px -10px rgba(0, 0, 0, 0.039),
      0 3.8px 5.3px -10px rgba(0, 0, 0, 0.057),
      0 7.1px 10px -10px rgba(0, 0, 0, 0.07),
      0 12.7px 17.9px -10px rgba(0, 0, 0, 0.083),
      0 23.8px 33.4px -10px rgba(0, 0, 0, 0.101),
      0 57px 80px -10px rgba(0, 0, 0, 0.14);
  }
`
export const Name = styled.h4`
  font-size: 1em;
`
export const Address = styled.p`
  font-size: 1em;
`
export const Price = styled.p`
  font-size: 1em;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
