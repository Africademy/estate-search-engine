import React from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"
import NoResults from "../noResults/noResults"
import { useSelector } from "react-redux"

// TODO FUNCTIONALITY - possibility to filter only already seen estates
const SearchResults = ({ results }) => {
  const estates = useSelector(state => state.Estates)
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
  const renderResults = () => {
    const {
      value: { type, payment, minPrice, maxPrice },
    } = results
    if (results) {
      if (results.results.length === 0) {
        if (
          type !== "Choose..." ||
          payment !== "Choose..." ||
          minPrice !== 0 ||
          maxPrice !== 0
        ) {
          return <NoResults />
        }
      } else {
        return results.results.map(estate => {
          return <Estate key={estate.key} estate={estate} />
        })
      }
    }
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
