import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header";
import ForecastContainer from "./forecastContainer";

function App() {
  return (
    <div id="ForecastContainer">
      <Header />
      <ForecastContainer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
