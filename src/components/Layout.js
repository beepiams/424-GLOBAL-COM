import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import logo from '../img/424_logo.svg'

// import Navbar from '../components/Navbar'
import { push as Menu } from 'react-burger-menu'

import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/424_logo.svg" />
        </Helmet>
       


        <div id="outer-container">
        <Menu left width={ 240 } styles={ styles } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
        <Link className="navbar-item" to="/" 
    activeStyle={{color: "black",
    "background-color": '#e30001', }}   
  >News</Link>  
  <Link className="navbar-item" to="/stockist" 
  activeStyle={{color: "black",
  "background-color": '#e30001', }}>Stockist</Link>
  <Link className="navbar-item" to="/products" 
  activeClassName={{  }}>Lookbook</Link>
  <Link className="navbar-item" to="/contact" 
    activeStyle={{
      color: "black",
      "background-color": '#e30001',
    }}>Contact</Link>
    <a
    className="navbar-item"
    href="https://shop.fourtwofouronfairfax.com"
          target="_blank"
          rel="noopener noreferrer"
      >Shop
      </a>

      <div className="navbar-end">
      <a  className="navbar-item"
          href="https://twitter.com/424onFAIRFAX"
          target="_blank"
          rel="noopener noreferrer">tw</a>

      <a  className="navbar-item"
          href="https://www.facebook.com/424onFairfax"
          target="_blank"
          rel="noopener noreferrer">fb</a>
      <a
          className="navbar-item"
          href="https://www.instagram.com/fourtwofouronfairfax/"
          target="_blank"
          rel="noopener noreferrer">ig</a>
      <a
          className="navbar-item"
          href="http://424onfairfax.tumblr.com"
          target="_blank"
          rel="noopener noreferrer">tb</a>
      </div>
        
       </Menu>
        <main id="page-wrap">

        <div>{children}</div>
    
        </main>
        <Link to="/" className="navbarlogo"  title="Logo" >
        <img style={{zIndex:'0'}}  src={logo}  alt="fourtwofour" />
      </Link>
      </div>
     
      </div>
    )}
  />
)

export default TemplateWrapper
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '18px',
    left: '16px',
    top: '14px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    // height: '20px',
    width: '20px'
  },

  bmCross: {
    background: 'black',
  },

  bmMenu: {
    background: 'rgba(255, 255, 255, 0.9)',
     padding: '3.5em 0em 0',
    fontSize: '11px'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#e30001',
    // padding: '0.8em'
  },

  bmItem: {
    
  },


  // bmOverlay: {
  //   background: '#e30001'
  // },

  


}


