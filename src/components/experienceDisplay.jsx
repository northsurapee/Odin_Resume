/* eslint-disable react/prop-types */
import "../styles/resume.css";

export default function ExperienceDisplay({ formDataList }) {
  return (
    <div className="experience-info-section resume-section">
      <h3 className="header-text">Professional Experience</h3>
      {formDataList.map((formData) => (
        <div key={formData.id} className="experience-info">
          <div className="experience-info-group">
            <p className="datas">
              {formData.startDate}
              <span> - </span>
              {formData.endDate}
            </p>
            <p>{formData.location}</p>
          </div>
          <div className="experience-info-group">
            <p className="experience-info-companyName">
              {formData.companyName}
            </p>
            <p className="experience-info-positionTitle">{formData.position}</p>
            <p className="experience-info-description">
              {formData.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
