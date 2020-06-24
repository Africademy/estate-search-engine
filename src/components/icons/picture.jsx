import React from "react"

const Picture = ({ height }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M3.2 1h17.6A2.2 2.2 0 0 1 23 3.2v17.6a2.2 2.2 0 0 1-2.2 2.2H3.2A2.2 2.2 0 0 1 1 20.8V3.2A2.2 2.2 0 0 1 3.2 1zM3 3v18l4.63-4.655a2 2 0 0 1 2.819-.017l2.716 2.664a.6.6 0 0 0 .843-.002l.565-.56a.6.6 0 0 0 .003-.85L12 15l3.571-3.549a2 2 0 0 1 2.807-.012L21 14V3H3z"
          fill="#000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export default Picture
