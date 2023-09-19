import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnterPage = () => {
  const navigate = useNavigate();

  const redirectToHomepage = () => {
    navigate('.App.js'); 
  };

  return (
    <div className="enter-page">
      <h1>Welcome to My Website</h1>
      <button onClick={redirectToHomepage}>Enter</button>
    </div>
  );
};

export default EnterPage;
