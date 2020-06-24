import styled from "styled-components"
import addPic from "../../../static/icons/add.svg"
import { small } from "../../breakpoints"

export const ImagesWrapper = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  margin: 50px 0 0;
`
export const AllImages = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
  }
`
export const FileInputsWrapper = styled.section`
  width: 50vw;
  height: 25vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1vw;
  align-items: center;

  @media all and (max-width: ${small}) {
    height: auto;
    width: 100%;
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
  }
`
export const ImageInput = styled.input`
  height: 30vh;
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 4px dashed #d8d8d8;
    font-size: 1em;
    border-radius: 20px;
    background: url(${addPic}) #fff no-repeat center center;
    background-size: 6vw;
  }

  @media all and (max-width: ${small}) {
    width: 90vw;
    height: 25vh;

    &:before {
      background-size: 12vw;
    }
  }
`
export const UploadedContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transform: ${props => (props.remove ? "scale(0)" : "scale(1)")};
  transition: 0.3s ease-in-out;

  @media all and (max-width: ${small}) {
    width: 90vw;
    height: 25vh;
  }
`
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
export const RemoveImage = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: #ff2222;
  border-radius: 50%;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 60%;
    left: 50%;
    top: 50%;
    background-color: #fff;
    transform: rotate(45deg);
    border-radius: 50px;
    height: 3px;
    margin: -1.5px 0 0 -30%;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 60%;
    left: 50%;
    top: 50%;
    background-color: #fff;
    transform: rotate(-45deg);
    border-radius: 50px;
    height: 3px;
    margin: -1.5px 0 0 -30%;
  }
  &:focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    height: 50px;
    width: 50px;
  }
`
