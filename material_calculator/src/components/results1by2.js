import React from "react";

const Results1x2 = props => {
	const { result1x2, result1x2CutList } = props;
	console.log("RESULTS ", result1x2CutList);
	console.log("MESSAGE ", result1x2);

	if (result1x2CutList === "undefined" || result1x2CutList.length === 0) {
		return <div style={{ marginTop: "10px" }}>No Results Yet</div>;
	}
	return (
		<div>
			{/* <div>{result1x2[0]}</div>
			{result1x2CutList.map((obj, index) => {
				console.log("OBJECT array ", obj);
				console.log("each item ", obj.currentMaterial);
				return (
					<div key={index} style={{ marginTop: "10px" }}>
						[
						{obj.currentMaterial.map((num, index) => {
							return <span key={index}>{` ${num}, `}</span>;
						})}
						]
					</div>
				);
			})} */}
		</div>
	);
};

export default Results1x2;
