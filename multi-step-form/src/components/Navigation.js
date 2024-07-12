import React from 'react';
import './styles.css';

const Navigation = ({ step, setStep, handleSubmit, validate }) => {
  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  return (
    <div className="navigation-container">
      {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
      {step < 3 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Navigation;
