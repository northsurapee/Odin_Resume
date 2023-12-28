/* eslint-disable react/prop-types */
import PersonalDisplay from "./personalDisplay";
import EducationDisplay from "./educationDisplay";
import ExperienceDisplay from "./experienceDisplay";
import "../styles/resume.css";

export default function Resume({ personalData, educationList, expList }) {
  return (
    <div className="resume">
      <PersonalDisplay formData={personalData} />
      <EducationDisplay formDataList={educationList} />
      <ExperienceDisplay formDataList={expList} />
    </div>
  );
}
