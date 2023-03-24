import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PartyLogo = ({ name, images }) => {
  const { placeholderImage } = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "images/party/placeholder.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 45)
        }
      }
    }
  `)

  if (images?.[0]?.url) {
    return (
      <img
        src={images[0]?.url}
        alt={name}
        style={{ width: "100%", maxWidth: 45 }}
      />
    )
  }

  return (
    <GatsbyImage
      image={placeholderImage.childImageSharp.gatsbyImageData}
      alt={name}
    />
  )
}

export default PartyLogo
