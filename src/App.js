import SearchEngine from "./SearchEngine";
import MainWeather from "./MainWeather";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}

export default App;
