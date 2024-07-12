import React from 'react';

function Step3({ formData }) {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <h3>Personal Information</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <h3>Address Information</h3>
      <p>Address Line 1: {formData.address1}</p>
      <p>Address Line 2: {formData.address2}</p>
      <p>City: {formData.city}</p>
      <p>State: {formData.state}</p>
      <p>Zip Code: {formData.zip}</p>
    </div>
  );
}

export default Step3;
