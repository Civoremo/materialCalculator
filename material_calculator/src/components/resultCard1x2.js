import React from "react";

const ResultCard1x2 = props => {
	const { result1x2, result1x2CutList, location } = props;
	// console.log(result1x2);
	console.log("HERE", result1x2CutList);
	if (result1x2CutList[location] === "undefined" || result1x2CutList.length === 0) {
		return <div style={{ marginTop: "10px" }}>Calculating...</div>;
	}
	console.log(
		"DATA AT LOCATION $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ",
		result1x2CutList[location],
		" LOCATION ",
		location
	);
	return (
		<div>
			<div>{result1x2}</div>
			<div>
				{result1x2CutList[location].map((arr, indexCutList) => {
					return (
						<div key={indexCutList}>
							[
							{arr.map((item, index2) => {
								return <span key={index2}>{item}, </span>;
							})}
							]
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ResultCard1x2;
