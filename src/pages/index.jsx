import * as React from 'react'
import BasicLayout from '../layouts/basicLayout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <BasicLayout pageTitle={'Home Page'}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/golden.jpg'/>
    </BasicLayout>
  )
}

export default IndexPage;
