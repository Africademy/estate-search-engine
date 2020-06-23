import React, { useRef, useState, useEffect } from "react"
import {
  ImagesWrapper,
  ImageInput,
  UploadedContainer,
  ImageContainer,
  Img,
  AllImages,
  RemoveImage,
} from "./images.styled"
import { SubTitle } from "../basics/basics.styled"

const Images = () => {
  const fileInput = useRef()
  const [images, setImages] = useState([])

  // TODO handle images
  const handleFiles = e => {
    e.preventDefault()
    const reader = new FileReader()
    const files = e.target.files
    let uploadedArr = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      reader.onloadend = e => {
        setImages([...images, e.target.result])
        reader.readAsDataURL(e.target.result)
      }
      console.log(file)
      //reader.readAsDataURL(file)
    }
  }
  return (
    <ImagesWrapper>
      <SubTitle>Images</SubTitle>
      <AllImages>
        <UploadedContainer>
          {images.length > 0 ? (
            images.map(img => {
              return (
                <ImageContainer>
                  <RemoveImage />
                  <Img src={img} />
                </ImageContainer>
              )
            })
          ) : (
            <ImageInput
              onChange={e => handleFiles(e)}
              type="file"
              name="files[]"
              accept="image/png, image/jpg, image/jpeg"
              multiple
              ref={fileInput}
            />
          )}
        </UploadedContainer>
      </AllImages>
    </ImagesWrapper>
  )
}

export default Images
