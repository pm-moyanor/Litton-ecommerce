import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Contact.module.css";


export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };






  return (
    <div>
      <Navbar />
      <div className={styles["banner"]}>
        <img src="./images/banner3.jpg.large.2x.jpg" alt="Banner" />
      </div>
      <div className={styles["contactForm"]}>
        <div className={styles["infoContainer"]}>
          <h2>Contact Us</h2>
          <div className={styles["contactInfo"]}>
            <div className={styles["contactInfoItem"]}>
              <h3>General Inquiries</h3>
              <p className={styles["contactInfoEmail"]}>
                Email: contact@litton.com
              </p>
            </div>
            <div className={styles["contactInfoItem"]}>
              <h3>Mailing Address</h3>
              <p>Litton Audio</p>
              <p>326 Stanley Street</p>
              <p>Brooklyn, NY 11249</p>
            </div>
            <div className={styles["contactInfoItem"]}>
              <h3>Additional Departments</h3>
              <p className={styles["contactInfoEmail"]}>press@litton.com</p>
              <p className={styles["contactInfoEmail"]}>
                partnerships@litton.com
              </p>
            </div>
          </div>
        </div>

        <div className={styles["formContainer"]}>
          <p>
            We'd Love to Hear from You! Please feel free to get in touch with us
            using the contact form below. We're here to answer any questions or
            provide assistance.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
