import React from 'react';

const BlueBox = ({ gtaNumber }) => {
  return (
    <div className="blue-box">
      <p className="text-center heading">System Alert - Information Window</p>
      <p>** Access to some features is temporarily restricted **</p>
      <p>Unusual activity has been detected. The following data may be affected:</p>
      <p>
        &gt; Email accounts<br />
        &gt; Online accounts<br />
        &gt; Personal files<br />
        &gt; Photos and documents
      </p>
      <p>To protect your data, do not run unknown programs. If you have questions, contact support.</p>
      <p>Closing this page may cause some unsaved information to be lost.</p>
      <div className="contact" style={{ paddingBottom: '0px', color: '#fff', fontSize: '14px' }}>
        <div style={{ marginBottom: '12px' }}>
          Please contact our support team:
        </div>
        <div className="num1">{gtaNumber}</div>
      </div>
      <div className="action_buttons">
        <button type="button" className="active" style={{ cursor: 'pointer', color: '#FFFFFF' }}>
          Allow
        </button>
        <button type="button" className="active" style={{ color: '#FFFFFF' }}>
          Deny
        </button>
      </div>
    </div>
  );
};

export default BlueBox;