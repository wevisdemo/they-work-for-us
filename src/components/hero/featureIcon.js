import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { media } from "../../styles"

const FeatureIcon = ({ image, borderWidth }) => {
  return (
    <div
      css={{
        borderRadius: "50%",
        maxWidth: "5rem",
        maxHeight: "5rem",
        marginBottom: "1.5rem",
        overflow: "hidden",
        [media(821)]: {
          maxWidth: "8.3rem",
          maxHeight: "8.3rem",
        },
      }}
    >
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt=""
        aria-hidden="true"
      />
    </div>
  )
}

export default FeatureIcon
