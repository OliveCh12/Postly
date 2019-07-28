import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
