import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"
class Navbar extends Component {
  state = {
    navbarState: false,
    menus: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      { id: 2, text: "About", url: "/about" },
      { id: 3, text: "Service", url: "/service" },
      { id: 4, text: "Contact", url: "/contact" }
    ],
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="some logo" width="40px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            this.setState({ navbarState: !this.state.navbarState })
          }}
        >
          <span className="text-white">Menu</span>
        </button>
        <div
          className={
            this.state.navbarState
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav ml-auto mr-5">
              {this.state.menus.map(menu =>{
                  return(
                  <li className="nav-item">
                  <Link to={menu.url} className="nav-link text-white">
                    {menu.text}
                  </Link>
                </li>)
              })}
            
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
