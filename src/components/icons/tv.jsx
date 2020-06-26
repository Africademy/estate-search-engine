import React from "react"

const TV = ({ height, color }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M7 21h10"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6z"
          stroke={color}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}

export default TV
