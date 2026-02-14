import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mask from "../public/Mask.png";
import d1 from "../public/d1.png";
import d2 from "../public/d2.png";
import d3 from "../public/d3.png";
import d4 from "../public/d4.png";
import "./Hero.css";

export default function Hero() {
  const images = [mask, d1, d2, d3, d4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto slide – longer interval for a calmer feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]); // small fix for React warning

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1>India's Placement Infrastructure For Tier 2/3 Colleges</h1>

          <p className="lead">
            70% Placements | 5.5L Average Salary | <br />
            7-Step Structured Process
          </p>

          <div className="hero-actions">
            <button className="btn primary">Get Started</button>
          </div>

          <hr className="stats-divider" />

          <ul className="stats">
            <li><strong>1M+</strong> Students <br />Annual Unemployed</li>
            <li><strong>70%</strong> <br /> Success Rate</li>
            <li><strong>500Cr</strong> <br /> Markets</li>
          </ul>
        </div>

        {/* Right image slider */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 24, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <motion.div
            className="hero-card"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.012, 1],
              boxShadow: [
                "0 24px 48px rgba(11, 119, 134, 0.1)",
                "0 26px 50px rgba(11, 119, 134, 0.16)",
                "0 24px 48px rgba(11, 119, 134, 0.1)",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: [0.37, 0, 0.63, 1],
              times: [0, 0.5, 1],
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="campus"
                className="hero-img"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.995 }}
                transition={{
                  duration: 0.85,
                  ease: [0.33, 0, 0.2, 1],
                }}
              />
            </AnimatePresence>
          </motion.div>

          {/* ✅ Dots indicator */}
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
