import React, { useState } from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"

const SearchResults = ({ results }) => {
  return (
    <ResultsWrapper>
      {results !== undefined
        ? results.map(estate => {
            return <Estate estate={estate} />
          })
        : null}
    </ResultsWrapper>
  )
}

export default SearchResults
