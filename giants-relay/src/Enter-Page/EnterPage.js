import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnterPage = () => {
  const navigate = useNavigate();

  const redirectToBody = () => {
    navigate('/Body'); 
  };

  return (
    <div className="enter-page">
      <h1>Welcome to My Website</h1>
      <button onClick={redirectToBody}>Enter</button>
    </div>
  );
};

export default EnterPage;
