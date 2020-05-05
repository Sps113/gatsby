import React from "react";
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"


const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        {
          allContentfulArticle {
            edges {
              node {
                id
                title
                text {
                  content {
                    content {
                      value
                    }
                  }
                }
                banner {
                  file {
                    url
                  }
                }
                publishedAt
              }
            }
          }
        }
      `}
      render={({
        allContentfulArticle: {
          edges
        }
      }) => (
        removeDuplicates(edges, "title").map(({ node }) => (
          <Article key={node.id} content={node} />
        ))
      )}
    />
  </Layout>
)

function removeDuplicates(originalArray, prop) {
     var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i]['node'][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
 }

export default IndexPage
