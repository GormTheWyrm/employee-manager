import React from "react";

import "./App.css";
import Header from "./components/Header"
import Directory from "./pages/Directory"
// import OptionsTab from "./components/OptionsTab";

function App() {
  return (
    <div className={"container-lg main-background"}>
      {/* bootsap needs testing - does multiple classes work? */}

      <Header />
      <Directory />

    </div>
  );
}

export default App;
