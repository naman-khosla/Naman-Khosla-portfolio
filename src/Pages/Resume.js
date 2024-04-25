import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume_shell">
      <div className="resume_left_container">
        <div className="resume_heading_image">
          <img
            src="/images/assets/resume_heading.svg"
            className="text_resume_image"
            alt="RESUME"
          />
        </div>
        <div className="resume_text">
          <p>
            As a data analytics student with a strong foundation in Python, SQL,
            and machine learning, I bring a blend of technical expertise and
            analytical acumen to the table. My experience in developing
            AI-powered classifiers and leveraging data mining techniques for
            healthcare insights demonstrates my ability to translate complex
            data into actionable insights. I am well-organized, proactive, and
            committed to delivering accurate and efficient support to
            stakeholders. With excellent verbal communication skills, I excel at
            building rapport and conveying intricate information clearly. My
            work is characterized by a high degree of integrity and a strong
            commitment to exceeding professional expectations.
          </p>
        </div>
      </div>

      <div className="resume_right_container">
        <div className="profile_text">
          <h1>Data Analyst</h1>
        </div>
      </div>
    </div>
  );
}
