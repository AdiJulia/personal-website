"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap-icons/font/bootstrap-icons.css";
import ButtonMode from "../components/ButtonMode";
import Footer from "../components/Footer";
import ButtonFloat from "../components/ButtonFloat";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSubmitted(true);

      // tampilkan popup dengan SweetAlert2
      Swal.fire({
        title: "Thank you!",
        text: "Your message has been sent successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 3000, // popup otomatis hilang setelah 3 detik
      });

      // redirect setelah 3 detik
      setTimeout(() => {
        window.location.href = "https://www.adijulias.my.id/";
      }, 3000);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong, please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <div className="contact-form-container">
        <div className="form-header">
          <h2>Let's build something impactful together</h2>
          <p>Drop me a message</p>
        </div>

        <form
          id="contactForm"
          className="form-fields"
          action="https://formspree.io/f/mrbylypl"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="details">Additional Details</label>
            <textarea id="details" name="details"></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
      <ButtonMode />
      <Footer />
      <ButtonFloat />
    </div>
  );
}
