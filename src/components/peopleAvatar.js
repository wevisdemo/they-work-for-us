import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PeopleAvatar = ({ title = "", name, lastname, images }) => {
  const { placeholderImage } = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "images/people/placeholder.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 160)
        }
      }
    }
  `)

  const alt = title ? `${title} ${name} ${lastname}` : `${name} ${lastname}`

  if (images?.[0]?.url) {
    return (
      <img
        src={images[0]?.url}
        alt={alt}
        style={{ pointerEvents: "none", margin: 0 }}
      />
    )
  }

  return (
    <div className="avatar">
      <GatsbyImage
        image={placeholderImage.childImageSharp.gatsbyImageData}
        alt={alt}
        style={{ pointerEvents: "none" }}
      />
    </div>
  )
}

export default PeopleAvatar
