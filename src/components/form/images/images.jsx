import React, { useRef, useState } from "react"
import {
  ImagesWrapper,
  ImageInput,
  UploadedContainer,
  ImageContainer,
  Img,
  AllImages,
} from "./images.styled"
import { SubTitle } from "../basics/basics.styled"

const Images = () => {
  const fileInput = useRef()
  const [images, setImages] = useState(null)

  const handleFiles = e => {
    e.preventDefault()
    const img = document.querySelector(".result")
    const file = fileInput.current.files[0]
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload = e => {
        resolve(e.target.result)
        console.log(e.target.result)
      }
      reader.readAsDataURL(file)
      console.log(reader.result)
    })
  }
  return (
    <ImagesWrapper>
      <SubTitle>Images</SubTitle>
      <AllImages>
        <ImageInput
          onChange={e => handleFiles(e)}
          type="file"
          name="files[]"
          accept="image/png, image/jpg, image/jpeg"
          multiple
          ref={fileInput}
        />
        <UploadedContainer></UploadedContainer>
      </AllImages>
    </ImagesWrapper>
  )
}

export default Images
