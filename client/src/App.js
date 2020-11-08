import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SearchPage from "./pages/Search";
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import SavedPage from "./pages/Saved";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Switch>
          <Route exact path = "/" component={SearchPage} />
          <Route exact path = "/saved" component={SavedPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
