import { useState } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
// import exampleData from "./example-data";
import PersonalForm from "./components/personalForm";
import EducationForm from "./components/educationForm";
import ExperienceForm from "./components/experienceForm";
import Resume from "./components/Resume";
import FormDropdown from "./components/formDropdown";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Surapee Suwan",
    email: "northsurapee@gmail.com",
    phone: "+66 95 146 1000",
    address: "",
  });
  const [educationList, setEducationList] = useState([
    {
      id: uniqid(),
      school: "Chulalongkorn University",
      degree: "Bachelors in Computer Engineering",
      startDate: "08/2020",
      endDate: "08/2024",
      location: "Bangkok, Thailand",
    },
  ]);
  const [expList, setExpList] = useState([
    {
      id: uniqid(),
      companyName: "LINEMAN WONGNAI",
      position: "Full Stack Developer Intern",
      startDate: "06/2023",
      endDate: "08/2023",
      location: "Bangkok, Thailand",
      description:
        "Develop new features for the corporate web using React and contribute to a new product in Dime app using Go",
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
        <PersonalForm onFormChange={handlePersonalFormChange} />
        <FormDropdown 
          formList={educationList}
          formComponent={EducationForm}
          formTitle="Education"
          formIcon="fa-solid fa-graduation-cap"
          onFormChange={handleEducationFormChange}
          displayProp="school"
          formTemplate={{school: "", degree: "", startDate: "", endDate: "", location: ""}}
        />
        <FormDropdown 
          formList={expList}
          formComponent={ExperienceForm}
          formTitle="Experience"
          formIcon="fa-solid fa-briefcase"
          onFormChange={handleExperienceFormChange}
          displayProp="companyName"
          formTemplate={{companyName: "", position: "", startDate: "", endDate: "", location: "", description: "",}}
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

export default App;
