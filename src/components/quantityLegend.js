import React from "react"

const QuantityLegend = ({
  text,
  boxSize,
  imgSrc,
  background,
  quantity,
  isPercent,
  invertedBoldText,
  wrapStyle,
  boxStyle,
  descTextStyle,
}) => {
  const quantityDisplayText = isPercent ? `${quantity}%` : `${quantity}`

  return (
    <div
      css={{
        marginRight: "1rem",
        display: "flex",
        alignItems: "baseline",
        fontSize: "unset",
        whiteSpace: "nowrap",
        ...wrapStyle,
      }}
    >
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
        <div
          css={{
            display: "inline-box",
            boxSizing: "border-box",
            border: `1px solid ${background ?? "var(--cl-black)"}`,
            backgroundColor: `${background ?? "var(--cl-white)"}`,
            marginRight: "4px",
            width: boxSize,
            height: boxSize,
            ...boxStyle,
          }}
        />
      )}{" "}
      {invertedBoldText ? (
        <span>
          {text && <b style={{ ...descTextStyle }}>{text}</b>}
          {quantityDisplayText}
        </span>
      ) : (
        <span>
          {text ? `${text} ` : ""} <b>{quantityDisplayText}</b>
        </span>
      )}
    </div>
  )
}

export default QuantityLegend
