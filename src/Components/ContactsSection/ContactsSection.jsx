import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactsSection = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "76IDYM5uxNnPynikr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    // form.reset();
  };

  return (
    <section id="contact-section" className="contact-section section-container">
      <h2 className="sub-heading" id="contact-me">
        Contact Me
      </h2>
      <form ref={form} onSubmit={handleSubmit}>
        <section className="userNames">
          <section className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" required />
          </section>

          <section className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" required />
          </section>
        </section>

        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" required></textarea>

        <button className="submit-button" value="Send" type="submit">
          SUBMIT
        </button>
      </form>
      <section id="messageContainer"></section>
    </section>
  );
};

export default ContactsSection;
