import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/Searchbar";
import Header from "./components/Header";
import ResultsList from "./components/ResultsList"
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App container">
      <Navbar />
      <Header />
      <SearchBar />
      <ResultsList />
    </div>
  );
}

export default App;
