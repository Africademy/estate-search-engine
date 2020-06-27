import React, { useEffect } from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"
import { useSelector } from "react-redux"

// TODO FUNCTIONALITY - possibility to filter only already seen estates
const SearchResults = ({ results }) => {
  const estates = useSelector(state => state.Estates)
  useEffect(() => {
    localStorage.setItem("estates", estates)
  }, [])
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

  return (
    <ResultsWrapper>
      {results === [] || results.length === 0
        ? estates.map(estate => {
            return <Estate key={estate.key} estate={estate} />
          })
        : results.map(estate => {
            return <Estate key={estate.key} estate={estate} />
          })}
    </ResultsWrapper>
  )
}

export default SearchResults

/*
{results !== null || results.length !== 0
        ? results.map(estate => {
            return <Estate estate={estate} />
          })
        : estatesNew.map(estate => {
            return <Estate estate={estate} />
          })}
 */
