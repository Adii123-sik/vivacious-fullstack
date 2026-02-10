
import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import SmsMarketingDetailsContent from "../../components/ServiceDetails/SmsMarketingDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

const SmsMarketingServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="SMS Marketing"
        homePageText="Home"
        homePageUrl="/"
        activePageText="SMS Marketing"
      />

      <SmsMarketingDetailsContent/>

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="SMS Marketing" />

export default SmsMarketingServicePage
