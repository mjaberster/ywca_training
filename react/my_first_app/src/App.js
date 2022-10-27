import React from "react";
import AgendaList from "./agenda/AgendaList";
import StudentsList from "./students/StudentsList";

function App() {
  return (
    <React.Fragment>
      <AgendaList/>
      <StudentsList />
    </React.Fragment>
  );
}

export default App;
