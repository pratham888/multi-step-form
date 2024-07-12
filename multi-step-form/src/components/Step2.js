import React from 'react';

function Step2({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <div>
        <label>
          Address Line 1 <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="address1"
          placeholder='Address1'
          value={formData.address1}
          onChange={handleChange}
        />
        {errors.address1 && <p className="error-message">{errors.address1}</p>}
      </div>
      <div>
        <label>Address Line 2</label>
        <input
          type="text"
          name="address2"
          placeholder='Address2'
          value={formData.address2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          City <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="city"
          placeholder='City'
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error-message">{errors.city}</p>}
      </div>
      <div>
        <label>
          State <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="state"
          placeholder='State'
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <p className="error-message">{errors.state}</p>}
      </div>
      <div>
        <label>
          Zip Code <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="zip"
          placeholder='Zip Code'
          value={formData.zip}
          onChange={handleChange}
        />
        {errors.zip && <p className="error-message">{errors.zip}</p>}
      </div>
    </div>
  );
}

export default Step2;
