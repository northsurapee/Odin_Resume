/* eslint-disable react/prop-types */
import { useState } from "react";
import InputGroup from "./inputGroup";
import "../styles/form.css";

export default function ExperienceForm({ initialData, onFormChange }) {
  const [formData, setFormData] = useState(initialData);

  function handleInputChange(e) {
    const { name, value } = e.target;
    // Update local state
    setFormData({ ...formData, [name]: value });
    // Notify parent or other components about the change
    onFormChange({ ...formData, [name]: value });
  }

//   ExperienceForm.defaultData = () => {
//     return ({id: uniqid(), companyName: "", position: "", startDate: "", endDate: "", location: "", description: "",});
//   }

//   ExperienceForm.getDisplayText = (formData) => {
//     return (formData.companyName);
//   }

  return (
    <form className="experience-form">
      <InputGroup
        type="text"
        id="companyName"
        name="companyName"
        labelText="Company Name"
        placeholder="Enter company"
        value={formData.companyName}
        onChange={handleInputChange}
        data-key="companyName"
      />
      <InputGroup
        type="text"
        id="position"
        name="position"
        labelText="Position"
        placeholder="Enter position"
        value={formData.position}
        onChange={handleInputChange}
        data-key="position"
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
      <InputGroup
        type="textarea"
        id="description"
        name="description"
        labelText="Description"
        placeholder="Enter description"
        value={formData.description}
        onChange={handleInputChange}
        data-key="description"
        optional
      />
    </form>
  );
}


