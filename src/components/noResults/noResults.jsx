import React from "react"
import { NoResultsWrapper, Message, Tip } from "./noResults.styled"

const NoResults = () => {
  return (
    <NoResultsWrapper>
      <Message>We didn't find any estates in this category</Message>
      <Tip>Change some of filters to find estates</Tip>
    </NoResultsWrapper>
  )
}

export default NoResults
