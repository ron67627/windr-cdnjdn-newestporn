import React from 'react';

const Footer = ({ gtaNumber }) => {
  return (
    <div className="page-footer">
      <div className="row">
        <div className="col-md-12">
          <div className="right-foot" style={{ textAlign: 'center' }}>
            <span className="text-font">
              <img src="images/ms.png" alt="Service" /> Windows Security:
            </span>
            <span style={{ fontWeight: 700, paddingLeft: '13px', color: '#fff', fontSize: '18px' }}>
              Microsoft Support
              <span style={{ border: '1px solid #fff', borderRadius: '5px', padding: '2px 5px', fontSize: '18px', marginLeft: '10px' }}>
                {gtaNumber}
              </span>
            </span>
          </div>
        </div>
        <div className="col-md-12">
          <div className="marquee" style={{ width: '100%', height: '100px', overflow: 'hidden' }} aria-hidden="true">
            <small className="text-left" style={{ color: '#eee', fontSize: '10px' }}>
              Unusual activity has been detected. For your safety, avoid running unknown programs and contact support if you have questions.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;