import React from "react"
import { EstatesCarouselWrapper } from "./estatesCarousel.styled"
import { useSelector } from "react-redux"
import CarouselItem from "../carouselItem/carouselItem"

const EstatesCarousel = ({ showSelectedEstate }) => {
  const estate = useSelector(state => state.Filter)
  return (
    <EstatesCarouselWrapper>
      {estate.map(estate => {
        return (
          <CarouselItem
            showSelectedEstate={showSelectedEstate}
            key={estate.key}
            estate={estate}
          />
        )
      })}
    </EstatesCarouselWrapper>
  )
}

export default EstatesCarousel
