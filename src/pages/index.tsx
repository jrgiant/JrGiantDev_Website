import * as React from 'react'
import Crane from '../images/Crane.svg'
// import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>We are rebuilding</h1>
        <p>Please be patient as we rebuild our site</p>
        <img src={Crane} alt="crane" />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
