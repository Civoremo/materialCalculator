import React from "react";

const ListOf2x2Materials = props => {
	const { material2x2, remove2x2Material } = props;
	if (material2x2 === "undefined" || material2x2.length === 0) {
		return <div style={{ marginTop: "10px" }}>empty</div>;
	}
	return (
		<div>
			{material2x2
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
								onClick={() => remove2x2Material(index)}
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

export default ListOf2x2Materials;
