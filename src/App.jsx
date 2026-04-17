import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>🚀 DevOps Deployment Project</h1>
        <p>This app is successfully deployed using CI/CD Pipeline</p>

        <div className="box">
          <h3>Tech Stack:</h3>
          <ul>
            <li>⚛️ React Nativ</li>
            <li>📦 Node.js</li>
            <li>🐙 GitHub</li>
            <li>⚙️ GitHub Actions</li>
            <li>🐧 Linux Server</li>
          </ul>
        </div>

        <button className="btn">Deployment Successful ✅</button>
      </div>
    </div>
  );
}