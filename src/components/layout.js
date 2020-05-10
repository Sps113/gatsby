import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Menu from "./menu"
import SEO from "./seo"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allContentfulSeosite {
          edges {
            node {
              menu {
                name
                slug
              }
              email
              domain
              footerjs {
                footerjs
              }
              headerjs {
                headerjs
              }
              aboutAutor {
                aboutAutor
              }
              aboutSite {
                aboutSite
              }
            }
          }
        }
      }
    `}
    render={({allContentfulSeosite: {
      edges
    }
    }) => {
      return (<>
        <SEO />

        <div className="wrap">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col">

                    </div>
                    <div className="col d-flex justify-content-end">
                        <div className="social-media">
                            <p className="mb-0 d-flex">
                                <Link to="/" className="d-flex align-items-center justify-content-center"></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Menu menu={edges[0].node} />
        <main>{children}</main>
        <Footer data={edges[0].node}/>

        <script defer src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossOrigin="anonymous"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/stellar-base/3.0.2/stellar-base.min.js"></script>
        <script defer src="/js/main.js"></script>
      </>)
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
