import React from "react";

const Add1x2Units = props => {
	return (
		<div>
			<form onSubmit={props.setUnits1x2}>
				<input
					type="number"
					value={props.units1x2text}
					name="units1x2text"
					onChange={props.handleInputChange}
					autoComplete="off"
					min="1"
					max="250"
				/>
				<button onClick={props.setUnits1x2}>Set</button>
			</form>
		</div>
	);
};

export default Add1x2Units;
