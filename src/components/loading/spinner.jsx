import React from "react"
import { SpinnerWrapper, SpinnerContainer, Inside } from "./spinner.styled"

const Spinner = ({ height, size }) => {
  return (
    <SpinnerWrapper height={height}>
      <SpinnerContainer size={size}>
        <Inside />
      </SpinnerContainer>
    </SpinnerWrapper>
  )
}

export default Spinner
