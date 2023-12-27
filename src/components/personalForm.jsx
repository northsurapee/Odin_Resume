/* eslint-disable react/prop-types */
import {useState} from 'react';
import InputGroup from './inputGroup';
import "../styles/form.css"

export default function PersonalForm({onFormChange}) {
    const [formData, setFormData] = useState({
        fullName: "Surapee Suwan",
        email: "northsurapee@gmail.com",
        phone: "+66 95 146 1000",
        address: ""
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        // Update local state
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        // Notify parent or other components about the change
        onFormChange((prevData) => ({ ...prevData, [name]: value }));
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
                data-key="fullName"
            />
            <InputGroup
                type="email"
                id="email"
                name="email"
                labelText="Email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                data-key="email"
                recommended
            />
            <InputGroup
                type="tel"
                id="phone-number"
                name="phone"
                labelText="Phone Number"
                placeholder="+66 00 000 000"
                value={formData.phone}
                onChange={handleInputChange}
                data-key="phoneNumber"
                recommended
            />
            <InputGroup
                type="text"
                id="address"
                name="address"
                labelText="Address"
                placeholder="City, Country"
                value={formData.address}
                onChange={handleInputChange}
                data-key="address"
                recommended
            />
        </form>
    );
}