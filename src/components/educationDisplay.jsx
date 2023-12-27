/* eslint-disable react/prop-types */
import "../styles/resume.css";

export default function EducationDisplay({formDataList}) {
    return (
        <div className="education-info-section resume-section">
            <h3 className="header-text">Education</h3>
            {formDataList.map((formData) => (
                <div key={formData.id} className="education-info">
                    <div className="education-info-group">
                        <p className="datas">
                            {formData.startDate}
                            <span> - </span>
                            {formData.endDate}
                        </p>
                        <p>{formData.location}</p>
                    </div>
                    <div className="education-info-group">
                        <p className="education-info-schoolName">{formData.school}</p>
                        <p className="education-info-degree">{formData.degree}</p>
                    </div>
                </div>
            ))}
        </div>

    );
}

// const newForm = {
//     id: uniqid(),
//     school: "",
//     degree: "",
//     startDate: "",
//     endDate: "",
//     location: ""
// };