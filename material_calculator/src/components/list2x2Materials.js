import React from "react";

const ListOf2x2Materials = props => {
	const { material2x2 } = props;
	if (material2x2 === "undefined" || material2x2.length === 0) {
		return <div style={{ marginTop: "10px" }}>empty</div>;
	}
	return (
		<div>
			{material2x2
				.sort((a, b) => a - b)
				.map((item, index) => {
					return (
						<div key={index} style={{ marginTop: "10px" }}>
							{item} in
						</div>
					);
				})}
		</div>
	);
};

export default ListOf2x2Materials;
