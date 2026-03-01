import React from "react";
import "./Features.css";
import Images from "../assets";

function Card({ icon, title, points, button }) {
  return (
    <div className="info-card">
      <img src={icon} alt={title} className="card-icon" />

      <h4>{title}</h4>

      <ul className="card-points">
        {points.map((p, i) => (
          <li key={i}>– {p}</li>
        ))}
      </ul>

      <button className="card-btn">{button}</button>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features">
      <h2 className="section-title">See How TalentYug Works</h2>

      <div className="features-grid">
        <Card
          icon={Images.folder}
          title="AI-Powered Campus Hiring, Simplified."
          points={[
            "Upload Company Requirements",
            "AI Matches Students To Roles",
            "Track Placements Via Dashboard",
            "Get Real-Time Analytics",
          ]}
          button="For Colleges"
        />

        <Card
          icon={Images.stat}
          title="Hire Smarter, Faster From Campuses."
          points={[
            "Post Job Requirements In Template",
            "Receive Curated Student Pool",
            "Conduct Interviews Via Platform",
            "Manage Offers & Acceptance",
          ]}
          button="For Companies"
        />

        <Card
          icon={Images.user}
          title="Prepare, Apply, Get Hired."
          points={[
            "Discover Relevant Opportunities",
            "Apply To Role-Matched Jobs",
            "Access Mock Interview Prep",
            "Track Application Status",
          ]}
          button="For Students"
        />
      </div>

      <h2 className="section-title bottom">
        Select Your Role To Explore
      </h2>
    </section>
  );
}
