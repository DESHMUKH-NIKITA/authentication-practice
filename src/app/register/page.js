'use client';

import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    full_name: '',
    last_name: '',
    age: '',
    aadhar_number: '',
    pan_number: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="container mt-5">
      <h2>Loan Application Registration</h2>
      {message && <div className="alert alert-info">{message}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="full_name" value={formData.full_name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Aadhar Number</label>
          <input type="text" className="form-control" name="aadhar_number" value={formData.aadhar_number} onChange={handleChange} required maxLength="12" />
        </div>

        <div className="mb-3">
          <label className="form-label">PAN Number</label>
          <input type="text" className="form-control" name="pan_number" value={formData.pan_number} onChange={handleChange} required maxLength="10" />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
