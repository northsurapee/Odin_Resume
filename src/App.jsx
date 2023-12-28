import { useState } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import PersonalForm from "./components/personalForm";
import EducationForm from "./components/educationForm";
import ExperienceForm from "./components/experienceForm";
import Resume from "./components/Resume";
import FormDropdown from "./components/formDropdown";
import DownloadResume from "./components/downloadResume";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Surapee Suwan",
    email: "northsurapee@gmail.com",
    phone: "+66 95 146 1000",
    address: "Bangkok, Thailand",
  });

  const [educationList, setEducationList] = useState([
    {
      id: uniqid(),
      school: "Chulalongkorn University",
      degree: "Bachelors in Computer Engineering (GPAX: 3.60)",
      startDate: "06/2021",
      endDate: "present",
      location: "Bangkok, Thailand",
    },
    {
      id: uniqid(),
      school: "Princess Chulabhorn Science High School Chiang Rai",
      degree: "Mathematics=Science Program (GPAX: 3.93)",
      startDate: "05/2016",
      endDate: "05/2021",
      location: "Chiang Rai, Thailand",
    },
  ]);

  const [expList, setExpList] = useState([
    {
      id: "1a2b3c4d5e6f",
      companyName: "Tech Innovators Ltd.",
      position: "Software Engineering Intern",
      startDate: "07/2023",
      endDate: "09/2023",
      location: "San Francisco, USA",
      description:
        "Collaborated on the development of a cutting-edge mobile application, focusing on front-end enhancements using React Native and backend improvements using Node.js.",
    },
    {
      id: "6f5e4d3c2b1a",
      companyName: "Data Dynamics Solutions",
      position: "Data Science Intern",
      startDate: "06/2023",
      endDate: "08/2023",
      location: "Berlin, Germany",
      description:
        "Engaged in data analysis and machine learning projects, contributing to the enhancement of predictive models. Utilized Python, TensorFlow, and scikit-learn to extract insights from large datasets.",
    },
  ]);

  function handlePersonalFormChange(personalFormData) {
    setPersonalInfo(personalFormData);
  }

  function handleEducationFormChange(educationListData) {
    setEducationList(educationListData);
  }

  function handleExperienceFormChange(expListData) {
    setExpList(expListData);
  }

  return (
    <div className="app">
      <div className="menu-container">
        <DownloadResume />
        <PersonalForm
          initialData={personalInfo}
          onFormChange={handlePersonalFormChange}
        />
        <FormDropdown
          formList={educationList}
          formComponent={EducationForm}
          formTitle="Education"
          formIcon="fa-solid fa-graduation-cap"
          onFormChange={handleEducationFormChange}
          displayProp="school"
          formTemplate={{
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
          }}
        />
        <FormDropdown
          formList={expList}
          formComponent={ExperienceForm}
          formTitle="Experience"
          formIcon="fa-solid fa-briefcase"
          onFormChange={handleExperienceFormChange}
          displayProp="companyName"
          formTemplate={{
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
          }}
        />
      </div>
      <div className="resume-container">
        <Resume
          personalData={personalInfo}
          educationList={educationList}
          expList={expList}
        />
      </div>
    </div>
  );
}
