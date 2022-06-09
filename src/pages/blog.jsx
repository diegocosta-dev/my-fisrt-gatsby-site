import * as React from 'react'
import { graphql } from 'gatsby'
import BasicLayout from '../layouts/basicLayout';

const blogPage = ({ data }) => {
  return (
    <BasicLayout pageTitle={'My Blog Posts'}>
      <ul>
        {data.allFile.nodes.map((node) => {
          return (
            <li key={node.name}>{ node.name }</li>
          )
        })}
      </ul>
    </BasicLayout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default blogPage;