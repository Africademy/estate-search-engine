import styled from "styled-components"

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
`
export const ImageInput = styled.input`
  height: 50px;
  width: 50%;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &:before {
    content: "select file";
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: max-content;
    background-color: #ccc;
  }
`
export const UploadedContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`
export const ImageContainer = styled.div`
  width: 20vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
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
`
