import React from "react";

const ListOf1x2Cuts = props => {
	const { pieces1x2, labels1x2, pieces1x2ArrObj, remove1x2Piece } = props;

	if (pieces1x2 === "undefined" || pieces1x2.length === 0) {
		return <div style={{ marginTop: "10px" }}>empty</div>;
	}

	// const sortedLabels = labels1x2.sort();
	let sortedCutPieces = [...pieces1x2];
	sortedCutPieces = sortedCutPieces.sort((a, b) => a - b);
	// console.log(sortedLabels);
	// console.log(sortedCutPieces);
	return (
		<div>
			{/* {pieces1x2
				// .sort((a, b) => a - b)
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
							<span>{labels1x2[index]}</span>
							<span style={{ width: "70px" }}>{item} in</span>
							<button
								onClick={() => {
									remove1x2Piece(index);
								}}
								style={{ marginLeft: "30px", cursor: "hand" }}
							>
								-
							</button>
						</div>
					);
				})} */}
			{pieces1x2ArrObj
				.sort((a, b) => (a.size > b.size ? 1 : -1))
				.map((item, index) => {
					return (
						<div key={index}>
							<span>
								{item.label}
								<span>{" - "}</span>
							</span>
							<span>{item.size}</span>
						</div>
					);
				})}
		</div>
	);
};

export default ListOf1x2Cuts;
