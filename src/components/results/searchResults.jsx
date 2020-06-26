import React from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"
import { useSelector } from "react-redux"

// TODO FUNCTIONALITY - possibility to filter only already seen estates
const SearchResults = ({ results }) => {
  const estates = useSelector(state => state.Estates)
  const compare = (a, b) => {
    const priceA = a.prices[0].price
    const priceB = b.prices[0].price

    let comparison = 0
    if (priceA > priceB) {
      comparison = 1
    } else if (priceA < priceB) {
      comparison = -1
    }
    return comparison
  }
  const sort = estates.sort(compare)
  console.log(sort)
  return (
    <ResultsWrapper>
      {results !== null
        ? results.map(estate => {
            return <Estate estate={estate} />
          })
        : estates.map(estate => {
            return <Estate estate={estate} />
          })}
    </ResultsWrapper>
  )
}

export default SearchResults
