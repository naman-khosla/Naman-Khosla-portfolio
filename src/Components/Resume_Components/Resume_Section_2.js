// import React from "react";
// import "./Resume_Section_2.css";

// export default function Resume_Section_3() {
//   return (
//     <div className="section_3_shell">
//       <div className="heading_container"></div>
//       <div className="content_container">
//         <div className="container_1">
//           <div className="container_1.1"></div>
//         </div>
//         <div className="container_2">
//           <div className="container_2.1"></div>
//         </div>
//         <div className="container_3">
//           <div className="container_3.1"></div>
//         </div>
//         <div className="container_4">
//           <div className="container_4.1"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./Resume_Section_2.css"; // Make sure to import your CSS file

const ResumeSection = () => {
  return (
    <div className="resume_section_2">
      <h1 className="resume_section_heading">PROFESSIONAL EXPERIENCE</h1>
      <div className="experience_container">
        {/* Experience 1 */}
        <div className="experience_card">
          <div className="experience_detail">
            <h2>Bent Chair, Delhi</h2>
            <p>Brand Marketing and Data Analytics Intern</p>
            <span>April 2020 - May 2020</span>
            <ul>
              <li>
                Analyzed SEO outreach goals and presented findings to marketing
                director
              </li>
              <li>
                Conducted consumer surveys and gathered data on purchasing
                habits for use in branding efforts
              </li>
              <li>Analysed new age marketing concepts and techniques</li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="experience_card">
          <div className="experience_detail">
            <h2>Great Learning, Delhi</h2>
            <p>Business Development Manager</p>
            <span>July 2021 - December 2021</span>
            <ul>
              <li>
                Successfully closed leads and generated revenue worth $211,000
                in 5 months, 130% above monthly target
              </li>
              <li>
                Identified over 200 business opportunities with potential
                clients for generating new revenue and improving bottom line
                profit.
              </li>
            </ul>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="experience_card">
          <div className="experience_detail">
            <h2>SOL Education, Brisbane</h2>
            <p>Education Counsellor</p>
            <span>July 2022 - November 2022</span>
            <ul>
              <li>
                Provide educational counselling and support services to onshore
                international students
              </li>
              <li>
                Create and maintain accurate client information in the company's
                CRM system.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
