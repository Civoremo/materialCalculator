import React from "react";

const ResultCard1x2 = props => {
	const { result1x2, result1x2CutList, location, waste1x2 } = props;
	// console.log(result1x2);
	// console.log("HERE", result1x2CutList);
	if (result1x2CutList[location] === "undefined" || result1x2CutList.length === 0) {
		return <div style={{ marginTop: "10px" }}>Calculating...</div>;
	}
	// console.log(
	// 	"DATA AT LOCATION CARD $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ",
	// 	result1x2CutList[location],
	// 	" LOCATION ",
	// 	location
	// );
	return (
		<div>
			<div style={{ padding: "10px 0 5px 0", borderBottom: "1px solid grey", marginBottom: "5px" }}>
				{result1x2}
			</div>
			<div>
				{result1x2CutList[location].map((arr, indexCutList) => {
					return (
						<div
							key={indexCutList}
							style={{ backgroundColor: indexCutList % 2 ? "#fff" : "#e6e6e6" }}
						>
							<span>
								[
								{arr.map((item, index2) => {
									return (
										<span key={index2}>
											{/* {console.log("Current Item ", item)} */}
											{/* <span>{"("}</span> */}
											<span>{` ${item.label}, `}</span>
											{/* <span>{item.size}</span> */}
											{/* <span>{" ), "}</span> */}
										</span>
									);
								})}
								]
							</span>
							<span>
								{waste1x2.map((waste, indexWaste) => {
									return (
										<span key={indexWaste} style={{ marginLeft: "20px" }}>
											remain -> {waste[location][indexCutList]}
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

export default ResultCard1x2;
