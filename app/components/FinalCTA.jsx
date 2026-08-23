"use client";

import { useEffect, useState } from "react";
import "./FinalCTA.css";

export default function FinalCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const closeModal = () => {
    if (status !== "sending") {
      setIsOpen(false);
      setStatus("idle");
    }
  };

  return (
    <>
      <section className="final-cta" id="contact">

        <div className="final-cta-top">
          <span>THE NEXT MOVE</span>
          <span>ROLL’N MEDIA · NEW ZEALAND</span>
        </div>

        <div className="final-cta-content">

          <span className="final-cta-eyebrow">
            YOUR BUSINESS HAS MORE ROOM TO GROW.
          </span>

          <h2>
            Is your digital presence
            <br />
            <span>keeping up?</span>
          </h2>

          <p>
            Your business might already be doing great things.
            We help make sure your website, search presence and
            digital systems are working hard enough to show it.
          </p>

          <button
            type="button"
            className="gap-button"
            onClick={() => {
              setIsOpen(true);
              setStatus("idle");
            }}
          >
            LET’S TALK
            <span>↗</span>
          </button>

        </div>

        <div className="final-cta-bottom">
          <span>WEB · SEARCH · GROWTH · AUTOMATION</span>
          <span>LET’S MAKE IT WORK.</span>
        </div>

      </section>


      {/* =====================================================
          CONTACT MODAL
      ===================================================== */}

      {isOpen && (
        <div
          className="contact-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >

          <div className="contact-modal-box">

            <button
              type="button"
              className="contact-modal-close"
              onClick={closeModal}
              aria-label="Close contact form"
            >
              ×
            </button>


            <div className="contact-modal-header">

              <span>START A CONVERSATION</span>

              <h3>
                Let's make your
                <br />
                <em>next move.</em>
              </h3>

              <p>
                Tell us a little about your business and what
                you want to achieve. We’ll take it from there.
              </p>

            </div>


            {status === "success" ? (

              <div className="contact-success">

                <span className="contact-success-icon">
                  ✓
                </span>

                <h4>
                  Enquiry received.
                </h4>

                <p>
                  Thanks for getting in touch. Your enquiry is safely
                  with our team, and we’ll be in touch shortly.
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                >
                  CLOSE
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <label>
                    <span>NAME</span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </label>


                  <label>
                    <span>EMAIL</span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                </div>


                <label>
                  <span>MOBILE NUMBER</span>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+64 ..."
                    required
                  />
                </label>


                {/* SERVICE / REQUIREMENT */}

                <label>
                  <span>WHAT DO YOU NEED HELP WITH?</span>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Website Design & Development">
                      Website Design & Development
                    </option>

                    <option value="SEO">
                      SEO
                    </option>

                    <option value="Google Ads / PPC">
                      Google Ads / PPC
                    </option>

                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>

                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>

                    <option value="Automation">
                      Automation
                    </option>

                    <option value="Website + SEO">
                      Website + SEO
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </label>


                {/* MESSAGE */}

                <label>
                  <span>TELL US MORE</span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business or what you're looking to improve..."
                    rows="5"
                    required
                  />
                </label>


                {status === "error" && (
                  <p className="contact-form-error">
                    Something went wrong. Please try again.
                  </p>
                )}


                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "SENDING..."
                    : "SEND ENQUIRY"}

                  <span>↗</span>
                </button>

              </form>

            )}

          </div>

        </div>
      )}
    </>
  );
}
