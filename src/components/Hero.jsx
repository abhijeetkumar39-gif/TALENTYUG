import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const images = [
    new URL("../public/Mask.png", import.meta.url).href,
    new URL("../public/d1.png", import.meta.url).href,
    new URL("../public/d2.png", import.meta.url).href,
    new URL("../public/d3.png", import.meta.url).href,
    new URL("../public/d4.png", import.meta.url).href,
  ];

  // 🔥 Clone for seamless loop
  const extendedImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const realLength = images.length;

  // ✅ Auto slide with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // 🧠 Seamless infinite logic (MOST IMPORTANT FIX)
  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      // when reaching cloned first image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 600);
    }

    if (currentIndex === 0) {
      // when reaching cloned last image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedImages.length - 2);
      }, 600);
    }
  }, [currentIndex, extendedImages.length]);

  // 🎯 Real index for dots
  const getRealIndex = () => {
    if (currentIndex === 0) return realLength - 1;
    if (currentIndex === extendedImages.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1>India's Placement Infrastructure For Tier 2/3 Colleges</h1>

          <p className="lead">
            70% Placements | 5.5L Average Salary <br />
            7-Step Structured Process
          </p>

          <div className="hero-actions">
            <button className="btn primary">Get Started</button>
          </div>

          <hr className="stats-divider" />

          <ul className="stats">
            <li>
              <strong>1M+</strong> Students <br />Annual Unemployed
            </li>
            <li>
              <strong>70%</strong> <br /> Success Rate
            </li>
            <li>
              <strong>500Cr</strong> <br /> Markets
            </li>
          </ul>
        </div>

        {/* ✅ RIGHT SLIDER */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 24, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="hero-card"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* 🔥 FIX: Proper track width + correct translate */}
            <motion.div
              ref={sliderRef}
              className="slider-track"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) nextSlide();
                if (info.offset.x > 80) prevSlide();
              }}
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={
                isTransitioning
                  ? { duration: 0.6, ease: "easeInOut" }
                  : { duration: 0 }
              }
            >
              {extendedImages.map((img, index) => (
                <div className="slide" key={index}>
                  <img
                    src={img}
                    alt="campus"
                    className="hero-img"
                    draggable="false"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 🎯 DOTS */}
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  getRealIndex() === index ? "active" : ""
                }`}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(index + 1);
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}