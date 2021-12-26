import SearchEngine from "./SearchEngine";
import MainWeather from "./MainWeather";
import "./App.css";
import "./SearchEngine.css";
import "./MainWeather.css";

function App() {
  return (
    <div className="App">
      <div className="app-frame">
        <SearchEngine />
        <MainWeather />
      </div>
    </div>
  );
}

export default App;
