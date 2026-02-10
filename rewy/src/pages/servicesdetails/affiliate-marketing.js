import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import AffiliateMarketingDetailsContent from "../../components/ServiceDetails/AffiliateMarketingDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

const AffiliateMarketingServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Affiliate Marketing"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Affiliate Marketing"
      />

      <AffiliateMarketingDetailsContent/>

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Affiliate Marketing" />

export default AffiliateMarketingServicePage
