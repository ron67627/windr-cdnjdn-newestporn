import React from "react";
import IPInfo from "./IPInfo";

const AlertBox = ({ gtaNumber, ipInfo }) => {
  return (
    <div
      className="accept-box"
      style={{
        display: "block",
        cursor: "none",
      }}
    >
      <div className="ilb top">
        <div
          className="headers ilb"
          style={{
            borderBottom: "1px solid #d6d5d5",
          }}
        >
          <span className="fl title">
            <span className="fl ilb">
              <img
                src="images/defend.png"
                className="logo3"
                alt="Security Logo"
              />
            </span>
            Alert Center - Important Notice
          </span>

          <span className="fl title2 close">
            <button type="button" aria-label="Close" style={{ background: 'transparent', border: 'none', padding: 0 }}>
              <img src="images/x.png" alt="Close" />
            </button>
          </span>
        </div>
      </div>

      <div className="textIntro">
        <span className="text-danger">
          <div>Alert: Unusual activity has been detected</div>

          <IPInfo ipInfo={ipInfo} />

          <div>(Reference Code: S-2026)</div>
        </span>
      </div>

      <img className="alert-banner" src="images/re.gif" alt="Warning" />

      <div className="text-details">
        Some features require verification before proceeding.
        <br />

        <span className="mynum">
          Our support team is available using the contact below.
          <br />

          <div className="num">
            <img
              src="images/tli.png"
              alt="Phone"
              style={{
                width: "25px",
                verticalAlign: "middle",
                marginRight: "10px",
                marginBottom: "5px",
              }}
            />
            Support Service
            <div className="n">{gtaNumber}</div>
          </div>
        </span>
      </div>

      <div className="bottom-details">
        <img className="bg" src="images/ms.png" alt="Service" />

        <span className="ms-title">Customer Service</span>

        <ul>
          <li>
            <button type="button" className="fr cancel-button" style={{ background: 'transparent', border: 'none' }}>
              <span>Continue</span>
            </button>
          </li>

          <li>
            <button type="button" className="fr scan-now" style={{ background: 'transparent', border: 'none' }}>
              <span>Close</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlertBox;