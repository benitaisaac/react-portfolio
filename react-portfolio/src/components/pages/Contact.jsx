import { useState } from "react";

function Contact() {
    //set initial values for form and declare useState
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    
    //define function to be called as user enters text into form 
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    
    //logic for handling submit, but we dont need to do this now
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
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
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
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