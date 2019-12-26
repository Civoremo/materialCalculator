import React from "react";

import ListOf2x2Materials from "./list2x2Materials";

const Add2by2Materials = props => {
	const { material2x2, length2x2materialText, handleInputChange, add2x2Material } = props;
	return (
		<div>
			<div>
				<form onSubmit={add2x2Material}>
					<div>Add 2x2 material size</div>
					<input
						text="text"
						value={length2x2materialText}
						name="length2x2materialText"
						onChange={handleInputChange}
						autoComplete="off"
					/>
				</form>
				<button onClick={add2x2Material}>Add</button>
			</div>
			<ListOf2x2Materials material2x2={material2x2} />
		</div>
	);
};

export default Add2by2Materials;
