import React from "react";
import "./Testimonials.css";

const Feature = ({ number, title, subtitle }) => (
  <div className="feature-card2">
    <span className="feature-number">{number}</span>
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Testimonial = ({ name, role, text, img }) => (
  <div className="testimonial-card">
    <p className="review-text">{text}</p>

    <div className="user">
      <img src={img} alt={name} className="avatar" />
      <div>
        <h4>{name}</h4>
        <span className="muted">{role}</span>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      {/* ===== Features ===== */}
      <div className="features-grid2">
        <Feature number="1" title="AI Matching Algorithm" subtitle="Role-Matched, Not Mass Applications" />
        <Feature number="2" title="Integrated Dashboard" subtitle="All Data In One Place" />
        <Feature number="3" title="Structured Process" subtitle="7-Step Repeatable Workflow" />
        <Feature number="4" title="Real-Time Analytics" subtitle="Placement Outcomes Tracked" />
      </div>

      {/* ===== Heading ===== */}
      <div className="review-heading">
        <p className="sub">Read Reviews,</p>
        <h2>ride with Confidence</h2>
        <span className="rating">4.2/5 ⭐ Based on 2026 reviews.</span>
      </div>

      {/* ===== Testimonials Area ===== */}
      <div className="reviews-row">
        {/* LEFT QUOTE BLOCK */}
        <div className="quote-block">
          <div className="big-quote">❝</div>
          <p className="quote-title">What our customers are saying</p>
          <div className="quote-count">
            <span className="quote-arrow" aria-hidden="true">&lt;</span>
            <span className="quote-nums">
              <span className="active">01</span>
              <span className="total">/ 03</span>
            </span>
            <span className="quote-arrow" aria-hidden="true">&gt;</span>
          </div>
        </div>

        {/* CARDS */}
        <div className="testi-grid">
          <Testimonial
            name="Priya Sharma"
            role="HR Manager"
            text="Hiring from Tier 2/3 colleges used to be chaotic. TalentYug helped us shortlist better candidates, manage drives smoothly, and close offers faster."
            img="https://i.pravatar.cc/150?img=47"
          />
          <Testimonial
            name="Rahul Verma"
            role="Final Year Student (B.Tech)"
            text="The mock interviews and clear application tracking boosted my confidence. I knew exactly where I stood in every hiring process."
            img="https://i.pravatar.cc/150?img=52"
          />
          <Testimonial
            name="Dr. Anil Kumar"
            role="Training & Placement Officer"
            text="TalentYug brought structure and transparency to our placement process. From company coordinator to offer tracking, everything is now centralized and efficient."
            img="https://i.pravatar.cc/150?img=15"
          />
        </div>
      </div>
    </section>
  );
}
