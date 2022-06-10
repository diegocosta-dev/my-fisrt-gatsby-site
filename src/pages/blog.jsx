import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BasicLayout from '../layouts/basicLayout';

const blogPage = ({ data }) => {
  return (
    <BasicLayout pageTitle={'My Blog Posts'}>
        {data.allMdx.nodes.map((node) => {
          return (
            <article>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>
          )
        })}
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
        body
      }
    }
  }
`

export default blogPage;