import React, { useEffect, useRef, useState } from "react"
import { getSettings } from "../../utils/api"

const FloatingContact = () => {
  const [settings, setSettings] = useState(null)
  const [iconIndex, setIconIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  /* ROTATING ICONS */
  const icons = [
    { cls: "bx bxl-whatsapp", name: "WhatsApp" },
    { cls: "bx bxl-instagram", name: "Instagram" },
    { cls: "bx bx-message-dots", name: "SMS" },
  ]

  /* FETCH SETTINGS */
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings()
        setSettings(data)
      } catch (err) {
        console.error("❌ FLOATING CONTACT SETTINGS ERROR:", err)
      }
    }

    fetchSettings()
  }, [])

  /* ICON ROTATION */
  useEffect(() => {
    const id = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  /* CLOSE ON OUTSIDE CLICK (FIXED FOR MOBILE) */
  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return
      if (!wrapRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("pointerdown", onDown)

    return () => {
      document.removeEventListener("pointerdown", onDown)
    }
  }, [])

  if (!settings) return null

  /* CLEAN NUMBERS */
  const phoneClean = settings.contact_number
    ? settings.contact_number.replace(/\D/g, "")
    : ""

  const whatsappClean = settings.whatsapp_number
    ? settings.whatsapp_number.replace(/\D/g, "")
    : ""

  const message = "Hello Vivacious Solutions! I want to start a project."

  const callUrl = phoneClean ? `tel:${phoneClean}` : "#"
  const smsUrl = phoneClean
    ? `sms:${phoneClean}?body=${encodeURIComponent(message)}`
    : "#"

  const waUrl = whatsappClean
    ? `https://wa.me/${whatsappClean}?text=${encodeURIComponent(message)}`
    : "#"

  const instaUrl = settings.instagram_link || "#"

  return (
    <div
      ref={wrapRef}
      className={`float-wrap ${open ? "is-open" : ""}`}
      aria-label="Contact shortcuts"
      style={{
        position: "fixed",
        bottom: "100px",
        right: "20px",
        zIndex: 99999,
        pointerEvents: "auto"
      }}
    >

      <div className="float-actions">
        {/* CALL */}
        {phoneClean && (
          <a
          
            href={callUrl}
            className="float-action float-call"
            aria-label="Call"
            title="Call"
          >
            <i className="bx bx-phone-call"></i>
          </a>
        )}

        {/* SMS */}
        {phoneClean && (
          <a
            href={smsUrl}
            className="float-action float-sms"
            aria-label="Send SMS"
            title="SMS"
          >
            <i className="bx bx-message-dots"></i>
          </a>
        )}

        {/* INSTAGRAM */}
        {instaUrl !== "#" && (
          <a
            href={instaUrl}
            className="float-action float-ig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        )}

        {/* WHATSAPP */}
        {whatsappClean && (
          <a
            href={waUrl}
            className="float-action float-wa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        )}
      </div>

      {/* MAIN FLOATING BUTTON */}
      <button
        type="button"
        className="float-main"
        aria-label="Open contact menu"
        title="Contact"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <i className={icons[iconIndex].cls} aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default FloatingContact
