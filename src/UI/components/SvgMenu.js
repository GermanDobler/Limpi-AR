import * as React from "react"

function SvgMenu(props) {
  return (
    <svg
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
      {...props}
    >
      <path d="M3 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3z" />
    </svg>
  )
}

export default SvgMenu