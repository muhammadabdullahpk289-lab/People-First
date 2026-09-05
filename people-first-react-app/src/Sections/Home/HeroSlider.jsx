import React, { useEffect, useState } from "react";
import "./HeroSlider.css";

// Apni images yahan import karo
import img1 from "../../assets/Home-img/gallery1.webp";
import img2 from "../../assets/Home-img/gallery2.webp";
import img3 from "../../assets/Home-img/gallery3.webp";
import img4 from "../../assets/Home-img/gallery1.webp";
import img5 from "../../assets/Home-img/gallery2.webp";
import img6 from "../../assets/Home-img/gallery3.webp";
import img7 from "../../assets/Home-img/gallery1.webp";
import img8 from "../../assets/Home-img/gallery2.webp";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  // Next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Previous slide
  const prevSlide = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Image position calculate
  const getPosition = (index) => {
    const total = galleryImages.length;

    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section className="hero-slider">

      {/* Heading */}
      <div className="hero-slider-heading">
        <h2>
          OUR <span>GALLERY</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="hero-slider-wrapper">

        <div className="hero-slider-track">

          {galleryImages.map((image, index) => {
            const position = getPosition(index);

            return (
              <div
                key={index}
                className={`hero-slide hero-slide-${position}`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            );
          })}

        </div>

        {/* Left Button */}
        <button
          className="hero-slider-arrow hero-slider-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        {/* Right Button */}
        <button
          className="hero-slider-arrow hero-slider-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>

      </div>

      {/* Button */}
      <button
        className="hero-gallery-btn"
        onClick={() => {
          // Yahan apna gallery page / modal open kar sakte ho
          console.log("View our Gallery clicked");
        }}
      >
        View our Gallery
      </button>

      {/* Dots */}
      <div className="hero-slider-dots">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;