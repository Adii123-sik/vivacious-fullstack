import React, { useEffect, useState } from "react"
import Layout from "../components/_App/Layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import { getSettings } from "../utils/api"

const TermsOfServicePage = () => {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    getSettings().then(setSettings)
  }, [])

  if (!settings) return null

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={settings.terms_title}
        homePageText="Home"
        homePageUrl="/"
        activePageText={settings.terms_title}
      />

      <section className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="terms-of-service-content">

            <p><i>{settings.terms_last_updated}</i></p>

            <h3>1) Acceptance of Terms</h3>
            <p style={{ whiteSpace: "pre-line" }}>{settings.terms_acceptance}</p>

            <h3>2) Authority to Bind</h3>
            <p>{settings.terms_authority}</p>

            <h3>3) Definitions</h3>
            <ul>
              <li><strong>Client:</strong> {settings.terms_definitions_client}</li>
              <li><strong>Deliverables:</strong> {settings.terms_definitions_deliverables}</li>
              <li><strong>Proposal/SOW:</strong> {settings.terms_definitions_proposal}</li>
              <li><strong>Third-Party Platforms:</strong> {settings.terms_definitions_third_party}</li>
            </ul>

            <h3>4) Using the Site</h3>
            <p>{settings.terms_site_usage_intro}</p>
            <p>{settings.terms_site_usage_restrictions}</p>
            <blockquote>{settings.terms_site_usage_notice}</blockquote>

            <h3>5) Services & Deliverables</h3>
            <p>{settings.terms_services}</p>

            <h3>6) Third-Party Platforms</h3>
            <p>{settings.terms_third_party_platforms}</p>

            <h3>7) Changes</h3>
            <p>{settings.terms_changes}</p>

            <h3>8) Contact</h3>
            <p>{settings.terms_contact}</p>

          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Terms & Conditions" />

export default TermsOfServicePage
