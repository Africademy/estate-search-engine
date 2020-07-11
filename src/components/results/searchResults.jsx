import React, { useEffect } from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"
import FoundNothing from "../foundNothing/foundNothing"
import { useSelector } from "react-redux"
import gsap from "gsap"
import { CSSPlugin } from "gsap/CSSPlugin"
gsap.registerPlugin(CSSPlugin)

const SearchResults = ({ sorting }) => {
  const estates = useSelector(state => state.Filter)
  useEffect(() => {
    if (document) {
      const estates = document.querySelectorAll(".estate")
      gsap.from(estates, {
        opacity: 0,
        y: 10,
        stagger: 0.3,
        duration: 0.7,
        delay: 0.2,
      })
    }
  }, [sorting])
  return (
    <ResultsWrapper estates={estates.length}>
      {estates.length > 0 ? (
        estates.map(estate => {
          return <Estate key={estate.key} estate={estate} />
        })
      ) : (
        <FoundNothing />
      )}
    </ResultsWrapper>
  )
}

export default SearchResults
