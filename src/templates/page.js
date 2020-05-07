import React from "react"
  // import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"

export default function Page(node) {
  const post = node.pageContext.node.seoText.seoText
  console.log(node ,Object.values(node.pageContext.node));
  return (

    <Layout>
    <Helmet>
      <title>{node.pageContext.node.h1}</title>
    </Helmet>
      <div>
       <h1>{node.pageContext.node.h1}</h1>
       <div  dangerouslySetInnerHTML={{__html: post}} />
     </div>
    </Layout>
  )
}
