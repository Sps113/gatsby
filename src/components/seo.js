import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
// import GatsbyConfig from "../../gatsby-config"

function SEO({ lang, meta, keywords, domain }) {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulSeosite {
            edges {
              node {
                email
                domain
              }
            }
          }
        }
      `}
      render={({ allContentfulSeosite: { edges } }) => {
        // const metadata =
        //   edges.filter(w => w.node.domain === GatsbyConfig.siteMetadata.domain )[0].node
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            charSet={"utf-8"}
            link={[
              {
                rel: "preload",
                href: "../../animate.css",
                as: "style",
                onload: "this.rel='stylesheet'",
              },
              {
                rel: "preload",
                href: "../../font-awesome.css",
                as: "style",
                onload: "this.rel='stylesheet'",
              },
              {
                rel: "preload",
                href: "../../flaticon.css",
                as: "style",
                onload: "this.rel='stylesheet'",
              },
              { rel: "stylesheet", href: "../../style.css" },
            ]}

            // style={{
            //   @font-face {
            //   font-family: 'FontAwesome';
            //   src: ('fonts/fontawesome-webfont.woff2') format('woff2');
            //   }
            // }}
            // meta={[
            //   {
            //     name: `description`,
            //     content: metadata.description,
            //   },
            //   {
            //     property: `og:title`,
            //     content: metadata.title,
            //   },
            //   {
            //     property: `og:description`,
            //     content: metadata.description,
            //   },
            //   {
            //     property: `og:type`,
            //     content: `website`,
            //   },
            //   {
            //     name: `twitter:card`,
            //     content: `summary`,
            //   },
            //   {
            //     name: `twitter:creator`,
            //     content: metadata.email,
            //   },
            //   {
            //     name: `twitter:title`,
            //     content: metadata.title,
            //   },
            //   {
            //     name: `twitter:description`,
            //     content: metadata.description,
            //   }
            // ]
            //   .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.string,
  domain: PropTypes.string,
}

export default SEO
