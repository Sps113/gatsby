import React from "react"
  // import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import moment from 'moment'

export default function Page(node) {
  const post = node.pageContext.node.seoText.seoText?node.pageContext.node.seoText.seoText: ""
  const blocks = node.pageContext.node.blocks?node.pageContext.node.blocks:[]
  console.log(node ,Object.values(node.pageContext.node));

  function myFunction(j) {
    console.log(j)
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput-" + j);
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable-" + j);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
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
               {blocks.map((block, i )=> (
                 <div key={i} id={"block-" + i}>
                   <h2 id={"h2-" + i}>{block.h2?block.h2:""}</h2>
                   {(block.text && block.text.text)?<div  dangerouslySetInnerHTML={{__html: block.text.text}} />:""}
                   {blocks.length == 1 ? <input type="text" id={"myInput-" +i} className="myInput" onKeyUp={()=>myFunction(i)} placeholder="Search for CASINO.." title="Type in a name" />:""}
                   <table id={"mytable-" + i} className="myTable">
                    <tbody>
                      <tr className="header">
                        <th style={{width: "18%"}}>CASINO</th>
                        <th style={{width: "7%" }}></th>
                        <th style={{width: "50%"}}>BONUS</th>
                        <th style={{width: "10%"}}>DATA</th>
                      </tr>
                      {block.table.map((raw, j) => (
                        <tr key={j} id={"raw-"+j}>
                          <td>
                            <a  title={raw.name} rel="nofollow" target="_blank" href={raw.url}>{raw.name}</a>
                            <br/>
                            {raw.stars &&
                                <img src="./img/top-bonus.webp" alt="Casino Bonus Canada" className="imgstars" />
                            }

                          </td>
                          <td>
                            <img src="./img/ca-bonus.webp" alt="Best Canada Bonuses" className="imgca"/>
                          </td>
                          <td>{raw.text}<br/>
                             <strong>Use code:</strong> <span>{raw.useCode}</span>
                          </td>
                          <td>{moment(raw.date).format('YYYY/MM/DD')}</td>
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
