import React from "react"
import PropTypes from "prop-types"

import FeatureIcon from "./featureIcon"

const HeroFeature = ({ title, subtitle, image }) => (
  <div
    style={{
      marginBottom: "1.6rem",
      marginLeft: "2rem",
      marginRight: "2rem",
      display: "flex",
      flex: "1",
      padding: "0 .5rem",
    }}
  >
    <FeatureIcon image={image} />

    <div
      style={{ flexDirection: "column", display: "flex", marginLeft: "1.6rem" }}
    >
      <h2
        style={{
          fontSize: "2.4rem",
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{subtitle}</div>
    </div>
  </div>
)

HeroFeature.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

HeroFeature.defaultProps = {
  title: ``,
  subtitle: ``,
}

export default HeroFeature
