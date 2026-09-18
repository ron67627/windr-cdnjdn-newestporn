import "../styles/ChatBox.css";

const ChatBox = ({ gtaNumber }) => {
  return (
    <div
      id="chat"
      style={{
        display: "block",
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <img
          src="./images/ms.png"
          alt="Service"
          style={{
            width: "45px",
            height: "45px",
            objectFit: "contain",
          }}
        />

        <span
          style={{
            color: "#1a1a1a",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Support Service
        </span>
      </div>

      <p
        style={{
          marginTop: "20px",
          color: "#333",
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        Technical Support
      </p>

      <h4
        style={{
          color: "#0067b8",
          fontSize: "26px",
          fontWeight: 700,
          margin: "15px 0",
        }}
      >
        {gtaNumber}

        <br />

        <span
          style={{
            fontSize: "15px",
            color: "#666",
            fontWeight: 400,
          }}
        >
          Available
        </span>
      </h4>

      <div className="daisy">
        <svg
          height="1em"
          viewBox="0 0 320 512"
          style={{
            fill: "#fff",
          }}
        >
          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
        </svg>
      </div>
    </div>
  );
};

export default ChatBox;