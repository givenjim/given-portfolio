import { useState } from "react";

const initialValues = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / email service (e.g. Formspree, EmailJS)
    alert("Message sent! Thanks for reaching out.");
    setValues(initialValues);
  };

  // "focus" class is added whenever the field has a value, mirroring the
  // original contact.js behaviour of keeping the label floated once filled.
  const fieldClass = (field) =>
    `input-container${values[field] ? " focus" : ""}`;

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        <span>04.</span> Get In Touch
        <div className="title-line"></div>
      </h2>
      <div className="container">
        <img src="/images/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <img src="/images/location.png" className="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src="/images/email.png" className="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src="/images/phone.png" className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form autoComplete="off" onSubmit={handleSubmit}>
              <h3 className="title">Contact us</h3>

              <div className={fieldClass("name")}>
                <input
                  type="text"
                  name="name"
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>

              <div className={fieldClass("email")}>
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={values.email}
                  onChange={handleChange}
                />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>

              <div className={fieldClass("phone")}>
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  value={values.phone}
                  onChange={handleChange}
                />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>

              <div className={`input-container textarea${values.message ? " focus" : ""}`}>
                <textarea
                  name="message"
                  className="input"
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>

              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
