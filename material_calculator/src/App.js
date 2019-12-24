import React, { Component } from "react";
import "./App.css";

import Add1by2Cut from "./components/add1by2cut";
import Add2by2Cut from "./components/add2by2cut";
import Add1by2Materials from "./components/add1by2MaterialSizes";
import Add2by2Materials from "./components/add2by2MaterialSizes";
import Results1x2 from "./components/results1by2";

class App extends Component {
	state = {
		pieces1x2: [3, 3, 5, 8, 11, 14, 14],
		pieces2x2: [],
		material1x2: [20, 24, 30],
		material2x2: [],
		used1x2: 0,
		used2x2: 0,
		waste: 0,
		cut1x2text: "",
		cut2x2text: "",
		length1x2materialText: "",
		length2x2materialText: "",
		result1x2: "",
		result2x2: "",
		result1x2CutList: [],
		result2x2CutList: [],
	};

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(event.target.name + ` - ${event.target.value}`);
	};

	add1x2Cut = event => {
		event.preventDefault();
		this.setState({
			// pieces1x2: this.state.pieces1x2.push(parseInt(this.state.cut1x2text)),
			pieces1x2: [...this.state.pieces1x2, parseInt(this.state.cut1x2text)],
		});
	};

	add2x2Cut = event => {
		event.preventDefault();
		this.setState({
			pieces2x2: [...this.state.pieces2x2, parseInt(this.state.cut2x2text)],
		});
	};

	add1x2Material = event => {
		event.preventDefault();
		this.setState({
			material1x2: [...this.state.material1x2, parseInt(this.state.length1x2materialText)],
		});
		console.log(this.state.length1x2materialText);
	};

	add2x2Material = event => {
		event.preventDefault();
		this.setState({
			material2x2: [...this.state.material2x2, parseInt(this.state.length2x2materialText)],
		});
	};

	result1x2Posting = (size, waste, quantity, cuttingList) => {
		this.setState({
			result1x2: `Size of: ${size}in   ||   Quantity: ${quantity}   ||   Waste: ${waste}in`,
			result1x2CutList: cuttingList,
		});
	};

	calculate1x2 = event => {
		let waste = 0;
		let cutsArray = this.state.pieces1x2;
		let materialSize_1 = 0;
		let order = [];
		let cutList = [];

		// for (let z = 0; z < this.state.material1x2.length - 1; z++) {}
		while (cutsArray.length > 0) {
			let currentMaterial = this.state.material1x2[0];
			materialSize_1++;
			// console.log("--- Cuts done on this material: ", order);
			cutList.push({ currentMaterial: order });
			order = [];
			// console.log("NEW material started; count: ", materialSize_1);
			while (currentMaterial > 0 && cutsArray.length > 0) {
				if (cutsArray[cutsArray.length - 1] > currentMaterial) {
					// console.log("");
					// console.log("TOO SHORT");
					for (let i = cutsArray.length - 1; i > -1; i--) {
						// console.log("ENTRY ARR 1: ", cutsArray);
						// console.log("index ", i);
						if (cutsArray[i] <= currentMaterial) {
							// console.log("matrial length: ", currentMaterial);
							// console.log("found: ", cutsArray[i], " at index ", i);
							currentMaterial -= cutsArray[i];
							// console.log("material after cutting: ", currentMaterial);
							// console.log("removed item 1: ", cutsArray[i]);
							order.push(cutsArray[i]);
							cutsArray = cutsArray.slice(0, i).concat(cutsArray.slice(i + 1, cutsArray.length));
							// this.removeItem(cutsArray, i);
							// console.log("array after slice: ", cutsArray);
						}
					}

					waste += currentMaterial;
					// console.log("WASTE 1: ", waste);
					// console.log("Material is to small for any of our cuts");
					break;
				} else {
					// console.log("");
					// console.log("BIG ENOUGH");
					// console.log("ENTRY ARR 2: ", cutsArray);
					// console.log("material length: ", currentMaterial);
					currentMaterial -= cutsArray[cutsArray.length - 1];
					// console.log("material after cutting: ", currentMaterial);
					// console.log("removed item 2: ", cutsArray[cutsArray.length - 1]);
					order.push(cutsArray[cutsArray.length - 1]);
					cutsArray.pop();
					// console.log("array after we cut: ", cutsArray);
				}
			}
			if (cutsArray.length === 0) {
				waste += currentMaterial;
				// console.log("WASTE 2: ", waste);
			}
		}
		// console.log("--- Cuts done on this material: ", order);
		cutList.push({ currentMaterial: order });
		cutList.shift();
		// console.log("LIST FOR CUTTING ", cutList);
		// console.log(
		// 	"pieces needed ",
		// 	materialSize_1,
		// 	` size: ${this.state.material1x2[0]}`,
		// 	" waste created: ",
		// 	waste,
		// 	" remaining cuts: ",
		// 	cutsArray
		// );
		this.result1x2Posting(this.state.material1x2[0], waste, materialSize_1, cutList);
	};

	render() {
		return (
			<div className="App">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						margin: "40px 0",
						border: "1px solid red",
					}}
				>
					<div style={{ width: "45%", float: "left", border: "1px solid green" }}>
						<Add1by2Cut
							cut1x2text={this.state.cut1x2text}
							add1x2Cut={this.add1x2Cut}
							handleInputChange={this.handleInputChange}
							pieces1x2={this.state.pieces1x2}
						/>
					</div>
					<div style={{ width: "45%", float: "right", border: "1px solid green" }}>
						<Add1by2Materials
							material1x2={this.state.material1x2}
							length1x2materialText={this.state.length1x2materialText}
							handleInputChange={this.handleInputChange}
							add1x2Material={this.add1x2Material}
						/>
					</div>
				</div>
				<button onClick={this.calculate1x2}>Calculate 1x2</button>
				<div>
					<Results1x2
						result1x2={this.state.result1x2}
						result1x2CutList={this.state.result1x2CutList}
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						margin: "40px 0",
						border: "1px solid red",
					}}
				>
					<div style={{ width: "45%", float: "left", border: "1px solid blue" }}>
						<Add2by2Cut
							cut2x2text={this.state.cut2x2text}
							add2x2Cut={this.add2x2Cut}
							handleInputChange={this.handleInputChange}
							pieces2x2={this.state.pieces2x2}
						/>
					</div>
					<div style={{ width: "45%", float: "right", border: "1px solid blue" }}>
						<Add2by2Materials
							material2x2={this.state.material2x2}
							length2x2materialText={this.state.length2x2materialText}
							handleInputChange={this.handleInputChange}
							add2x2Material={this.add2x2Material}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
