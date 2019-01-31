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
        }}>info@424groupinc.com</h1>
        <h6 align="center">424 N FAIRFAX AVE. LOS ANGELES, CA 90036</h6>
     <br /><br />
    
     
        </div>
        </div>
        </section>
        
      </Layout>
    );
  }
}