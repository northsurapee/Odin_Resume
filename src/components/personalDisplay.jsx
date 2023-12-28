/* eslint-disable react/prop-types */
import "../styles/resume.css";

export default function PersonalDisplay({ formData }) {
  return (
    <div className="personal-info">
      <h1 className="resume-name">{formData.fullName}</h1>
      <div className="contact-info">
        {formData.email && (
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span>{formData.email}</span>
          </div>
        )}

        {formData.phone && (
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>{formData.phone}</span>
          </div>
        )}

        {formData.address && (
          <div>
            <i className="fa-solid fa-location-dot" />
            <span>{formData.address}</span>
          </div>
        )}
      </div>
    </div>
  );
}
