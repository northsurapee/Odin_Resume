/* eslint-disable react/prop-types */
import { useState } from "react";
import InputGroup from "./inputGroup";
import "../styles/form.css";

export default function PersonalForm({ initialData, onFormChange }) {
  const [formData, setFormData] = useState(initialData);

  function handleInputChange(e) {
    const { name, value } = e.target;
    // Update local state
    setFormData({ ...formData, [name]: value });
    // Notify parent about the change
    onFormChange({ ...formData, [name]: value });
  }

  return (
    <form className="personal-form">
      <h2>Personal Details</h2>
      <InputGroup
        type="text"
        id="full-name"
        name="fullName"
        labelText="Full Name"
        placeholder="First and last name"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <InputGroup
        type="email"
        id="email"
        name="email"
        labelText="Email"
        placeholder="email@example.com"
        value={formData.email}
        onChange={handleInputChange}
      />
      <InputGroup
        type="tel"
        id="phone-number"
        name="phone"
        labelText="Phone Number"
        placeholder="+66 00 000 000"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <InputGroup
        type="text"
        id="address"
        name="address"
        labelText="Address"
        placeholder="City, Country"
        value={formData.address}
        onChange={handleInputChange}
        optional
      />
    </form>
  );
}
