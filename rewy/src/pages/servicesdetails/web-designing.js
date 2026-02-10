import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import WebDesigningDetailsContent from "../../components/ServiceDetails/WebDesigningDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"
import ServiceDetailsContent from "../../components/ServiceDetails/ServiceDetailsContent"

const SocialMediaServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Social Media Marketing"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Social Media Marketing"
      />

      <ServiceDetailsContent/>

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Social Media Marketing" />

export default SocialMediaServicePage
