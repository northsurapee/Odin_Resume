/* eslint-disable react/prop-types */
import PersonalDisplay from "./personalDisplay"
import "../styles/resume.css"

export default function Resume({personalData}) {
    return (
        <div className="resume">
            <PersonalDisplay formData={personalData} />
        </div>
    )
}