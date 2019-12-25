import React from "react";

import ResultCard from "./resultCard2x2";

const Results2x2 = props => {
	const { result2x2, result2x2CutList } = props;
	console.log("RESULTS ", result2x2CutList);
	console.log("MESSAGE ", result2x2);

	if (result2x2CutList === "undefined" || result2x2CutList.length === 0) {
		return <div style={{ marginTop: "10px" }}>No Results Yet</div>;
	}
	console.log("DATA BEFORE THE LOCATION ++++++++++++++++++", result2x2CutList[0]);
	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			{result2x2.map((item, indexResult) => {
				return (
					<ResultCard
						key={indexResult}
						result2x2={item}
						result2x2CutList={result2x2CutList[0]}
						location={indexResult}
					/>
				);
			})}
		</div>
	);
};

export default Results2x2;
