import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const FullScreenBlackPage = ({ gtaNumber, onTimeout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => {
        onTimeout();
      }, 500);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout]);

  return (
    <div className={`full-screen-black-page ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="message-box">
        <p>
          Do not restart or operate this computer.
          This device is locked. Please call the number below.
          Access is restricted for security reasons.
        </p>

        <p>
          A technical support representative will contact you at: <br />
          {gtaNumber}
        </p>
      </div>
    </div>
  );
};

export default FullScreenBlackPage;