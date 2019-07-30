import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Provide a commun state to all components
import { UserProvider } from "./components/Builder/UserContext";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Welcome/Home";
import Builder from "./components/Builder/Builder";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Header />
          <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/builder" component={Builder} />
          </div>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;
