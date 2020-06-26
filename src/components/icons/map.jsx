import React from "react"

const Map = ({ height, color }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M9 19l-5.21 1.737a.6.6 0 0 1-.79-.57V5.433a.6.6 0 0 1 .41-.569L9 3m0 16l6 2m-6-2V3m6 18l5.59-1.863a.6.6 0 0 0 .41-.57V3.832a.6.6 0 0 0-.79-.569L15 5m0 16V5m0 0L9 3"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}

export default Map
