import React, { useState } from 'react';
import './help.css'

const HelpSupportModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can implement your support form submission logic here.
    // For this example, we'll just log the form data.
    console.log('Form Data:', formData);

    // Clear the form and hide the modal
    setFormData({ name: '', email: '', message: '' });
    handleCloseModal();
  };

  return (
    <div className="mainb">
      <h1>Welcome to My RealEstate</h1>
      <button onClick={handleShowModal}> Help/Support?</button>
      {showModal && (
        <div id="helpModal">
          <h2>Help/Support</h2>
          <p>If you need assistance, please fill out the form below:</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea><br />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleCloseModal}>Close</button>
          </form>
        </div>
      )}
      <div>
      
    <body>
      
    </body>

      </div>
    </div>
  );
};

export default HelpSupportModal;
