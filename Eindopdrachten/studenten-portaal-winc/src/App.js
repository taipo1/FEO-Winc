import React from "react";
import "./App.css";
import studentsData from "./studentData.js";
import MainChart from "./Components/Chart";

console.log(studentsData);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <MainChart />
      </header>
    </div>
  );
}

export default App;
