import React from "react";
// import StudentsAvgList from "./avg/StudentsAvgList";
import Calculator from "./calculator/Calculator";
// import Counter from "./Counter/Counter";
// import Welcome from "./WelcomeComp/Welcome";

function App() {

  const students = [

    {
      "studentName": "Firas",
      "avg": 95
    },

    {
      "studentName": "Ahmad",
      "avg": 79
    },

    {
      "studentName": "Hasan",
      "avg": 68
    },
  ]


  return (
    <React.Fragment>
      {/* <Welcome studentName="Farah" /> */}
      {/* <StudentsAvgList students={students} /> */}
      {/* <Counter /> */}
      <Calculator />
    </React.Fragment>
  );
}

export default App;
