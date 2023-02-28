import React from "react"
import Highlighter from "react-highlight-words"
import { components } from "react-select"

export const customOption = (props, inputChange) => {
  const { children } = props

  return (
    <components.Option {...props}>
      <Highlighter
        searchWords={[inputChange]}
        textToHighlight={children}
        autoEscape={true}
        highlightStyle={{
          fontWeight: "bold",
          background: "transparent",
        }}
      />
    </components.Option>
  )
}
