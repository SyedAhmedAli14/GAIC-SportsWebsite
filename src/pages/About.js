// pages/about.js
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function About() {
    return (
      <>
        <Header />
        <main>
          {/* Section 1: Introduction */}
          <section style={{ animationDelay: '0.2s' }}>
            <h2>Welcome to Sports Central</h2>
            <p>
              At Sports Central, we believe sports bring people together and
              inspire greatness. Founded by <strong>Syed Ahmed Ali Shah</strong>, 
              our mission is to provide high-quality sports gear, accessories, and 
              resources to athletes and enthusiasts worldwide.
            </p>
          </section>
  
          {/* Section 2: Vision */}
          <section style={{ animationDelay: '0.4s' }}>
            <h2>Our Vision</h2>
            <p>
              Syed Ahmed Ali Shah started Sports Central with a simple idea: to
              make sports accessible to everyone. Our vision is to be the leading
              hub for athletes, offering not just products but also a platform to
              connect, learn, and grow.
            </p>
          </section>
  
          {/* Section 3: Journey */}
          <section style={{ animationDelay: '0.6s' }}>
            <h2>Our Journey</h2>
            <p>
              What began as a small idea in 2010 has grown into a trusted brand
              recognized for its commitment to excellence. Syed Ahmed Ali Shah,
              driven by his passion for sports, has worked tirelessly to curate
              the best products and build a community of sports lovers.
            </p>
          </section>
  
          {/* Section 4: Values */}
          <section style={{ animationDelay: '0.8s' }}>
            <h2>Our Values</h2>
            <ul>
              <li>Excellence: We are committed to offering top-notch products.</li>
              <li>Community: We believe in the power of sports to bring people together.</li>
              <li>Innovation: We constantly adapt to meet customer needs.</li>
              <li>Integrity: Honesty and transparency are our foundation.</li>
            </ul>
          </section>
        </main>
        <Footer />
      </>
    );
  }
  