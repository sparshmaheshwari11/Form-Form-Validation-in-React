// FormDetails.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function FormDetails() {
  const { state } = useLocation();
  const { formData } = state;

  return (
    <div>
      <h2>Submitted Details</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNo}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>PAN Number: {formData.panNo}</p>
      <p>Aadhar Number: {formData.aadharNo}</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default FormDetails;
