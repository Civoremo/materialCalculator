import React from "react";

import ListOf1x2Materials from "./list1x2Materials";
import { remove1x2Piece } from "../helpers/helperFunctions";

const Add1by2Materials = props => {
	const {
		material1x2,
		length1x2materialText,
		handleInputChange,
		add1x2Material,
		remove1x2Material,
	} = props;
	return (
		<div>
			<div style={{ padding: "10px 0" }}>
				<form onSubmit={add1x2Material}>
					<div>Add 1x2 material size</div>
					<input
						text="text"
						value={length1x2materialText}
						name="length1x2materialText"
						onChange={handleInputChange}
						autoComplete="off"
					/>
					<button onClick={add1x2Material}>Add</button>
				</form>
			</div>
			<ListOf1x2Materials material1x2={material1x2} remove1x2Material={remove1x2Material} />
		</div>
	);
};

export default Add1by2Materials;
