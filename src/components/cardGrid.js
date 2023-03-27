import React from "react"
import { media } from "../styles"

const CardGrid = ({ children, ...props }) => (
  <div
    css={{
      display: "grid",
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
      marginTop: "6rem",
      gap: "1.5rem",
      [media(767)]: {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      },
    }}
    {...props}
  >
    {children}
  </div>
)

export default CardGrid
