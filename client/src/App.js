import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/Search";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SavedPage from "./pages/Saved";
import BookContext from "./context/bookContext";

function App() {
  const [bookContext, setBookContext] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const bookListValue = useMemo(
  //   () => ({
  //     bookContext,
  //     setBookContext,
  //   }),
  //   [bookContext, setBookContext]
  // );

  return (
    <Router>
      <BookContext.Provider value={{bookContext, setBookContext, isLoading, setIsLoading}}>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
          </Switch>
        </div>
      </BookContext.Provider>
    </Router>
  );
}

export default App;
