import React, { useEffect, useState } from "react"
import Layout from "../components/_App/Layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import { getSettings } from "../utils/api"

const PrivacyPolicyPage = () => {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    getSettings().then(setSettings)
  }, [])

  if (!settings) return null

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={settings.privacy_title}
        homePageText="Home"
        homePageUrl="/"
        activePageText={settings.privacy_title}
      />

      <section className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="privacy-policy-content">

            <p><i>{settings.privacy_last_updated}</i></p>

            <p>{settings.privacy_intro}</p>

            <h3>1) Who We Are & Contact Details</h3>
            <p>
              <strong>{settings.privacy_company_name}</strong><br />
              {settings.privacy_company_address}<br />
              <strong>Email:</strong> {settings.privacy_company_email} |{" "}
              <strong>Phone:</strong> {settings.privacy_company_phone}<br />
              <strong>Grievance Officer:</strong> {settings.privacy_grievance_officer}
            </p>

            <h3>2) Information We Collect</h3>

            <h4>Information You Provide Directly</h4>
            <p style={{ whiteSpace: "pre-line" }}>{settings.privacy_info_direct}</p>

            <h4>Information Collected Automatically</h4>
            <p style={{ whiteSpace: "pre-line" }}>{settings.privacy_info_automatic}</p>

            <h4>Information From Third Parties</h4>
            <p style={{ whiteSpace: "pre-line" }}>{settings.privacy_info_third_party}</p>

            <h3>3) How We Use Information</h3>
            <p style={{ whiteSpace: "pre-line" }}>{settings.privacy_usage}</p>

            <p><strong>Legal Basis:</strong> {settings.privacy_legal_basis}</p>

            <h3>4) Cookies & Tracking</h3>
            <ul>
              <li>{settings.privacy_cookies_necessary}</li>
              <li>{settings.privacy_cookies_analytics}</li>
              <li>{settings.privacy_cookies_ads}</li>
            </ul>

            <p>{settings.privacy_cookie_choices}</p>

            <h3>5) Email & SMS Communications</h3>
            <p>{settings.privacy_email_sms}</p>

            <h3>6) Sharing of Information</h3>
            <p>{settings.privacy_sharing}</p>

            <h3>7) International Transfers</h3>
            <p>{settings.privacy_international_transfer}</p>

            <h3>8) Data Retention</h3>
            <p style={{ whiteSpace: "pre-line" }}>{settings.privacy_retention}</p>

            <h3>9) Security</h3>
            <p>{settings.privacy_security}</p>

            <h3>10) Your Rights</h3>
            <p style={{ whiteSpace: "pre-line" }}>{settings.privacy_user_rights}</p>

            <p>{settings.privacy_contact_rights}</p>

          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage
