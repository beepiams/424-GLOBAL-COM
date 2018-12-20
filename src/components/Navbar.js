import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
import logo from '../img/424_logo.svg'

import { slide as Menu } from 'react-burger-menu'

const Navbar = class extends React.Component {

  showSettings (event) {
    event.preventDefault();

  }

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  

  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="container">
    <Menu left>
     <Link className="navbar-item" to="/" 
      activeStyle={{ color: "black", "background-color": "red" }}   
    >News</Link>  
    <Link className="navbar-item" to="/about" 
    activeStyle={{
      color: "black",
      "background-color": "red",
    }}>About</Link>
      <Link className="navbar-item" to="/products" 
      activeStyle={{
        color: "black",
        "background-color": "red",
      }}>Lookbook</Link>
      <Link className="navbar-item" to="/contact" 
      activeStyle={{
        color: "black",
        "background-color": "red",
      }}>Stockist</Link>
      <a
        className="navbar-item"
        href="https://shop.fourtwofouronfairfax.com"
              target="_blank"
              rel="noopener noreferrer"
          >Shop
          </a>
      <div className="navbar-end">
      <a
  className="navbar-item"
          href="https://twitter.com/424onFAIRFAX"
          target="_blank"
          rel="noopener noreferrer"
      >tw</a>
      <a
      className="navbar-item"
              href="https://www.facebook.com/424onFairfax"
              target="_blank"
              rel="noopener noreferrer"
          >fb</a>
          <a
          className="navbar-item"
                  href="https://www.instagram.com/fourtwofouronfairfax/"
                  target="_blank"
                  rel="noopener noreferrer"
              >ig</a>
              <a
              className="navbar-item"
                      href="http://424onfairfax.tumblr.com"
                      target="_blank"
                      rel="noopener noreferrer"
                  >tb</a>
      </div>
    </Menu>
    <div className="navbar-brand">
    <Link to="/" className="navbar-logo" title="Logo">
    <img src={logo} alt="fourtwofour" />
  </Link>
    </div>
      </div>
      
  </nav>
  )}
}

export default Navbar
