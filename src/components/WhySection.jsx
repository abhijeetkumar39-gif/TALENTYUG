import React from 'react'
import "./WhySection.css";
import Images from "../assets";



export default function WhySection(){
  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-title">Why Placements Fail In Tier 2/3 Colleges</h2>
        <p className="why-sub">A Broken System Hurting All Three Stakeholders</p>

        <div className="why-cards">

  {/* Colleges */}
  <div
    className="why-card bg-card"
    style={{ backgroundImage: `url(${Images.college})` }}
  >
    <div className="card-heading">
      <img src={Images.college_icon} alt="Colleges" className="why-icon" />
      <h3>Colleges</h3>
    </div>
    <ul>
      <li>Manual Placement Processes</li>
      <li>Excel & WhatsApp Dependency</li>
      <li>No Centralized Tracking</li>
    </ul>
  </div>

  {/* Companies */}
  <div
    className="why-card bg-card"
    style={{ backgroundImage: `url(${Images.company})` }}
  >
    <div className="card-heading">
      <img src={Images.company_icon} alt="Companies" className="why-icon" />
      <h3>Companies</h3>
    </div>
    <ul>
      <li>Limited Hiring Visibility</li>
      <li>Weak College Coordination</li>
      <li>Unstructured Candidate Data</li>
    </ul>
  </div>

  {/* Students */}
  <div
    className="why-card bg-card"
    style={{ backgroundImage: `url(${Images.student})` }}
  >
    <div className="card-heading">
      <img src={Images.student_icon} alt="Students" className="why-icon" />
      <h3>Students</h3>
    </div>
    <ul>
      <li>50% Unemployed Post-Graduation</li>
      <li>No Structured Preparation</li>
      <li>Missed Opportunities</li>
    </ul>
  </div>

</div>

        <div className="why-feature">
          <div className="why-feature-text">
            <h2>TalentYug – The Missing Infrastructure Layer</h2>
            <p className="why-sub">A Structure end to end ecosystem for Placements</p>
            <p>
              TalentYug Is Built As The Missing Placement Infrastructure 
              That Brings Structure, Transparency, And Efficiency To 
              Tier 2/3 College Hiring. By Centralizing Company Connections,
               Streamlining Coordination, And Enabling Data-Driven Decision-Making, 
               It Replaces Fragmented Manual Processes With A Single, Reliable System.
                The Platform Ensures Smoother Placement Drives, Better Hiring Visibility,
                 And Outcome-Focused Execution For Colleges, Companies, And Students Alike.
            </p>
          </div>

          <div className="why-feature-media">
            <img src={Images.why_infographic} alt="TalentYug diagram" />
          </div>
        </div>
      </div>
    </section>
  )
}
