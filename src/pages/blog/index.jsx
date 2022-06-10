import * as React from 'react'
import { graphql, Link } from 'gatsby'
import BasicLayout from '../../layouts/basicLayout';

const BlogPage = ({ data }) => {
  return (
    <BasicLayout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </BasicLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM, D, YYYY")
        }
        id
        slug
      }
    }
  }
`

export default BlogPage;