import React from "react";

import ListOf1x2Cuts from "./listOf1x2Cuts";

const Add1by2Cut = props => {
	const { pieces1x2ArrObj, remove1x2Piece } = props;
	return (
		<div>
			<div style={{ padding: "10px 0" }}>
				<form onSubmit={props.add1x2Cut}>
					{/* <div>Add 1x2 piece to cut</div> */}
					<div style={{ margin: "20px 0", fontWeight: "bold" }}>Add piece to cut</div>
					<input
						type="text"
						placeholder="label"
						required
						value={props.cut1x2label}
						name="cut1x2label"
						onChange={props.handleInputChange}
						autoComplete="off"
						style={{ width: "50px", height: "30px", marginRight: "20px", padding: "0 5px" }}
					/>
					<input
						type="number"
						placeholder="measurement in inches"
						required
						value={props.cut1x2text}
						name="cut1x2text"
						onChange={props.handleInputChange}
						autoComplete="off"
						style={{ width: "100px", height: "30px", marginRight: "20px", padding: "0 5px" }}
					/>
					<button onClick={props.add1x2Cut}>Add</button>
				</form>
			</div>
			<ListOf1x2Cuts remove1x2Piece={remove1x2Piece} pieces1x2ArrObj={pieces1x2ArrObj} />
		</div>
	);
};

export default Add1by2Cut;
