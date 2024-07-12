import React from 'react';

function Step1({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label>
          Name <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div>
        <label>
          Email <span className="required-asterisk">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div>
        <label>
          Phone <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="phone"
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>
    </div>
  );
}

export default Step1;
