import React from 'react'
import { Link } from 'gatsby'

import Base from '../components/layouts/base'
import Image from '../components/molecules/image'
import SEO from '../components/molecules/seo'

const IndexPage = () => (
  <Base>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Base>
)

export default IndexPage
