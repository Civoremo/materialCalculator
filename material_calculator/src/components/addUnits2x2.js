import React from "react";

const Add2x2Units = props => {
	return (
		<div>
			<div>Number of Units</div>
			<form onSubmit={props.setUnits2x2}>
				<input
					type="number"
					value={props.units2x2text}
					name="units2x2text"
					onChange={props.handleInputChange}
					autoComplete="off"
					min="1"
					max="250"
				/>
				<button onClick={props.setUnits2x2}>Set</button>
			</form>
		</div>
	);
};

export default Add2x2Units;
