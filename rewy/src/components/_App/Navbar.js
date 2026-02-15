import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import {
  submitQuery,
  getPricingPlans,
  getSettings,
  getServices
} from "../../utils/api"

/* ================= QUERY MODAL ================= */

const QueryModal = ({ open, onClose }) => {
  const [values, setValues] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = React.useState({})
  const [submitted, setSubmitted] = React.useState(false)
  const [failed, setFailed] = React.useState(false)
  const nameRef = React.useRef(null)

  React.useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    setSubmitted(false)
    setFailed(false)
    setTimeout(() => nameRef.current?.focus(), 0)
    return () => (document.body.style.overflow = "auto")
  }, [open])

  if (!open) return null

  const update = (key) => (e) =>
    setValues((p) => ({ ...p, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = "Name is required"
    if (!values.phone.trim()) next.phone = "Phone is required"
    if (!values.message.trim()) next.message = "Message is required"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      await submitQuery(values)
      setSubmitted(true)
      setValues({ name: "", phone: "", email: "", message: "" })
      setErrors({})
      setTimeout(() => onClose(), 1000)
    } catch {
      setFailed(true)
    }
  }

  return (
    <div className="qs-overlay" onClick={() => onClose()}>
      <div className="qs-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qs-header">
          <h3 className="qs-title">Any Query?</h3>
          <button className="qs-close" onClick={() => onClose()}>×</button>
        </div>

        {submitted && (
          <div className="qs-success">
            ✅ Your query has been sent successfully.
          </div>
        )}

        {failed && (
          <div className="qs-error-box">
            ❌ Something went wrong.
          </div>
        )}

        {!submitted && (
          <form onSubmit={handleSubmit} className="qs-form">
            <input ref={nameRef} className="qs-input" placeholder="Name *" value={values.name} onChange={update("name")} />
            {errors.name && <div className="qs-error">{errors.name}</div>}

            <input className="qs-input" placeholder="Phone *" value={values.phone} onChange={update("phone")} />
            {errors.phone && <div className="qs-error">{errors.phone}</div>}

            <input className="qs-input" placeholder="Email (optional)" value={values.email} onChange={update("email")} />

            <textarea className="qs-textarea" placeholder="Message *" value={values.message} onChange={update("message")} />
            {errors.message && <div className="qs-error">{errors.message}</div>}

            <button type="submit" className="default-btn qs-submit">
              Submit <span></span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

/* ================= NAVBAR ================= */

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)
  const [queryOpen, setQueryOpen] = React.useState(false)

  const [pricingServices, setPricingServices] = React.useState([])
  const [settings, setSettings] = React.useState(null)

  const [pricingOpen, setPricingOpen] = React.useState(false)

  // ✅ NEW SERVICES STATE
  const [services, setServices] = React.useState([])
  const [servicesOpen, setServicesOpen] = React.useState(false)

  const closeNavbar = () => {
    setCollapsed(true)
    setPricingOpen(false)
    setServicesOpen(false)
  }

  const toggleNavbar = () => setCollapsed(!collapsed)

  const togglePricing = (e) => {
    e.preventDefault()
    setPricingOpen(prev => !prev)
  }

  const toggleServices = (e) => {
    e.preventDefault()
    setServicesOpen(prev => !prev)
  }

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"

  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  /* ===== FETCH PRICING ===== */
  React.useEffect(() => {
    const loadPricingServices = async () => {
      try {
        const plans = await getPricingPlans()
        const uniqueServices = Array.from(
          new Map(
            plans.map(item => [
              item.service_slug,
              {
                service_name: item.service_name,
                service_slug: item.service_slug
              }
            ])
          ).values()
        )
        setPricingServices(uniqueServices)
      } catch (error) {
        console.error("Failed to load pricing services", error)
      }
    }
    loadPricingServices()
  }, [])

  /* ===== FETCH SETTINGS ===== */
  React.useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await getSettings()
        setSettings(data)
      } catch (err) {
        console.error("❌ NAVBAR SETTINGS ERROR:", err)
      }
    }
    loadSettings()
  }, [])

  /* ===== FETCH SERVICES ===== */
  React.useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices()
        const activeServices = data.filter(item => item.is_active === 1)
        setServices(activeServices)
      } catch (error) {
        console.error("Failed to load services", error)
      }
    }
    loadServices()
  }, [])

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="rewy-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">

              <Link to="/" className="navbar-brand" onClick={closeNavbar}>
                {settings?.logo_image ? (
                  <img src={settings.logo_image} alt="logo" style={{ height: 50 }} />
                ) : (
                  <span className="fw-bold">Logo</span>
                )}
              </Link>

              <button onClick={toggleNavbar} className={classTwo}>
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne}>
                <ul className="navbar-nav">
                  <li className="nav-item"><Link to="/" className="nav-link" onClick={closeNavbar}>Home</Link></li>
                  <li className="nav-item"><Link to="/about-us" className="nav-link" onClick={closeNavbar}>About</Link></li>

                  {/* ✅ SERVICES DROPDOWN */}
                  <li className={`nav-item dropdown services-dropdown ${servicesOpen ? "show" : ""}`}>
                    <a href="#" className="nav-link dropdown-toggle" onClick={toggleServices}>
                      Services
                    </a>
                    <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
                      {services.map(service => (
                        <li key={service.id}>
                          <Link
                            to={`/services/service-details/${service.id}`}
                            className="dropdown-item"
                            onClick={closeNavbar}
                          >
                            {service.service_name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item"><Link to="/portfolio" className="nav-link" onClick={closeNavbar}>Portfolio</Link></li>
                  <li className="nav-item"><Link to="/blog" className="nav-link" onClick={closeNavbar}>Blog</Link></li>

                  {/* PRICING DROPDOWN */}
                  <li className={`nav-item dropdown pricing-dropdown ${pricingOpen ? "show" : ""}`}>
                    <a href="#" className="nav-link dropdown-toggle" onClick={togglePricing}>
                      Pricing
                    </a>
                    <ul className={`dropdown-menu ${pricingOpen ? "show" : ""}`}>
                      {pricingServices.map(service => (
                        <li key={service.service_slug}>
                          <Link
                            to={`/pricing/${service.service_slug}`}
                            className="dropdown-item"
                            onClick={closeNavbar}
                          >
                            {service.service_name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item"><Link to="/contact" className="nav-link" onClick={closeNavbar}>Contact</Link></li>
                </ul>

                <div className="others-option">

                  {/* OFFLINE CAMPAIGN LINK */}
                  <Link
                    to="/offline-advertisment"
                    className="offline-btn"
                    onClick={closeNavbar}
                  >
                    Offline Campaigns
                  </Link>

                  {/* EXISTING BUTTON */}
                  <button
                    className="default-btn"
                    onClick={() => setQueryOpen(true)}
                  >
                    Any Query ? <span></span>
                  </button>

                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>

      <QueryModal open={queryOpen} onClose={() => setQueryOpen(false)} />
    </>
  )
}

export default Navbar
