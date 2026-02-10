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

  const [services, setServices] = useState([]); // ✅ SERVICES LIST
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      setStatus({
        type: "error",
        msg: "Please fill all required fields (*)",
      });
      return;
    }

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
              <form onSubmit={handleSubmit}>

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

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                />

                {/* ✅ DYNAMIC SERVICE DROPDOWN */}
                <select
                  name="service"
                  className="form-control"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>

                  {services.map((service) => (
                    <option
                      key={service.id}
                      value={service.service_name}
                    >
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
