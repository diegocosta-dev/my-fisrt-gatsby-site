import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinksItem,
  navLinksText
 } from './basicLayout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItem}><Link to='/' className={navLinksText}>Home</Link></li>
          <li className={navLinksItem}><Link to='/about' className={navLinksText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
          {children}
      </main>
    </div>
  )
}

export default Layout;