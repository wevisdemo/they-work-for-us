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

const smallWrapStyle = {
  display: "flex",
  justifyContent: "flex-start",
  fontSize: "1rem",
}

const boxStyle = {
  width: "8px",
  height: "8px",
  [media(767)]: {
    width: "15px",
    height: "15px",
  },
}

const smallBoxStyle = {
  width: "3px",
  height: "10px",
  marginRight: "0",
}

const descTextStyle = {
  margin: "0 0.5rem",
  [media(767)]: {
    margin: "0 1rem",
  },
}

const smallDescTextStyle = {
  margin: "0",
  marginRight: "0.7rem",
}

const SenateVoteLegendGroup = ({ voteLog, hasAverageText, isSmallText }) => {
  return (
    <>
      {hasAverageText && <div css={styleAvgText}>โดยเฉลี่ย</div>}
      <QuantityLegend
        text={!isSmallText ? "เห็นด้วย" : ""}
        wrapStyle={isSmallText ? smallWrapStyle : wrapStyle}
        boxStyle={isSmallText ? smallBoxStyle : boxStyle}
        descTextStyle={isSmallText ? smallDescTextStyle : descTextStyle}
        quantity={voteLog.approve}
        background="var(--cl-vote-yes)"
        invertedBoldText
        isPercent
      />
      <QuantityLegend
        text={!isSmallText ? "ไม่เห็นด้วย" : ""}
        wrapStyle={isSmallText ? smallWrapStyle : wrapStyle}
        boxStyle={isSmallText ? smallBoxStyle : boxStyle}
        descTextStyle={isSmallText ? smallDescTextStyle : descTextStyle}
        quantity={voteLog.disprove}
        background="var(--cl-vote-no)"
        invertedBoldText
        isPercent
      />
      <QuantityLegend
        text={!isSmallText ? "งดออกเสียง" : ""}
        wrapStyle={isSmallText ? smallWrapStyle : wrapStyle}
        boxStyle={isSmallText ? smallBoxStyle : boxStyle}
        descTextStyle={isSmallText ? smallDescTextStyle : descTextStyle}
        quantity={voteLog.abstained}
        background="var(--cl-senate-vote-abstained)"
        invertedBoldText
        isPercent
      />
      <QuantityLegend
        text={!isSmallText ? "ไม่ลงมติ" : ""}
        wrapStyle={isSmallText ? smallWrapStyle : wrapStyle}
        boxStyle={isSmallText ? smallBoxStyle : boxStyle}
        descTextStyle={isSmallText ? smallDescTextStyle : descTextStyle}
        quantity={voteLog.absent}
        background="var(--cl-senate-vote-absent)"
        invertedBoldText
        isPercent
      />
      <QuantityLegend
        text={!isSmallText ? "ไม่ลงคะแนน" : ""}
        wrapStyle={isSmallText ? smallWrapStyle : wrapStyle}
        boxStyle={isSmallText ? smallBoxStyle : boxStyle}
        descTextStyle={isSmallText ? smallDescTextStyle : descTextStyle}
        quantity={voteLog.missing}
        background="var(--cl-senate-vote-missing)"
        invertedBoldText
        isPercent
      />
    </>
  )
}

export default SenateVoteLegendGroup
