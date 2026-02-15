import React from "react"
import Layout from "../components/_App/Layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import FunFacts from "../components/Index/FunFacts"
import Footer from "../components/_App/Footer"
import OfflineAdvertisement from "../components/OfflineMedia/OfflineAdvertisement"

const OfflineAdvertisingPage = () => {
  return (
    <Layout>
      
      <Navbar />

      <PageBanner
        pageTitle="Offline Advertising"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Offline Advertising"
      />

      <OfflineAdvertisement/>

      <FunFacts/>

      

      

      

      <Footer />

    </Layout>
  )
}

/* SEO */
export const Head = () => (
  <Seo
    title="Offline Advertising Services"
    description="Expand your brand visibility with our professional offline advertising services including radio, cinema, transit, outdoor and more."
  />
)

export default OfflineAdvertisingPage
