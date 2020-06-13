import React from "react"
import { AdvancedWrapper } from "./advancedSearch.styled"
import AdvancedFilter from "../searchEngine/advancedFilters/advancedFilters"

const AdvancedSearch = ({ toggleAdvanced }) => {
  return (
    <AdvancedWrapper toggleAdvanced={toggleAdvanced}>
      <AdvancedFilter dropdown={true} />
    </AdvancedWrapper>
  )
}

export default AdvancedSearch
