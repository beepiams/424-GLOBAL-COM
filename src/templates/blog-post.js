import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredImage,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (

  <section className="section section--gradient ">
  {helmet || ''}
    <div className="container margin-top-0">
      <div className="section">
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <p style={{ 
                color: 'black',
                fontSize: '11px',
                textAlign: 'right'}}>
                {title}
              </p>
            
              <PostContent content={content} />
           
              <p style={{ 
                color: 'black',
                fontSize: '11px',
                textAlign: 'right'}}>
                {description}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

BlogPostTemplate.propTypes = {
  featuredImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredImage={post.frontmatter.featuredImage}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`
