import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import SeoOptimizationDetailsContent from "../../components/ServiceDetails/SeoOptimizationDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"


const SeoOptimizationServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="SEO Optimization"
        homePageText="Home"
        homePageUrl="/"
        activePageText="SEO Optimization"
      />

      

     
      <RelatedServices />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="SEO Optimization" />

export default SeoOptimizationServicePage
