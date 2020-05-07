import React from "react"
import { Link } from "gatsby"

const Footer = ({menu}) => (
  <footer className="footer">
      <div className="container-fluid px-lg-5">
          <div className="row">
              <div className="col-md-9 py-5">
                  <div className="row">
                      <div className="col-md-4 mb-md-0 mb-4">

                          <h2 className="footer-heading">About us</h2>
                          <p> All of these great bonus offers are available to players in Canada! We offer best list No Deposit Casinos & Bonus Codes 2020! </p>
                          <p>Sign up for news on the latest and greatest no deposit bonuses and casinos, delivered straight to your inbox</p>
                          <p> contact@casinosbonuscodes.ca</p>
                          <ul className="ftco-footer-social p-0">
                              <li className="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter"></span></a></li>
                              <li className="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook"></span></a></li>
                              <li className="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram"></span></a></li>
                          </ul>
                      </div>
                      <div className="col-md-8">
                          <div className="row justify-content-center">
                              <div className="col-md-12 col-lg-10">
                                  <div className="row">

                                      <div className="about-author d-flex p-4 bg-light">
                                          <div className="bio mr-5">
                                              <img src="./img/writers.webp" alt="Our writers" className="img-fluid mb-4" />
                                              <img src="./img/top-bonus.webp" alt="Casino Bonus Canada" />
                                          </div>
                                          <div className="desc">
                                              <h2 className="footer-heading">Our writters</h2>

                                              <p>We are in the online gambling news industry for more than 5 years! Our writers worked for such websites as askgamblers, Casino Org, Gamcare and many others. We enjoy writing about exciting advances in the gambling world!</p>
                                              <p>We are check all information! Try found best bonus offers for you!</p>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mt-md-5">
                      <div className="col-f">
                          <p>
                              Copyright © <a title="Best Bonus Casino" href="/">CasinosBonusCodes.ca</a> 2020 - All Rights Reserved.
                          </p>

                      </div>
                  </div>
              </div>
              <div className="col-md-3 py-md-5 py-4 aside-stretch-right pl-lg-5">
                  <h2 className="footer-heading">Get in Touch with us!</h2>
                  <form action="#" className="form-consultation">
                      <div className="form-group">
                          <input type="text" className="form-control" placeholder="Your Name" />
                      </div>
                      <div className="form-group">
                          <input type="text" className="form-control" placeholder="Your Email" />
                      </div>
                      <div className="form-group">
                          <input type="text" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                          <textarea name="" id="" cols="30" rows="3" className="form-control" placeholder="Message"></textarea>
                      </div>
                      <div className="form-group">
                          <button type="submit" className="form-control submit px-3">Send A Message</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    
  </footer>

)
export default Footer
