import React from "react";

const ListOf1x2Cuts = props => {
	const { pieces1x2 } = props;

	if (pieces1x2 === "undefined" || pieces1x2.length === 0) {
		return <div style={{ marginTop: "10px" }}>empty</div>;
	}
	return pieces1x2
		.sort((a, b) => a - b)
		.map((item, index) => {
			return (
				<div key={index} style={{ marginTop: "10px" }}>
					{item} in
				</div>
			);
		});
};

export default ListOf1x2Cuts;
