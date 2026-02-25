import React, { useEffect, useState } from "react";
import { getSettings, submitQuery } from "../../utils/api";
import contact_img from "../../images/new1.webp";

const ContactSection = () => {
  const [settings, setSettings] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");
      setForm({ ...form, phone: onlyNumbers });
    } else {
      setForm({ ...form, [name]: value });
    }

    // Clear error while typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    const next = {};

    // Name validation
    if (!form.name.trim()) {
      next.name = "Name is required";
    } else if (form.name.trim().length < 3) {
      next.name = "Name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      next.name = "Name should contain only letters";
    }

    // Phone validation
    if (!form.phone.trim()) {
      next.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(form.phone)) {
      next.phone = "Phone must be 10–15 digits only";
    }

    // Message validation
    if (!form.message.trim()) {
      next.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      next.message = "Message must be at least 10 characters";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setStatus(null);

      await submitQuery({
        name: form.name,
        phone: form.phone,
        message: form.message,
        source: "contact-section",
      });

      setStatus({
        type: "success",
        msg: "✅ Message sent successfully!",
      });

      setForm({
        name: "",
        phone: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        msg: "❌ Something went wrong. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOAD SETTINGS ================= */
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings();
        setSettings(data);
      } catch (error) {
        console.error("CONTACT SETTINGS ERROR:", error);
      }
    };
    fetchSettings();
  }, []);

  if (!settings) return null;

  const counters = [
    { value: settings.value1, label: settings.point1 },
    { value: settings.value2, label: settings.point2 },
    { value: settings.value3, label: settings.point3 },
  ];

  return (
    <section className="pt-10 pb-0 contact-wrapper">
      <div className="container">
        <div className="contact-grid">

          {/* LEFT CONTENT */}
          <div className="contact-left">
            <h1 className="contact-title">
              <span>Contact</span> & Join
              <span className="together-line">Together</span>
            </h1>

            <p>
              We're just one message away! Connect with our experienced team
              to discuss your website, marketing, or branding needs — and
              let's create something exceptional together.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <div className="icon-circle">
                  <i className="bx bx-current-location"></i>
                </div>
                <div>
                  <h4>Office Address :</h4>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {settings.address}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div>
                  <h4>Phone Number :</h4>
                  <a href={`tel:${settings.contact_number}`} className="contact-link">
                    {settings.contact_number}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle">
                  <i className="bx bx-envelope"></i>
                </div>
                <div>
                  <h4>Email :</h4>
                  <a href={`mailto:${settings.email}`} className="contact-link">
                    {settings.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="contact-center">
            <img src={contact_img} alt="Contact" />
          </div>

          {/* RIGHT FORM */}
          <div className="contact-right">
            <div className="form-card">
              <h3>Get In Touch !</h3>

              <form onSubmit={handleSubmit} noValidate>

                {status && (
                  <div
                    style={{
                      marginBottom: "15px",
                      padding: "10px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      background:
                        status.type === "success" ? "#d4edda" : "#f8d7da",
                      color:
                        status.type === "success" ? "#155724" : "#721c24",
                    }}
                  >
                    {status.msg}
                  </div>
                )}

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {errors.name}
                  </div>
                )}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={15}
                />
                {errors.phone && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {errors.phone}
                  </div>
                )}

                <textarea
                  name="message"
                  placeholder="Enter Message *"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {errors.message}
                  </div>
                )}

                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit Message"}
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* COUNTER SECTION */}
        <div className="contact-counter-section">
          <div className="counter-inner">
            {counters.map((item, index) => (
              <div key={index} className="contact-counter-box">
                <h2>{item.label}+</h2>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
