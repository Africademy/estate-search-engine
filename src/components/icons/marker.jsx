import React from "react"

const Marker = ({ height, color }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M18 9.4c0 3.535-6 10.6-6 10.6S6 12.935 6 9.4C6 5.865 8.686 3 12 3s6 2.865 6 6.4z"
          fill="#fff"
          stroke={color}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}

export default Marker
