import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
