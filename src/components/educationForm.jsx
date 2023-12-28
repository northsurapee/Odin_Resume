/* eslint-disable react/prop-types */
import { useState } from "react";
import InputGroup from "./inputGroup";
import "../styles/form.css";

export default function EducationForm({ initialData, onFormChange }) {
  const [formData, setFormData] = useState(initialData);

  function handleInputChange(e) {
    const { name, value } = e.target;
    // Update local state
    setFormData({ ...formData, [name]: value });
    // Notify parent or other components about the change
    onFormChange({ ...formData, [name]: value });
  }


  return (
    <form className="education-form">
      <InputGroup
        type="text"
        id="school"
        name="school"
        labelText="School"
        placeholder="Enter school / university"
        value={formData.school}
        onChange={handleInputChange}
        data-key="school"
      />
      <InputGroup
        type="text"
        id="degree"
        name="degree"
        labelText="Degree"
        placeholder="Enter degree"
        value={formData.degree}
        onChange={handleInputChange}
        data-key="degree"
      />
      <InputGroup
        type="text"
        id="startDate"
        name="startDate"
        labelText="Start Date"
        placeholder="mm/yyyy"
        value={formData.startDate}
        onChange={handleInputChange}
        data-key="startDate"
      />
      <InputGroup
        type="text"
        id="endDate"
        name="endDate"
        labelText="End Date"
        placeholder="mm/yyyy or present"
        value={formData.endDate}
        onChange={handleInputChange}
        data-key="endDate"
      />
      <InputGroup
        type="text"
        id="location"
        name="location"
        labelText="Location"
        placeholder="City, Country"
        value={formData.location}
        onChange={handleInputChange}
        data-key="location"
      />
    </form>
  );
}

// EducationForm.defaultData = () => {
//     return ({
//         id: uniqid(),
//         school: "",
//         degree: "",
//         startDate: "",
//         endDate: "",
//         location: ""
//     })
// };

// EducationForm.getDisplayText = (formData) => {
//     return formData.school;
// };