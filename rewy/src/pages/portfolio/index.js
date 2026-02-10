import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import TwoColumns from "../../components/Studies/TwoColumns"
import Footer from "../../components/_App/Footer"
import RecentProjects from "../../components/Index/RecentProjects"
import ProjectStartArea from "../../components/Index/ProjectStartArea"


const PortfolioPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Portfolio page"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Portfolio page"
      />
      <RecentProjects/>
      <ProjectStartArea/>

      

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Case Studies" />

export default PortfolioPage

