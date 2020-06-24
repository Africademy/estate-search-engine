import React, { Component } from "react"
import {
  ImagesWrapper,
  ImageInput,
  UploadedContainer,
  ImageContainer,
  Img,
  AllImages,
  RemoveImage,
  FileInputsWrapper,
} from "./images.styled"
import { SubTitle, Header, ClearBtn } from "../basics/basics.styled"

class Images extends Component {
  constructor() {
    super()
    this.state = {
      firstFile: null,
      secondFile: null,
      thirdFile: null,
      remove: false,
      clearAll: "Clear all",
    }
  }

  handleFiles = e => {
    e.preventDefault()
    const reader = new FileReader()
    const name = e.target.name
    const file = e.target.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = e => {
      this.setState({ [name]: e.target.result }, () => {
        console.log(this.state.firstImage)
      })
    }
  }
  // TODO remove particular image
  handleRemove = e => {
    e.preventDefault()
    const name = e.target.name
    this.setState({ remove: !this.state.remove })
    setTimeout(() => {
      this.setState({ [name]: null })
    }, 500)
  }
  render() {
    const { firstFile, secondFile, thirdFile, remove } = this.state
    return (
      <ImagesWrapper>
        <Header>
          <SubTitle>Images</SubTitle>
          <ClearBtn switch={this.state.clearAll}>
            {this.state.clearAll}
          </ClearBtn>
        </Header>
        <AllImages>
          <UploadedContainer>
            <FileInputsWrapper>
              {firstFile !== null ? (
                <ImageContainer remove={remove}>
                  <RemoveImage
                    onClick={e => this.handleRemove(e)}
                    name="firstFile"
                  />
                  <Img src={firstFile} />
                </ImageContainer>
              ) : (
                <ImageInput
                  onChange={e => this.handleFiles(e)}
                  type="file"
                  name="firstFile"
                  accept="image/png, image/jpg, image/jpeg"
                />
              )}
              {secondFile !== null ? (
                <ImageContainer remove={remove}>
                  <RemoveImage
                    onClick={e => this.handleRemove(e)}
                    name="secondFile"
                  />
                  <Img src={secondFile} />
                </ImageContainer>
              ) : (
                <ImageInput
                  onChange={e => this.handleFiles(e)}
                  type="file"
                  name="secondFile"
                  accept="image/png, image/jpg, image/jpeg"
                />
              )}
              {thirdFile !== null ? (
                <ImageContainer remove={remove}>
                  <RemoveImage
                    onClick={e => this.handleRemove(e)}
                    name="thirdFile"
                  />
                  <Img src={thirdFile} />
                </ImageContainer>
              ) : (
                <ImageInput
                  onChange={e => this.handleFiles(e)}
                  type="file"
                  name="thirdFile"
                  accept="image/png, image/jpg, image/jpeg"
                />
              )}
            </FileInputsWrapper>
          </UploadedContainer>
        </AllImages>
      </ImagesWrapper>
    )
  }
}

export default Images

/*
images.map(img => {
              return (
                <ImageContainer remove={remove}>
                  <RemoveImage onClick={e => handleRemove(e)} />
                  <Img src={img} />
                </ImageContainer>
              )
            })
 */
