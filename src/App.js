import React from "react";
import Header from "components/Header";
import TaskHandler from "containers/TaskHandler";

const App = () => {
  return (
    <section className="App">
      <Header />
      <TaskHandler />
    </section>
  );
};

export default App;
