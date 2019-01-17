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
           
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ padding: '0.25em 2em' }}
                  key={post.id}
                >
                    <Link className="has-text-primary" to={post.fields.slug}>
                         <p style={{ 
                         color: 'black',
                         fontSize: '11px',
                         textAlign: 'right'}}>{post.frontmatter.title}<br />{post.frontmatter.date}</p>
                      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
                      /> 
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