import React from "react";

const ListOf1x2Materials = props => {
	const { material1x2, remove1x2Material } = props;
	if (material1x2 === "undefined" || material1x2.length === 0) {
		return <div style={{ marginTop: "10px" }}>empty</div>;
	}
	return (
		<div style={{ width: "60%", margin: "auto" }}>
			{material1x2
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
								onClick={() => remove1x2Material(index)}
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

export default ListOf1x2Materials;
