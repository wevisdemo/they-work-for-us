import React from "react"

// Item for vote log.
// Should accept props for
// - Legend box
// - Text
// - Count.
// + Refactor to emotion
const QuantityLegend = ({ text, quantity, isPercent, invertedBoldText }) => {
  const quantityDisplayText = () => {
    return isPercent ? `${quantity}%` : `${quantity}`
  }

  return (
    <span>
      <div>Box</div>
      {invertedBoldText ? (
        <>
          <b>{text}</b>
          {quantityDisplayText()}
        </>
      ) : (
        <>
          {text} <b>{quantityDisplayText()}</b>
        </>
      )}
    </span>
  )
}

export default QuantityLegend
