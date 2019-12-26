import React from "react";

import ListOf1x2Cuts from "./listOf1x2Cuts";

const Add1by2Cut = props => {
	const { pieces1x2, remove1x2Piece } = props;
	return (
		<div>
			<div style={{ padding: "10px 0" }}>
				<form onSubmit={props.add1x2Cut}>
					{/* <div>Add 1x2 piece to cut</div> */}
					<div>Add piece to cut</div>
					<input
						type="number"
						value={props.cut1x2text}
						name="cut1x2text"
						onChange={props.handleInputChange}
						autoComplete="off"
					/>
					<button onClick={props.add1x2Cut}>Add</button>
				</form>
			</div>
			<ListOf1x2Cuts pieces1x2={pieces1x2} remove1x2Piece={remove1x2Piece} />
		</div>
	);
};

export default Add1by2Cut;
