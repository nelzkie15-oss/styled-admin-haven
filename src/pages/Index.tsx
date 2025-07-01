
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to admin dashboard
  return <Navigate to="/admin" replace />;
};

export default Index;
