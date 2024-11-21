// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/download1.jpg',
    '/images/download2.jpg',
    '/images/download3.jpg'
    
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Header />
      <main>
        {/* Slider Section */}
        <section>
          <h2>Welcome to Sports Central</h2>
          <div className="slider">
            <img src={slides[currentSlide]} alt="Slide" />
            <div className="slider-controls">
              <button onClick={prevSlide}>❮</button>
              <button onClick={nextSlide}>❯</button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section>
          <h2>Popular Sports Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="/images/download.jpg" alt="Product 1" />
              <h3>Soccer Ball</h3>
            </div>
            <div className="product-card">
              <img src="/images/download (1).jpg" alt="Product 2" />
              <h3>Tennis Racket</h3>
            </div>
            <div className="product-card">
              <img src="/images/download (2).jpg" alt="Product 3" />
              <h3>Basketball</h3>
            </div>
            <div className="product-card">
              <img src="/images/download (3).jpg" alt="Product 4" />
              <h3>Running Shoes</h3>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section>
          <h2>Why Choose Sports Central?</h2>
          <p>
            At Sports Central, we bring you the latest sports gear and
            accessories to help you excel in your game. Trusted by athletes
            worldwide, we ensure quality and performance in every product we
            offer.Accessories to help you excel in your game. Trusted by athletes
            worldwide, we ensure quality and performance in every product we
            offer
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}