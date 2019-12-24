import React from "react";

const ListOf1x2Materials = props => {
	const { material1x2 } = props;
	if (material1x2 === "undefined" || material1x2.length === 0) {
		return <div style={{ marginTop: "10px" }}>empty</div>;
	}
	return (
		<div>
			{material1x2
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

export default ListOf1x2Materials;
