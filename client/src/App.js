import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/Search";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SavedPage from "./pages/Saved";
import BookContext from "./context/bookContext";


function App() {

  const [ bookContext, setBookContext ] = useState({});
  const bookListValue = useMemo(() => ({
    bookContext, setBookContext
  }),
    [bookContext, setBookContext]
  );

  return (
    <BookContext.Provider value={bookListValue}>
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
          </Switch>
        </div>
      </Router>
    </BookContext.Provider>
  );
}

export default App;
