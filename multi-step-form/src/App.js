import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import './styles.css';

export function validate(formData, step) {
  let errors = {};

  if (step === 0) {
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Phone is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = 'Phone should contain only numeric digits';
    }
  } else if (step === 1) {
    if (!formData.address1) errors.address1 = 'Address Line 1 is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.zip) {
      errors.zip = 'Zip Code is required';
    } else if (!/^\d+$/.test(formData.zip)) {
      errors.zip = 'Zip Code should only contain numeric digits';
    }
  }

  return errors;
}

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = validate(formData, step);
    if (Object.keys(newErrors).length === 0) {
      setStep(prev => prev + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const handlePrevious = () => {
    setStep(prev => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = validate(formData, step);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted Successfully:', formData);
      alert('Form Submitted Successfully!');
      setStep(0); // Resetting to Step 1 after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">Multi Step Form</h1>
      </div>
      <div className="step-indicator">
        <div className={`circle ${step >= 0 ? 'active' : ''}`}>1</div>
        <div className="line"></div>
        <div className={`circle ${step >= 1 ? 'active' : ''}`}>2</div>
        <div className="line"></div>
        <div className={`circle ${step >= 2 ? 'active' : ''}`}>3</div>
      </div>
      
      <div className="form-container">
        {step === 0 && <Step1 formData={formData} setFormData={setFormData} handleChange={handleChange} errors={errors} />}
        {step === 1 && <Step2 formData={formData} setFormData={setFormData} handleChange={handleChange} errors={errors} />}
        {step === 2 && <Step3 formData={formData} />}

        <div className="navigation-buttons">
          {step > 0 && <button onClick={handlePrevious}>Previous</button>}
          {step < 2 && <button onClick={handleNext}>Next</button>}
          {step === 2 && <button onClick={handleSubmit}>Submit</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
