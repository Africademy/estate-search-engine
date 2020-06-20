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
  align-items: center;
  overflow: hidden;
`
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
`
