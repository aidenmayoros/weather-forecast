import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header";
import ForecastContainer from "./forecastContainer";
import Dropdown from "./dropdown";
import { useState } from "react";

function App() {
	const [value, setValue] = useState("Phoenix");
	const handleSelect = (e) => {
		setValue(e);
	};

	return (
		<div id='ForecastContainer'>
			<Header location={value} />
			<Dropdown handleSelect={handleSelect} location={value} />
			<ForecastContainer location={value} />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
