import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
// import GatsbyConfig from "../../gatsby-config"


function SEO({ description, lang, meta, keywords, domain, email, title, titleTemplate }) {
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
      render={({
        allContentfulSeosite: {
          edges
        }
      }) => {
        // const metadata =
        //   edges.filter(w => w.node.domain === GatsbyConfig.siteMetadata.domain )[0].node
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            charSet={'utf-8'}


            link={[
              {rel: "stylesheet", href: "../../animate.css"},
              {rel: "stylesheet", href: "../../font-awesome.css"},
              {rel: "stylesheet", href: "../../flaticon.css"},
              {rel: "stylesheet", href: "../../style.css"}
            ]}
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
  keywords: `` ,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  domain:  PropTypes.string,
  titleTemplate: PropTypes.string,
}

export default SEO
