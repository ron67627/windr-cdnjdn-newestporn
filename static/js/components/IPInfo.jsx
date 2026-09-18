import React, { useState, useEffect } from "react";

const IPInfo = ({ ipInfo }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {

    const updateTime = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleString("en-US", {
          timeZone: "America/New_York",
          dateStyle: "full",
          timeStyle: "medium",
        })
      );
    };


    updateTime();

    const interval = setInterval(updateTime, 1000);


    return () => clearInterval(interval);

  }, []);



  if (!ipInfo) {
    return (
      <div>
        Loading information...
      </div>
    );
  }



  return (
    <div
      style={{
        lineHeight: "1.8",
      }}
    >

      <div id="ip_Ddda">
        IP Address: <strong>{ipInfo.ip || "Unknown"}</strong>
      </div>

      <div>
        Current Time: <strong>{currentTime}</strong>
      </div>

      <div id="cityopm">
        City: <strong>{ipInfo.city || "Unknown"}</strong>,{" "}
        <strong>{ipInfo.country || "USA"}</strong>
      </div>

      <div id="isp">
        Internet Provider: {" "}
        <strong>{ipInfo.isp || "Unknown"}</strong>
      </div>


    </div>
  );
};


export default IPInfo;