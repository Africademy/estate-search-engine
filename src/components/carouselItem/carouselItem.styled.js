import styled from "styled-components"
import { colors } from "../../theme"

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
export const Content = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  position: absolute;
  z-index: 2;
  color: #fff;
  bottom: 0;
  justify-content: center;
  -webkit-justify-content: center;
  transition: 0.3s ease-in-out;
  transform: translateY(5vw);
`
export const GradientFade = styled.div`
  height: 70%;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  transition: 0.3s ease-in-out;
  opacity: 0;
`
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

  &:hover ${Content} {
    transition: 0.3s ease-in-out;
    transform: translateY(0);
  }
  &:hover ${GradientFade} {
    transition: 0.3s ease-in-out;
    opacity: 1;
  }
`
export const ShowDetailsBtn = styled.button`
  width: max-content;
  height: max-content;
  font-size: 1em;
  border: none;
  background: none;
  color: ${colors.pink};
  cursor: pointer;
  text-decoration: underline;

  &:focus {
    outline: none;
  }
`
