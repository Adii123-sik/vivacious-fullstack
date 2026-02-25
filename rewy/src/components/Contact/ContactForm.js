import React, { useEffect, useState } from "react";
import starIcon from "../../images/star-icon.png";
import contact from "../../images/contact.png";
import { submitQuery, getServices } from "../../utils/api";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  /* ================= LOAD SERVICES ================= */
  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices();
        setServices(data || []);
      } catch (err) {
        console.error("Failed to load services", err);
      }
    };
    loadServices();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: allow only numbers
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

    // Email validation (optional)
    if (form.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(form.email.trim())) {
        next.email = "Please enter a valid email address";
      }
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
        ...form,
        source: "contact",
      });

      setStatus({
        type: "success",
        msg: "✅ Query submitted successfully. We’ll contact you soon.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "❌ Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="Get in Touch" />
            Get in Touch
          </span>
          <h2>Let’s Grow Your Business with Vivacious Solutions</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={contact} alt="Contact" />
          </div>

          <div className="col-lg-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit} noValidate>

                {/* STATUS MESSAGE */}
                {status && (
                  <div
                    style={{
                      marginBottom: "15px",
                      padding: "12px 14px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: status.type === "success" ? "#155724" : "#721c24",
                      background:
                        status.type === "success"
                          ? "#d4edda"
                          : "#f8d7da",
                      border:
                        status.type === "success"
                          ? "1px solid #c3e6cb"
                          : "1px solid #f5c6cb",
                    }}
                  >
                    {status.msg}
                  </div>
                )}

                <input
                  type="text"
                  name="name"
                  className="form-control"
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
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {errors.email}
                  </div>
                )}

                <input
                  type="tel"
                  name="phone"
                  className="form-control"
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

                <select
                  name="service"
                  className="form-control"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.service_name}>
                      {service.service_name}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {errors.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="default-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <span></span>
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
