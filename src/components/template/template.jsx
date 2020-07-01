import React, { useState, useEffect } from "react"
import Layout from "../layout"
import { useSelector, useDispatch } from "react-redux"
import { toggleModal } from "../actions/toggleModal"
import {
  TemplateWrapper,
  SliderContainer,
  LeftColumn,
  RightColumn,
  LeftBtn,
  RightBtn,
  Img,
  ContentContainer,
  Return,
  ReturnBtn,
  Name,
  Header,
  AddToFavourites,
  Address,
  Street,
  Content,
  Main,
  PriceAndMap,
} from "./template.styled"
import Heart from "../icons/favourites"
import Price from "./price/price"
import Map from "../map/map"
import Details from "./details/details"
import Advantages from "./advantages/advantages"

const Template = ({ pageContext: { state } }) => {
  const [slider, setSlider] = useState(0)
  const [imageWidth, setImageWidth] = useState()
  const toggle = useSelector(state => state.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    if (document) {
      const { width } = document
        .querySelector("#container")
        .getBoundingClientRect()
      setImageWidth(width)
    }
  }, [])
  const handleSlider = e => {
    if (e.target.name === "right") {
      setSlider(prevState => Math.min(prevState + 1, state.images.length - 1))
    } else if (e.target.name === "left") {
      setSlider(prevState => Math.max(prevState - 1, 0))
    }
  }
  const handleReturn = () => {
    if (window) {
      window.history.back()
    }
  }
  return (
    <Layout>
      <TemplateWrapper toggle={toggle}>
        <LeftColumn>
          <LeftBtn name="left" onClick={e => handleSlider(e)} />
        </LeftColumn>
        <RightColumn>
          <RightBtn name="right" onClick={e => handleSlider(e)} />
        </RightColumn>
        <SliderContainer
          onClick={() => dispatch(toggleModal())}
          toggle={toggle}
          id="container"
        >
          {state.images.map(img => {
            return (
              <Img
                imageWidth={imageWidth}
                slider={slider}
                key={img.key}
                src={`../photos/${img.img}.jpeg`}
              />
            )
          })}
        </SliderContainer>
        <ContentContainer toggle={toggle}>
          <Return>
            <ReturnBtn onClick={() => handleReturn()}>Return</ReturnBtn>
          </Return>
          <Header>
            <Name>{state.name}</Name>
            <AddToFavourites>
              <Heart height={"30px"} />
            </AddToFavourites>
          </Header>
          <Address>
            <Street>
              {state.address}, {state.city}, {state.district}
            </Street>
          </Address>
          <Content>
            <Main>
              <Details estate={state} />
              <Advantages estate={state} />
            </Main>
            <PriceAndMap>
              <Price prices={state.prices} />
              <Map coords={state.coords} />
            </PriceAndMap>
          </Content>
        </ContentContainer>
      </TemplateWrapper>
    </Layout>
  )
}

export default Template
