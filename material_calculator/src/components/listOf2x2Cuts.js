import React from "react";

const ListOf2x2Cuts = props => {
	const { pieces2x2 } = props;

	if (pieces2x2 === "undefined" || pieces2x2.length === 0) {
		return <div style={{ marginTop: "10px" }}>empty</div>;
	}
	return pieces2x2
		.sort((a, b) => a - b)
		.map((item, index) => {
			return (
				<div key={index} style={{ marginTop: "10px" }}>
					{item} in
				</div>
			);
		});
};

export default ListOf2x2Cuts;
