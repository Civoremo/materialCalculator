import React, { Component } from "react";
import "./App.css";

import {
	handleInputChange,
	add1x2Cut,
	add2x2Cut,
	add1x2Material,
	add2x2Material,
	result1x2Posting,
	clearResults1x2,
	calculate1x2,
	result2x2Posting,
	clearResults2x2,
	calculate2x2,
	remove1x2Piece,
} from "./helpers/helperFunctions";

import Add1by2Cut from "./components/add1by2cut";
import Add2by2Cut from "./components/add2by2cut";
import Add1by2Materials from "./components/add1by2MaterialSizes";
import Add2by2Materials from "./components/add2by2MaterialSizes";
import Results1x2 from "./components/results1by2";
import Results2x2 from "./components/results2by2";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// pieces1x2: [3, 3, 5, 8, 11, 14, 14],
			pieces1x2: [98, 98, 134, 48, 48],
			pieces2x2: [98, 98, 134, 48, 48],
			// material1x2: [20, 24, 30],
			material1x2: [240, 288, 360],
			material2x2: [240, 288, 300, 360],
			cut1x2text: "",
			cut2x2text: "",
			length1x2materialText: "",
			length2x2materialText: "",
			result1x2: [],
			result2x2: [],
			result1x2CutList: [],
			result2x2CutList: [],
		};
		this.handleInputChange = handleInputChange.bind(this);
		this.add1x2Cut = add1x2Cut.bind(this);
		this.add1x2Material = add1x2Material.bind(this);
		this.add2x2Cut = add2x2Cut.bind(this);
		this.add2x2Material = add2x2Material.bind(this);
		this.clearResults1x2 = clearResults1x2.bind(this);
		this.result1x2Posting = result1x2Posting.bind(this);
		this.calculate1x2 = calculate1x2.bind(this);
		this.result2x2Posting = result2x2Posting.bind(this);
		this.clearResults2x2 = clearResults2x2.bind(this);
		this.calculate2x2 = calculate2x2.bind(this);
		this.remove1x2Piece = remove1x2Piece.bind(this);
	}

	render() {
		return (
			<div className="App">
				{console.log("OUR ORIGINAL ARR ", this.state.pieces1x2)}
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
							remove1x2Piece={this.remove1x2Piece}
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
				<button onClick={this.clearResults1x2}>Calculate 1x2</button>
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
				<button onClick={this.clearResults2x2}>Calculate 2x2</button>
				<div>
					<Results2x2
						result2x2={this.state.result2x2}
						result2x2CutList={this.state.result2x2CutList}
					/>
				</div>
			</div>
		);
	}
}

export default App;
