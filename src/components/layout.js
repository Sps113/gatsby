import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import SEO from "./seo"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        contentfulPerson {
          fullName
          avatar {
            file {
              url
            }
          }
        }
      }
    `}
    render={({
      contentfulPerson: {
        fullName,
        avatar: {
          file: {
            url
          }
        }
      }
    }) => {
      return (<>
        <SEO />
        
        <div class="wrap">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col">

                    </div>
                    <div class="col d-flex justify-content-end">
                        <div class="social-media">
                            <p class="mb-0 d-flex">
                                <a href="./" class="d-flex align-items-center justify-content-center"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div class="container">
                <a class="navbar-brand" href="./">casinos bonus codes<span>.CA</span></a>

                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item active"><a href="./" class="nav-link">HOME</a></li>
                        <li class="nav-item"><a href="./no-deposit" class="nav-link">NO DEPOSIT</a></li>
                        <li class="nav-item"><a href="./welcome-bonus" class="nav-link">Welcome Bonus</a></li>
                        <li class="nav-item"><a href="./first-deposit" class="nav-link">First Deposit</a></li>
                        <li class="nav-item"><a href="./new-bonuses" class="nav-link">NEW BONUSES</a></li>
                        <li class="nav-item"><a href="./contact" class="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>


          <main>{children}</main>
          <footer class="footer">
              <div class="container-fluid px-lg-5">
                  <div class="row">
                      <div class="col-md-9 py-5">
                          <div class="row">
                              <div class="col-md-4 mb-md-0 mb-4">

                                  <h2 class="footer-heading">About us</h2>
                                  <p> All of these great bonus offers are available to players in Canada! We offer best list No Deposit Casinos & Bonus Codes 2020! </p>
                                  <p>Sign up for news on the latest and greatest no deposit bonuses and casinos, delivered straight to your inbox</p>
                                  <p> contact@casinosbonuscodes.ca</p>
                                  <ul class="ftco-footer-social p-0">
                                      <li class="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="fa fa-twitter"></span></a></li>
                                      <li class="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="fa fa-facebook"></span></a></li>
                                      <li class="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="fa fa-instagram"></span></a></li>
                                  </ul>
                              </div>
                              <div class="col-md-8">
                                  <div class="row justify-content-center">
                                      <div class="col-md-12 col-lg-10">
                                          <div class="row">

                                              <div class="about-author d-flex p-4 bg-light">
                                                  <div class="bio mr-5">
                                                      <img src="./img/writers.webp" alt="Our writers" class="img-fluid mb-4" />
                                                      <img src="./img/top-bonus.webp" alt="Casino Bonus Canada" />
                                                  </div>
                                                  <div class="desc">
                                                      <h2 class="footer-heading">Our writters</h2>

                                                      <p>We are in the online gambling news industry for more than 5 years! Our writers worked for such websites as askgamblers, Casino Org, Gamcare and many others. We enjoy writing about exciting advances in the gambling world!</p>
                                                      <p>We are check all information! Try found best bonus offers for you!</p>
                                                  </div>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row mt-md-5">
                              <div class="col-f">
                                  <p>
                                      Copyright © <a title="Best Bonus Casino" href="http://casinosbonuscodes.ca/">CasinosBonusCodes.ca</a> 2020 - All Rights Reserved.
                                  </p>

                              </div>
                          </div>
                      </div>
                      <div class="col-md-3 py-md-5 py-4 aside-stretch-right pl-lg-5">
                          <h2 class="footer-heading">Get in Touch with us!</h2>
                          <form action="#" class="form-consultation">
                              <div class="form-group">
                                  <input type="text" class="form-control" placeholder="Your Name" />
                              </div>
                              <div class="form-group">
                                  <input type="text" class="form-control" placeholder="Your Email" />
                              </div>
                              <div class="form-group">
                                  <input type="text" class="form-control" placeholder="Subject" />
                              </div>
                              <div class="form-group">
                                  <textarea name="" id="" cols="30" rows="3" class="form-control" placeholder="Message"></textarea>
                              </div>
                              <div class="form-group">
                                  <button type="submit" class="form-control submit px-3">Send A Message</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </footer>

      </>)
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
