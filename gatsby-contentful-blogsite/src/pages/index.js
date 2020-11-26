import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="button">
      <Link to="/blog/" className="button">See Blogs</Link> <br />
    </div>
    <img  src="https://gilesmetcalfedigital.co.uk/wp-content/uploads/2016/01/blogging.jpg" alt="Nature" class="responsive"></img>
  </Layout>
)

export default IndexPage
