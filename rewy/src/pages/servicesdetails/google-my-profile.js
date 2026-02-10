import React from "react"
import Layout from "../../components/_App/Layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import GoogleMyProfileDetailsContent from "../../components/ServiceDetails/GoogleMyProfileDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"
import servcedetail from "../../components/ServiceDetails/ServiceDetailsContent"

const GoogleMyProfileServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Google My Profile Listing"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Google My Profile"
      />

      <servcedetail/>

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Google My Profile Listing" />

export default GoogleMyProfileServicePage
