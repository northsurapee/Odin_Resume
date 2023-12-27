import { useState } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
// import exampleData from "./example-data";
import PersonalForm from "./components/personalForm"
import Resume from "./components/Resume"
import EducationDropDown from "./components/educationDropDown"

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Surapee Suwan",
    email: "northsurapee@gmail.com",
    phone: "+66 95 146 1000",
    address: ""
  });
  const [educationList, setEducationList] = useState([{
    id: uniqid(),
    school: "Chulalongkorn University",
    degree: "Bachelors in Computer Engineering",
    startDate: "08/2020",
    endDate: "08/2024",
    location: "Bangkok, Thailand"
}]);
  
  function handlePersonalFormChange(personalFormData) {
    setPersonalInfo(personalFormData);
  }

  function handleEducationFormChange(educationListData) {
    setEducationList(educationListData);
  }

  return (
    <div className="app">
      <div className="menu-container">
        <PersonalForm onFormChange={handlePersonalFormChange}/>
        <EducationDropDown educationList={educationList} onFormChange={handleEducationFormChange}/>
      </div>
      <div className="resume-container">
        <Resume personalData={personalInfo} educationList={educationList}/>
      </div>
    </div>
  );
}

export default App;
