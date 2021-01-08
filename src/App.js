import React from "react";
import Welcome from "./Welcome";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3> React JS </h3>
      <Welcome name="Q1. What is your first name?" />
      <Welcome name="Q2. What is your family name?" />
      <Welcome name="Q3. How old are you?" />
      <Welcome name="Q4. What is your blood type?" />
      <Welcome name="Q5. What is your major?" />
    </div>
  );
}
