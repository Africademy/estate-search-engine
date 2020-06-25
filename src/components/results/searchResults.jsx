import React from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"
import { useSelector } from "react-redux"

// TODO FUNCTIONALITY - possibility to filter only already seen estates
const SearchResults = ({ results }) => {
  const estates = useSelector(state => state.Estates)
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
