import { useState } from "react";
import "./styles/App.css";
// import exampleData from "./example-data";
import PersonalForm from "./components/personalForm"
import Resume from "./components/Resume"

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Surapee Suwan",
    email: "northsurapee@gmail.com",
    phone: "+66 95 146 1000",
    address: ""
  });


  function handlePersonalFormChange(personalFormData) {
    setPersonalInfo(personalFormData);
  }

  return (
    <div className="app">
      <div className="form-container">
        <PersonalForm onFormChange={handlePersonalFormChange}/>
      </div>
      <div className="resume-container">
        <Resume personalData={personalInfo}/>
      </div>
    </div>
  );
}

export default App;
