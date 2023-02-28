import styled from "@emotion/styled"
import React from "react"

// Item for vote log.
// Should accept props for
// - Legend box
// - Text
// - Count.
// + Refactor to emotion
const LegendWrap = styled.span`
  margin-right: 1rem;
  display: flex;
  align-items: baseline;
  font-size: unset;
  margin-top: 0.6rem;
  white-space: nowrap;
`

const LegendBox = styled.div`
  display: inline-box;
  box-sizing: border-box;
  border: 1px solid ${props => props.background ?? "var(--cl-black)"};
  background-color: ${props => props.background ?? "var(--cl-white)"};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-right: 4px;
`

const QuantityLegend = ({
  text,
  boxSize,
  imgSrc,
  background,
  quantity,
  isPercent,
  invertedBoldText,
}) => {
  const quantityDisplayText = () => (isPercent ? `${quantity}%` : `${quantity}`)

  return (
    <LegendWrap>
      {imgSrc ? (
        <img
          src={imgSrc}
          width={boxSize}
          height={boxSize}
          style={{
            marginRight: "4px",
          }}
          alt={text}
        />
      ) : (
        <LegendBox size={boxSize} background={background} />
      )}{" "}
      {invertedBoldText ? (
        <span>
          <b>{text}</b>
          {quantityDisplayText()}
        </span>
      ) : (
        <span>
          {text} <b>{quantityDisplayText()}</b>
        </span>
      )}
    </LegendWrap>
  )
}

export default QuantityLegend
