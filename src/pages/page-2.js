import React from 'react'
import { Link } from 'gatsby'

import Base from '../components/layouts/base'
import SEO from '../components/molecules/seo'

const SecondPage = () => (
  <Base>
    <SEO title='Page two' />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>
  </Base>
)

export default SecondPage
