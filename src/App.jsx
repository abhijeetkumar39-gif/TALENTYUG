import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import WhySection from "./components/WhySection";
import Footer from "./components/Footer";
import Colleges from "./pages/Colleges";

const Home = () => (
  <>
    <main>
      <Hero />
      <WhySection />
      <section className="container">
        <Features />
        <Testimonials />
      </section>
    </main>
    <Footer />
  </>
);

export default function App() {
  return (
    <div className="app-root">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colleges" element={<Colleges />} />
      </Routes>
    </div>
  );
}
