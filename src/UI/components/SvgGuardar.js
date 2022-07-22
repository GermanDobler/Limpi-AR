import * as React from "react"

function SvgGuardar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25px"
      height="30px"
      viewBox="0 0 24 24"
      aria-labelledby="saveIconTitle saveIconDesc"
      stroke="#2329D6"
      strokeLinecap="square"
      fill="none"
      color="#2329D6"
      {...props}
    >
      <path d="M17.293 3.293L21 7v13a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h12.586a1 1 0 01.707.293z" />
      <path d="M7 13H17V21H7z" />
      <path d="M8 3H16V8H8z" />
    </svg>
  )
}

export default SvgGuardar