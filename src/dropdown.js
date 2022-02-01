import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import dataLocations from "./weatherLocations";

function DropdownOption({ handleSelect, location }) {
	return (
		<div className='App container'>
			<DropdownButton
				id='dropdown-button-dark-example2'
				variant='secondary'
				menuVariant='dark'
				title={dataLocations[location][1]}
				className='mt-2'
				onSelect={handleSelect}>
				<Dropdown.Item eventKey='Phoenix'>Phoenix</Dropdown.Item>
				<Dropdown.Item eventKey='LA'>LA</Dropdown.Item>
				<Dropdown.Item eventKey='LasVegas'>Las Vegas</Dropdown.Item>
				<Dropdown.Item eventKey='Paris'>Paris</Dropdown.Item>
				<Dropdown.Item eventKey='London'>London</Dropdown.Item>
				<Dropdown.Item eventKey='NewYork'>New York</Dropdown.Item>
			</DropdownButton>
		</div>
	);
}

export default DropdownOption;
