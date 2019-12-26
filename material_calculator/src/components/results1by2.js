import React from "react";

import ResultCard from "./resultCard1x2";

const Results1x2 = props => {
	const { result1x2, result1x2CutList, waste1x2 } = props;
	console.log("RESULTS ", result1x2CutList);
	console.log("MESSAGE ", result1x2);
	console.log("WASTE ", waste1x2);

	if (result1x2CutList === "undefined" || result1x2CutList.length === 0) {
		return <div style={{ marginTop: "10px" }}>No Results Yet</div>;
	}
	console.log("DATA BEFORE THE LOCATION ++++++++++++++++++", result1x2CutList[0]);
	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			{result1x2.map((item, indexResult) => {
				return (
					<ResultCard
						key={indexResult}
						result1x2={item}
						result1x2CutList={result1x2CutList[0]}
						location={indexResult}
						waste1x2={waste1x2}
					/>
				);
			})}
		</div>
	);
};

export default Results1x2;
