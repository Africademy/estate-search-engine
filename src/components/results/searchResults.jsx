import React, { useState } from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"

const SearchResults = ({ results }) => {
  const [estates] = useState(results[0])
  console.log(results[0], estates)
  return <ResultsWrapper></ResultsWrapper>
}

export default SearchResults
