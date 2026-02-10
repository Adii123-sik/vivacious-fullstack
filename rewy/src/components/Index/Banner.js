import React, { useEffect, useState } from "react"
import AOS from "aos"
import { Link } from "gatsby"
import bannerImg from "../../images/banner-img1.png"
import { getSettings } from "../../utils/api"

const Banner = () => {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    AOS.init()

    const fetchSettings = async () => {
      try {
        const data = await getSettings()
        setSettings(data)
      } catch (error) {
        console.error("❌ SETTINGS FETCH ERROR:", error)
      }
    }

    fetchSettings()
  }, [])

  if (!settings) return null

  return (
    <>
      <div className="it-services-banner overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1 data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                  Delivering Superior Services IT & Digital Marketing Solutions.
                </h1>

                <p data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                  Grow your business with our digital marketing agency. We offer
                  tailored strategies to boost visibility, engagement, and conversions.
                </p>

                <div className="btn-box" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                  <Link to="/contact" className="default-btn">
                    <i className="flaticon-right"></i>
                    Get Started <span></span>
                  </Link>

                  {/* 🔥 SOCIAL LINKS (FROM SETTINGS TABLE) */}
                  <div className="banner-social">
                    {settings.facebook_link && (
                      <a
                        href={settings.facebook_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    )}

                    {settings.instagram_link && (
                      <a
                        href={settings.instagram_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    )}

                    {settings.linkedin_link && (
                      <a
                        href={settings.linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    )}

                    {settings.twitter_link && (
                      <a
                        href={settings.twitter_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    )}

                    {settings.youtube_link && (
                      <a
                        href={settings.youtube_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src={bannerImg} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Responsive Social Icons CSS */}
      <style>{`
        .btn-box{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .banner-social{
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .banner-social a{
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: rgba(0,0,0,0.06);
          transition: transform .2s ease, background .2s ease;
        }

        .banner-social a i{
          font-size: 20px;
        }

        .banner-social a:hover{
          transform: translateY(-2px);
          background: rgba(0,0,0,0.10);
        }

        @media (max-width: 991px){
          .banner-social a{
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 575px){
          .btn-box{
            justify-content: center;
          }
          .banner-social{
            justify-content: center;
            width: 100%;
          }
          .banner-social a{
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </>
  )
}

export default Banner
