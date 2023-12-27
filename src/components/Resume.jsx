/* eslint-disable react/prop-types */
import PersonalDisplay from "./personalDisplay"
import EducationDisplay from "./educationDisplay"
import "../styles/resume.css"

export default function Resume({personalData, educationList}) {
    return (
        <div className="resume">
            <PersonalDisplay formData={personalData} />
            <div>
                <EducationDisplay formDataList={educationList} />
            </div>
        </div>
    )
}