import React from "react";
import StudentsAvgList from "./avg/StudentsAvgList";
import Stock from "./stock/Stock";
import Welcome from "./WelcomeComp/Welcome";

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
      <Welcome studentName="Farah"/>
      <StudentsAvgList students={students} />
    </React.Fragment>
  );
}

export default App;
