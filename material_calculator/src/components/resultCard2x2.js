import React from "react";

const ResultCard2x2 = props => {
	const { result2x2, result2x2CutList, location, waste2x2 } = props;
	// console.log(result1x2);
	console.log("HERE", result2x2CutList);
	if (result2x2CutList[location] === "undefined" || result2x2CutList.length === 0) {
		return <div style={{ marginTop: "10px" }}>Calculating...</div>;
	}
	console.log(
		"DATA AT LOCATION $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ",
		result2x2CutList[location],
		" LOCATION ",
		location
	);
	return (
		<div>
			<div>{result2x2}</div>
			<div>
				{result2x2CutList[location].map((arr, indexCutList) => {
					return (
						<div
							key={indexCutList}
							style={{ backgroundColor: indexCutList % 2 ? "#fff" : "#e6e6e6" }}
						>
							<span>
								[
								{arr.map((item, index2) => {
									return <span key={index2}>{item}, </span>;
								})}
								]
							</span>
							<span>
								{waste2x2.map((waste, indexWaste) => {
									return (
										<span key={indexWaste} style={{ marginLeft: "20px" }}>
											waste -> {waste[location][indexCutList]}
										</span>
									);
								})}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ResultCard2x2;
