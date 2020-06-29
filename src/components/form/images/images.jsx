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
import { connect } from "react-redux"

const mapStateToProps = state => ({ lang: state.SwitchLanguage })

class Images extends Component {
  constructor() {
    super()
    this.state = {
      firstFileRemove: false,
      secondFileRemove: false,
      thirdFileRemove: false,
      clearAll: "Clear all",
    }
  }

  handleRemove = e => {
    e.preventDefault()
    const name = e.target.name
    this.setState({ [e.target.id]: true })
    setTimeout(() => {
      this.setState({ [name]: null })
    }, 500)
  }

  render() {
    const { remove } = this.state
    const { lang, firstFile, secondFile, thirdFile, handleFiles } = this.props
    return (
      <ImagesWrapper>
        <Header>
          <SubTitle>{lang ? "Images" : "Zdjęcia"}</SubTitle>
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
                    id="firstFileRemove"
                  />
                  <Img src={firstFile} />
                </ImageContainer>
              ) : (
                <ImageInput
                  onChange={e => handleFiles(e)}
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
                    id="secondFileRemove"
                  />
                  <Img src={secondFile} />
                </ImageContainer>
              ) : (
                <ImageInput
                  onChange={e => handleFiles(e)}
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
                    id="thirdFileRemove"
                  />
                  <Img src={thirdFile} />
                </ImageContainer>
              ) : (
                <ImageInput
                  onChange={e => handleFiles(e)}
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

export default connect(mapStateToProps)(Images)

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
