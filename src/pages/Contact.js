// pages/contact.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Contact Information */}
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have questions? Feel free to reach out to us via the form or using
            the details below.
          </p>
          <ul>
            <li><strong>Email:</strong> syedahmedalis14@gmail.com</li>
            <li><strong>Phone:</strong> +92 333 2823844 </li>
            <li><strong>Address:</strong> MA JINNAH ROAD KARACHI </li>
          </ul>
        </section>

        {/* Section 2: Contact Form */}
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>

        {/* Section 3: Map */}
        <section className="contact-map">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14480.148083300195!2d67.02524265000001!3d24.86258515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6d06bea525%3A0xca5759c73e8b99ce!2sSaddar%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1732191953584!5m2!1sen!2s" 
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
