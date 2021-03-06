import React from "react";

const ListOf1x2Cuts = props => {
	const { pieces1x2ArrObj, remove1x2Piece } = props;

	if (pieces1x2ArrObj === "undefined" || pieces1x2ArrObj.length === 0) {
		return <div style={{ marginTop: "10px" }}>list is empty</div>;
	}

	return (
		<div style={{ width: "60%", margin: "auto" }}>
			{pieces1x2ArrObj
				.sort((a, b) => (a.label > b.label ? 1 : -1))
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
							<span>
								{item.label}
								<span>{" - "}</span>
							</span>
							<span>{item.size}</span>
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
				})}
		</div>
	);
};

export default ListOf1x2Cuts;
