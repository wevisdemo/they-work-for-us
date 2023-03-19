import React from "react"
import QuantityLegend from "../quantityLegend"
import { media } from "../../styles"

const wrapStyle = {
  fontSize: "1rem",
  marginTop: "0.6rem",
  [media(767)]: {
    fontSize: "1.4rem",
  },
}

const boxStyle = {
  width: "8px",
  height: "8px",
}

const descTextStyle = {
  margin: "0 0.5rem",
  [media(767)]: {
    margin: "0 1rem",
  },
}

const VoteLegendPopupGroup = ({ voteLog }) => {
  return (
    <>
      <QuantityLegend
        text="เห็นด้วย"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.approve}
        background="var(--cl-vote-yes)"
        invertedBoldText
      />
      <QuantityLegend
        text="ไม่เห็นด้วย"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.disprove}
        background="var(--cl-vote-no)"
        invertedBoldText
      />
      <QuantityLegend
        text="งดออกเสียง"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.abstained}
        background="var(--cl-senate-vote-abstained)"
        invertedBoldText
      />
      <QuantityLegend
        text="ไม่ลงมติ"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.absent}
        background="var(--cl-senate-vote-absent)"
        invertedBoldText
      />
      <QuantityLegend
        text="ขาด"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.missing}
        background="var(--cl-senate-vote-missing)"
        invertedBoldText
      />
    </>
  )
}

export default VoteLegendPopupGroup
