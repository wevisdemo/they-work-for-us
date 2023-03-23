/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, imageUrl }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            baseUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const metaImageUrl = imageUrl || "/seo/share/default.png"
  const sharableTitle =
    title === "Home"
      ? `${site.siteMetadata.title} รู้จักและติดตาม 'ผู้แทน' ในสภาของเรา`
      : title

  return (
    <>
      <html lang={lang} />
      <title>{(title === "Home" ? `` : `${title} | `) + `${site.siteMetadata.title} รู้จักและติดตาม 'ผู้แทน' ในสภาของเรา`}</title>
      <meta name="description" content={metaDescription}/>
      <meta name="og:title" content={sharableTitle}/>
      <meta name="og:description" content={metaDescription}/>
      <meta name="og:type" content="website" />
      <meta name="og:image" content={metaImageUrl}/>
      <meta name="og:image:width" content={1200}/>
      <meta name="og:image:height" content={630}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content={metaImageUrl.includes("http") ? metaImageUrl : `${site.siteMetadata.baseUrl}${metaImageUrl}`}/>
      <meta name="twitter:creator" content={site.siteMetadata.author}/>
      <meta name="twitter:title" content={sharableTitle}/>
      <meta name="twitter:description" content={metaDescription}/>
    </>
  )
}

SEO.defaultProps = {
  lang: `th`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
