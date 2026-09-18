import React, { useEffect } from 'react';

const WelcomeModal = ({ show, onClose, gtaNumber }) => {
  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        // User exited fullscreen mode, close the modal
        onClose();
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('MSFullscreenChange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
    };
  }, [onClose]);

  if (!show) return null;

  return (
    <div 
      className="answer_list" 
      style={{
        display: 'block',
        backgroundColor: '#000',
        height: 'auto',
        width: '550px',
        left: '32%',
        position: 'absolute',
        zIndex: '9999999999999999999',
        border: '1px solid transparent',
        borderColor: '#d6d8db',
        borderRadius: '.5rem'
      }}
    >
      <p style={{ color: '#fff', marginTop: '10px', fontSize: '16px', padding: '0 5px' }} className="text-center">
        Unusual activity has been detected on your computer. For assistance, contact our team.
        <br />
        <strong>
          Contact customer support: <br />
          <span style={{ border: '1px solid #383d41', borderRadius: '5px', padding: '6px 5px' }}>
            <img src="images/tli.png" alt="Phone" style={{ width: '25px', verticalAlign: 'bottom' }} />
            Call directly: {gtaNumber}
          </span>
        </strong>
      </p>
    </div>
  );
};

export default WelcomeModal;