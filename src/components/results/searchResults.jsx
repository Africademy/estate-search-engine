import React, { useEffect } from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"
import NoResults from "../noResults/noResults"
import { useSelector } from "react-redux"

// TODO FUNCTIONALITY - possibility to filter only already seen estates
const SearchResults = () => {
  const estates = useSelector(state => state.Filter)
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
  return (
    <ResultsWrapper>
      {estates.map(estate => {
        return <Estate key={estate.key} estate={estate} />
      })}
    </ResultsWrapper>
  )
}

export default SearchResults
