import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'


import Layout from '../components/Layout'




export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
     
        <section className="section">
          <div className="container ">
            <div className="content column is-10 is-offset-1">
            <h2 className="title is-size-2 has-text-weight-bold is-bold-light"
            style={{
              boxShadow: '0.5rem 0 0 #e30001, -0.5rem 0 0 #e30001',
              backgroundColor: '#e30001',
              color: 'black',
              padding: '.5rem',
              textAlign: 'center'
            }}>
              424 NEWS
            </h2>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ padding: '0.25em 3em' }}
                  key={post.id}
                >
                    <Link className="has-text-primary" to={post.fields.slug}>

                         <h3 style={{  boxShadow: '0.5rem 0 0 #e30001, -0.5rem 0 0 #e30001',
                         backgroundColor: '#e30001',
                         color: 'black',
                         padding: '.5rem',
                         textAlign: 'center'}}>{post.frontmatter.title}</h3>

                   <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
                    /> 
                    <p style={{ 
                      color: 'black',
                      textAlign: 'right'}}>{post.frontmatter.date}</p>
                    </Link>
                 
                  <p>
                    {post.excerpt}
                  </p>
                </div>
              ))}
          </div>
        </section>
       
      </Layout>

    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
             filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
           ) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YY")
            title
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
          }
          }
        }
      }
    }
  }
`