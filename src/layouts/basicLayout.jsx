import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinksItem,
  navLinksText,
  siteTitle
 } from './basicLayout.module.css'

 

const BasicLayout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          pages {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <ul className={navLinks}>
          {data.site.siteMetadata.pages.map((page) => {
            return (
              <li 
                key={page.name} 
                className={navLinksItem}>
                  <Link to={page.url} className={navLinksText}>{page.name}</Link>
              </li>         
            )
          })}
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
          {children}
      </main>
    </div>
  )
}

export default BasicLayout;