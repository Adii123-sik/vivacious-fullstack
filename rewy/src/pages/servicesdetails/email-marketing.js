import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import EmailMarketingDetailsContent from "../../components/ServiceDetails/EmailMarketingDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

const EmailMarketingServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Email Marketing"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Email Marketing"
      />

      <EmailMarketingDetailsContent/>

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Email Marketing" />

export default EmailMarketingServicePage
