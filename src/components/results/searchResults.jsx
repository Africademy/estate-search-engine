import React, { useEffect } from "react"
import { ResultsWrapper } from "./searchResults.styled"
import Estate from "../estate/estate"
import NoResults from "../noResults/noResults"
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
  const renderResults = () => {
    if (results) {
      if (results.results.length === 0) {
        console.log(results.props)
        if (results.props) {
          if (
            results.props.city !== "" ||
            results.props.type !== "Choose..." ||
            results.props.payment !== "Choose..." ||
            results.props.minPrice !== 0 ||
            results.props.maxPrice !== 0
          ) {
            console.log(results.props)
            return <NoResults />
          } else {
            return estates.map(estate => {
              return <Estate key={estate.key} estate={estate} />
            })
          }
        }
      } else {
        return results.results.map(estate => {
          return <Estate key={estate.key} estate={estate} />
        })
      }
    }
    /*if (results.results.length === 0) {
      if (results.value === undefined) {
        return <NoResults />
      } else {
        console.log(results.length)
        return estates.map(estate => {
          return <Estate key={estate.key} estate={estate} />
        })
      }
    } else {
      results.results.map(estate => {
        return <Estate key={estate.key} estate={estate} />
      })
    } */
  }

  return <ResultsWrapper results={results}>{renderResults()}</ResultsWrapper>
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
