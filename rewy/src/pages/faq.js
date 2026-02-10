import React from "react"
import Layout from "../components/_App/Layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"
import StartProject from "../components/Common/StartProject"
import Footer from "../components/_App/Footer"

const FAQPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="FAQ"
        homePageText="Home"
        homePageUrl="/"
        activePageText="FAQ"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q1. What services does Vivacious Solutions provide?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We provide Web Design & Development, Application Design,
                    Website Hosting, SEO Optimization, Social Media Marketing,
                    Google Ads & Meta Ads, Google Business Profile Listing,
                    Email Marketing, SMS Marketing, Affiliate Marketing, and
                    related digital consulting.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q2. How do I start a project or request a quote?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Contact us through our website form, email, phone, or WhatsApp.
                    Share your requirements (business type, services needed, and goals),
                    and we’ll reply with a proposal, timeline, and quotation.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q3. How long does it take to build a website?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    It depends on the scope. A basic business website usually takes
                    around 7–15 working days. Larger or custom websites may take longer.
                    Final timelines are confirmed in the Proposal/SOW.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q4. Do you provide website hosting and domain support?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes. We provide hosting and can assist with domain setup, DNS,
                    SSL, business email setup, renewals, and maintenance as per your plan.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q5. What is SEO optimization and what do you include?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    SEO helps your website rank higher on Google and brings organic traffic.
                    We typically cover on-page SEO, technical fixes, keyword planning,
                    content guidance, and local SEO support.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q6. Do you run Google Ads and Social Media Ads?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes. We set up and manage campaigns on Google Ads and Meta (Facebook/Instagram),
                    including targeting, creatives, conversion tracking, and optimization.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="g">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q7. Can you create/optimize Google Business Profile (GMB)?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes. We help you create/claim your profile, complete business details,
                    optimize categories/services, add photos, and guide you on reviews to
                    improve Maps visibility.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="h">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q8. Do you provide Email & SMS marketing?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes. We help with campaign setup, templates, segmentation, and reporting.
                    Marketing communication is sent with consent as required, and opt-out is supported.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="i">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q9. What information do you collect when I contact you?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We may collect your name, email, phone, company, and requirements when you contact us.
                    We may also collect basic usage/device data (like IP and pages visited) for analytics and security.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="j">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q10. Do you sell my personal information?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    No. We do not sell personal information. We may share data only with trusted
                    service providers (hosting, analytics, email/SMS tools, invoicing) or when legally required.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <StartProject />
      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="FAQ" />
export default FAQPage
