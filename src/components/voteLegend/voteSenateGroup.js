import React from "react"
import QuantityLegend from "../quantityLegend"
import { media } from "../../styles"

const styleAvgText = {
  fontSize: "1rem",
  marginTop: "0.6rem",
  marginRight: "1rem",
  display: "unset",
  [media(767)]: {
    display: "none",
    marginTop: "0",
  },
}

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
  [media(767)]: {
    width: "15px",
    height: "15px",
  },
}

const descTextStyle = {
  margin: "0 0.5rem",
  [media(767)]: {
    margin: "0 1rem",
  },
}

const VoteLegendGroup = ({ voteLog }) => {
  return (
    <>
      <div css={styleAvgText}>โดยเฉลี่ย</div>
      <QuantityLegend
        text="เห็นด้วย"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.approve}
        background={"var(--cl-vote-yes)"}
        invertedBoldText
        isPercent
      />
      <QuantityLegend
        text="ไม่เห็นด้วย"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.disprove}
        background={"var(--cl-vote-no)"}
        invertedBoldText
        isPercent
      />
      <QuantityLegend
        text="งดออกเสียง"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.abstained}
        background={"var(--cl-senate-vote-abstained)"}
        invertedBoldText
        isPercent
      />
      <QuantityLegend
        text="ไม่ลงมติ"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.absent}
        background={"var(--cl-senate-vote-absent)"}
        invertedBoldText
        isPercent
      />
      <QuantityLegend
        text="ไม่ลงคะแนน"
        wrapStyle={wrapStyle}
        boxStyle={boxStyle}
        descTextStyle={descTextStyle}
        quantity={voteLog.missing}
        background={"var(--cl-senate-vote-missing)"}
        invertedBoldText
        isPercent
      />
    </>
  )
}

export default VoteLegendGroup
