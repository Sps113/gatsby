import React from "react"
  // import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"

export default function Page(node) {
  const post = node.pageContext.node.seoText.seoText?node.pageContext.node.seoText.seoText: ""
  const blocks = node.pageContext.node.blocks?node.pageContext.node.blocks:[]
  console.log(node ,Object.values(node.pageContext.node));
  return (

    <Layout>
      <Helmet>
        <title>{node.pageContext.node.h1}</title>
        <meta name="description" content={node.pageContext.node.description} />
      </Helmet>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate fadeInUp ftco-animated">
               <h1>{node.pageContext.node.h1}</h1>
               <div  dangerouslySetInnerHTML={{__html: post}} />
               {blocks.map(block => (
                 <div>
                   <h2>{block.h2?block.h2:""}</h2>
                   <table>
                    <tbody>
                      <tr className="header">
                        <th style={{width: "18%"}}>CASINO</th>
                        <th style={{width: "7%"}}></th>
                        <th style={{width: "50%"}}>BONUS</th>
                        <th style={{width: "10%"}}>DATA</th>
                      </tr>
                      {block.table.map(raw => (
                        <tr>
                          <td>
                            <a title={raw.name} rel="nofollow" target="_blank" href={raw.url}>{raw.name}</a>
                            <br/>
                            <img src="./img/top-bonus.webp" alt="Casino Bonus Canada" className="imgstars" />
                          </td>
                          <td>
                            <img src="./img/ca-bonus.webp" alt="Best Canada Bonuses" className="imgca"/>
                          </td>
                          <td>{raw.text}<br/>
                             <strong>Use code:</strong> <span>{raw.useCode}</span>
                          </td>
                          <td>{raw.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
               ))}
             </div>
           </div>
         </div>
       </section>
    </Layout>
  )
}
