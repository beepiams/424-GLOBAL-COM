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
        <h1 style={{
          boxShadow: '0.5rem 0 0 #e30001, -0.5rem 0 0 #e30001',
          backgroundColor: '#e30001',
          color: 'black',
          padding: '1rem',
          textAlign: 'center'
        }}>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >

        
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
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={"name"} >Your name</label>
            <div className="control">
              <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"email"}>Email</label>
              <div className="control">
                <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
              </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"message"}>Message</label>
            <div className="control">
              <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
            </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit">Send</button>
          </div>
        </form>
        </div>
        </div>
        </section>
        
      </Layout>
    );
  }
}