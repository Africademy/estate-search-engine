import React from "react"
import { EstatesCarouselWrapper } from "./estatesCarousel.styled"
import { useSelector } from "react-redux"
import CarouselItem from "../carouselItem/carouselItem"

const EstatesCarousel = ({ showSelectedEstate, results }) => {
  const estate = useSelector(state => state.Estates)
  console.log(results)
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
