import React from "react";

const ListOf2x2Cuts = props => {
	const { pieces2x2, remove2x2Piece } = props;

	if (pieces2x2 === "undefined" || pieces2x2.length === 0) {
		return <div style={{ marginTop: "10px" }}>empty</div>;
	}
	return pieces2x2
		.sort((a, b) => a - b)
		.map((item, index) => {
			return (
				<div
					key={index}
					style={{
						// marginTop: "10px",
						padding: "5px 0",
						display: "flex",
						justifyContent: "center",
						// borderBottom: "1px dotted grey",
						backgroundColor: index % 2 === 0 ? "#fff" : "#e6e6e6",
					}}
				>
					<span>{item} in</span>
					<button
						onClick={() => remove2x2Piece(index)}
						style={{ marginLeft: "30px", cursor: "hand" }}
					>
						-
					</button>
				</div>
			);
		});
};

export default ListOf2x2Cuts;
