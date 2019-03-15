import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
            <div className="container">
            <div className="content">    
          <p style={{ 
            color: 'black',
            fontSize: '11px',
            textAlign: 'right'}}>
        info@424groupinc.com</p>
        </div>
        <h1 style={{
          boxShadow: '0.5rem 0 0 #e30001, -0.5rem 0 0 #e30001',
          backgroundColor: '#e30001',
          color: 'black',
          padding: '1rem',
          textAlign: 'center'
        }}>Contact</h1>
        </div>
        </section>


        <span>424 N FAIRFAX AVE. LOS ANGELES, CA 90036</span>
        <br /><br />
        <h6>phone: +1 323 424 4842</h6>
        <h6>fax: +1 323 424 4292</h6> 
        <span>order inquiries:</span>
        <h6>customerservice@fourtwofouronfairfax.com</h6>   
        
        <span>HOURS OF OPERATION </span>
        <h6>Closed on Monday, Tuesday–Friday 11am- 7pm, Saturday–Sunday 12pm–6pm</h6>
        
        <span>HOLIDAY HOURS 2018 (DEC 14–JAN 4)</span>
        <h6>Tuesday–Thursday: 11am–8pm, Friday–Saturday 11am–9pm, Sunday 11am–7pm. Closed Dec 24–25 & Dec 31–Jan 2</h6>
        
        <span>All sales are final. No returns or exchanges, unless directly approved by FourTwoFour on Fairfax.</span>
        <br /><br />
        
      </Layout>
    );
  }
}