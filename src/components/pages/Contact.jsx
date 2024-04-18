import { useState } from "react";

function Contact() {
  //set initial values for form and declare useState
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //declare useState for error messages and set default as false 
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  //define handleBlur function, called in onBlur below
  const handleBlur = (field) => {
    if (field === "name") {
        //if there is not data in the form, then setNameError will be set to true and the error will appear
      setNameError(!formData.name);
    } else if (field === "email") {
      setEmailError(!formData.email);
    }
  };

  //define function to be called as user enters text into form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //logic for handling submit, but we dont need to do this now so it doesn't do anything
  const handleSubmit = (e) => {
    // e.preventDefault();
    // Add form logic here in the future for when I want to send data somewhere
    console.log(formData);
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            //onBlur handles the state change and will eventually display error message if field is empty
            onBlur={() => handleBlur("name")}
            required
          />
          {/* This is the error message that will be displayed */}
          {nameError && <div style={{ color: "red" }}>Name is required</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            required
          />
          {emailError && <div style={{ color: "red" }}>Email is required</div>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
