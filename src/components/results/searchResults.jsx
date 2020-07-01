import React from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"
import { useSelector } from "react-redux"

// TODO FUNCTIONALITY - possibility to filter only already seen estates
const SearchResults = () => {
  const estates = useSelector(state => state.Filter)
  const props = useSelector(state => state.filterProps)
  const compare = (a, b) => {
    const priceA = a.prices.price
    const priceB = b.prices.price

    let comparison = 0
    if (priceA > priceB) {
      comparison = 1
    } else if (priceA < priceB) {
      comparison = -1
    }
    return comparison
  }
  console.log(props)
  return (
    <ResultsWrapper>
      {estates.map(estate => {
        return <Estate key={estate.key} estate={estate} />
      })}
    </ResultsWrapper>
  )
}

export default SearchResults
