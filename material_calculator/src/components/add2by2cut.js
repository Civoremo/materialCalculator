import React from "react";

import ListOf2x2Cuts from "./listOf2x2Cuts";

const Add2by2Cut = props => {
	const { pieces2x2, remove2x2Piece } = props;
	return (
		<div>
			<div style={{ padding: "10px 0" }}>
				<form onSubmit={props.add2x2Cut}>
					<div>Add 2x2 piece to cut</div>
					<input
						type="text"
						value={props.cut2x2text}
						name="cut2x2text"
						onChange={props.handleInputChange}
						autoComplete="off"
					/>
					<button onClick={props.add2x2Cut}>Add</button>
				</form>
			</div>
			<ListOf2x2Cuts pieces2x2={pieces2x2} remove2x2Piece={remove2x2Piece} />
		</div>
	);
};

export default Add2by2Cut;
