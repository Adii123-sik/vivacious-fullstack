import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import WebHostingDetailsContent from "../../components/ServiceDetails/WebHostingDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

const WebHostingServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Web Hosting"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Web Hosting"
      />

      <WebHostingDetailsContent/>

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Web Hosting" />

export default WebHostingServicePage
