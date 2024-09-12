import React, { useState } from 'react';
import '../styles/MultiStepForm.css';

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert('Form submitted successfully!');
        } else {
          alert('Error submitting form');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form');
      }
    };
  
    const Step1 = () => (
      <div>
        <h2>Step 1: Basic Information</h2>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <button className="Next-button" type="button" onClick={nextStep}>Next</button>
      </div>
    );
  
    const Step2 = () => (
      <div>
        <h2>Step 2: Address Information</h2>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        <button className="Next-button" type="button" onClick={prevStep}>Previous</button>
        <button className="Next-button" type="button" onClick={nextStep}>Next</button>
      </div>
    );
  
    const Step3 = () => (
      <div>
        <h2>Step 3: Review & Submit</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.country}</p>
        <button className="Next-button" type="button" onClick={prevStep}>Previous</button>
        <button className="Next-button" type="submit">Submit</button>
      </div>
    );
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
        </form>
      </div>
    );
  }
  
  export default MultiStepForm;