import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://<YOUR-BACKEND-EC2-PUBLIC-IP>:5000/")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Full Stack App Deployed on AWS 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
