/* eslint-disable react/prop-types */
import { useState } from "react";
import uniqid from "uniqid";
import "../styles/dropdown.css";

export default function FormDropdown({
  formList,
  formComponent: FormComponent,
  formTitle,
  formIcon,
  onFormChange,
  displayProp,
  formTemplate
}) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [forms, setForms] = useState(formList);
  const [select, setSelect] = useState(-1);

  function handleToggleDropDown() {
    setOpenDropDown(!openDropDown);
  }

  function handleCreateForm() {
    const newForm = { id: uniqid(), ...formTemplate };
    setForms([...forms, newForm]);
    onFormChange([...forms, newForm]);
    setSelect(newForm.id);
  }

  function handleFormChange(updateObj) {
    const index = forms.findIndex((obj) => obj.id === updateObj.id);
    if (index === -1) return;
    const updatedList = [
      ...forms.slice(0, index),
      updateObj,
      ...forms.slice(index + 1),
    ];
    setForms(updatedList);
    onFormChange(updatedList);
  }

  function handleSelectForm(key) {
    setSelect(key);
  }

  function handleDeleteForm(key) {
    const index = forms.findIndex((obj) => obj.id === key);
    if (index === -1) return;
    const updatedList = [...forms.slice(0, index), ...forms.slice(index + 1)];
    setForms(updatedList);
    onFormChange(updatedList);
    setSelect(-1);
  }

  function handleCloseForm() {
    setSelect(-1);
  }

  return (
    <div className="dropdown">
      <button className="open-dropdown" onClick={handleToggleDropDown}>
        <h2>
          <i className={formIcon}></i>
          {formTitle}
        </h2>
        <i
          className={`fa-solid fa-chevron-up chevron ${
            openDropDown ? "rotate" : ""
          }`}
        ></i>
      </button>
      <div className={`dropdown-content ${openDropDown ? "open" : ""}`}>
        <div className="form-container">
          {forms.map((formData) => (
            <div key={formData.id}>
              {select !== formData.id ? (
                <button
                  className="form-button"
                  onClick={() => handleSelectForm(formData.id)}
                > 
                  {formData[displayProp]}
                </button>
              ) : (
                <>
                  <FormComponent
                    initialData={formData}
                    onFormChange={handleFormChange}
                  />
                  <div className="buttons">
                    <button
                      className="delete"
                      onClick={() => handleDeleteForm(formData.id)}
                    >
                      Delete
                    </button>
                    <button className="save" onClick={() => handleCloseForm()}>
                      Save
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <button className="create-form" onClick={handleCreateForm}>
          <h4>
            <i className="fa-solid fa-plus"></i>
            {formTitle}
          </h4>
        </button>
      </div>
    </div>
  );
}
