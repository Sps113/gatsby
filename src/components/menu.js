import React from "react"
import { Link } from "gatsby"

const Menu = ({menu}) => (
  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
          <a className="navbar-brand" href="./">casinos bonus codes<span>.CA</span></a>

          <div className="collapse navbar-collapse" id="ftco-nav">

              <ul className="navbar-nav m-auto">
              {menu.menu.map(link => (
                <li
                  key={link.name}
                  className="nav-item"
                >
                  <Link
                    className="nav-link"
                    to={"/" + link.slug}>
                    {link.name}
                  </Link>
                </li>
              ))}

              </ul>
          </div>
      </div>
  </nav>
)
export default Menu
