import React, { useState } from 'react';
import './App.css';
function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    fatherName: '',
    motherName: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      // Here, you would typically send the form data to the server for processing
      // and handle the success response accordingly.
      setErrors({});
      setSuccessMessage('Registration Successful!');
      // Reset the form after successful registration
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        fatherName: '',
        motherName: '',
      });
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.gender) {
      errors.gender = 'Gender is required';
    }

    if (!data.fatherName.trim()) {
      errors.fatherName = 'Father name is required';
    }

    if (!data.motherName.trim()) {
      errors.motherName = 'Mother name is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='reg'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputt'>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} className='ffn'
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        <br></br>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} className='ln'
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
          <br></br>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange} className='mail'          />
          {errors.email && <span className="error">{errors.email}</span>}
          <br></br>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className='gen'>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
          <br></br>
          <label>Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange} className='fn'
          />
          {errors.fatherName && <span className="error">{errors.fatherName}</span>}
          <br></br>
          <label>Mother's Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
          />
          {errors.motherName && <span className="error">{errors.motherName}</span>}
<br></br>
        <button type="submit">Register</button>
      </div>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
}

export default RegistrationForm;
