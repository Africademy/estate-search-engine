import React from "react"
import { colors } from "../../theme"

const Pin = ({ height }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0z"
          stroke={colors.blue}
          strokeWidth="1.5"
        />
        <path
          d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          fill="#000000"
          stroke={colors.blue}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}

export default Pin
