import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import ApplicationDesignDetailsContent from "../../components/ServiceDetails/ApplicationDesignDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

const ApplicationDesignServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Application Design"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Application Design"
      />

      <ApplicationDesignDetailsContent/>

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Application Design" />

export default ApplicationDesignServicePage
