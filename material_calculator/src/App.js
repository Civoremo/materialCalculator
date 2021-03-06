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
	setUnits1x2,
	setUnits2x2,
	remove1x2Material,
	remove2x2Piece,
	remove2x2Material,
	formatResultForSaving,
} from "./helpers/helperFunctions";

import Add1by2Cut from "./components/add1by2cut";
import Add2by2Cut from "./components/add2by2cut";
import Add1by2Materials from "./components/add1by2MaterialSizes";
import Add2by2Materials from "./components/add2by2MaterialSizes";
import Results1x2 from "./components/results1by2";
import Results2x2 from "./components/results2by2";
import Add1x2Units from "./components/addUnits1x2";
import Add2x2Units from "./components/addUnits2x2";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pieces1x2ArrObj: [
				{ label: "C", size: 98 },
				{ label: "D", size: 98 },
				{ label: "A", size: 134 },
				{ label: "F", size: 48 },
				{ label: "E", size: 48 },
			],
			pieces2x2: [98, 98, 134, 48, 48],
			// material1x2: [20, 24, 30],
			material1x2: [240, 200, 288, 420, 360],
			material2x2: [240, 288, 360],
			cut1x2text: "",
			cut1x2label: "",
			cut2x2text: "",
			length1x2materialText: "",
			length2x2materialText: "",
			result1x2: [],
			result2x2: [],
			result1x2CutList: [],
			result2x2CutList: [],
			waste1x2: [],
			waste2x2: [],
			units1x2text: 1,
			units1x2: 1,
			units2x2text: 1,
			units2x2: 1,
			resultLabel: true,
			resultMeasurement: false,
			saveFilename: "",
			formatedArr: [],
		};
		this.handleInputChange = handleInputChange.bind(this);
		this.formatResultForSaving = formatResultForSaving.bind(this);
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
		this.setUnits1x2 = setUnits1x2.bind(this);
		this.setUnits2x2 = setUnits2x2.bind(this);
		this.remove1x2Material = remove1x2Material.bind(this);
		this.remove2x2Piece = remove2x2Piece.bind(this);
		this.remove2x2Material = remove2x2Material.bind(this);
	}

	render() {
		return (
			<div className="App">
				{/* {console.log("OUR ORIGINAL ARR ", this.state.pieces1x2)} */}
				<div style={{ margin: "20px 0", fontWeight: "bold", fontSize: "1.6rem" }}>
					Optimal Material Calculator
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						margin: "40px auto",
						border: "2px solid grey",
						borderRadius: "10px",
						width: "90%",
					}}
				>
					<div style={{ width: "40%", float: "left", marginBottom: "40px" }}>
						<Add1by2Cut
							cut1x2text={this.state.cut1x2text}
							cut1x2label={this.state.cut1x2label}
							pieces1x2ArrObj={this.state.pieces1x2ArrObj}
							add1x2Cut={this.add1x2Cut}
							handleInputChange={this.handleInputChange}
							remove1x2Piece={this.remove1x2Piece}
						/>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							borderLeft: "1px solid grey",
							borderRight: "1px solid grey",
							padding: "0 20px",
						}}
					>
						<div>
							<Add1x2Units
								handleInputChange={this.handleInputChange}
								units1x2text={this.state.units1x2text}
								setUnits1x2={this.setUnits1x2}
							/>
						</div>
					</div>
					<div style={{ width: "40%", float: "right" }}>
						<Add1by2Materials
							material1x2={this.state.material1x2}
							length1x2materialText={this.state.length1x2materialText}
							handleInputChange={this.handleInputChange}
							add1x2Material={this.add1x2Material}
							remove1x2Material={this.remove1x2Material}
						/>
					</div>
				</div>
				<div>Units: {this.state.units1x2}</div>
				{/* <button onClick={this.clearResults1x2}>Calculate 1x2</button> */}
				<div
					style={{
						// width: "250px",
						display: "flex",
						justifyContent: "center",
						margin: "auto",
					}}
				>
					<div style={{ display: "flex" }}>
						<input
							type="checkbox"
							name="resultLabel"
							checked={this.state.resultLabel}
							// onClick={this.changeResultFormat}
							onChange={e => {
								this.handleInputChange({
									target: {
										name: e.target.name,
										value: e.target.checked,
									},
								});
							}}
						/>
						<div>
							<span>Label</span>
						</div>
					</div>
					<div style={{ marginLeft: "20px", display: "flex" }}>
						<input
							type="checkbox"
							name="resultMeasurement"
							checked={this.state.resultMeasurement}
							// onClick={this.changeResultFormat}
							onChange={e => {
								this.handleInputChange({
									target: {
										name: e.target.name,
										value: e.target.checked,
									},
								});
							}}
						/>
						<div>
							<span>Measurement</span>
						</div>
					</div>
					{/* {console.log("our current checkbox ", this.state.resultLabel)} */}
				</div>
				<button onClick={this.clearResults1x2}>Calculate</button>
				<div>
					<Results1x2
						result1x2={this.state.result1x2}
						result1x2CutList={this.state.result1x2CutList}
						waste1x2={this.state.waste1x2}
						resultLabel={this.state.resultLabel}
						resultMeasurement={this.state.resultMeasurement}
						formatResultForSaving={this.formatResultForSaving}
						saveFilename={this.state.saveFilename}
						handleInputChange={this.handleInputChange}
						formatedArr={this.state.formatedArr}
					/>
				</div>
				{/* <div>
					<SaveFToCSV
						formatResultForSaving={this.formatResultForSaving}
						saveFilename={this.state.saveFilename}
						handleInputChange={this.handleInputChange}
						formatedArr={this.state.formatedArr}
					/>
				</div> */}
				{/* <div
					style={{
						display: "flex",
						justifyContent: "space-between",
						margin: "40px auto",
						border: "2px solid grey",
						borderRadius: "10px",
						width: "90%",
					}}
				>
					<div style={{ width: "40%", float: "left" }}>
						<Add2by2Cut
							cut2x2text={this.state.cut2x2text}
							add2x2Cut={this.add2x2Cut}
							handleInputChange={this.handleInputChange}
							pieces2x2={this.state.pieces2x2}
							remove2x2Piece={this.remove2x2Piece}
						/>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							borderLeft: "1px solid grey",
							borderRight: "1px solid grey",
							padding: "0 20px",
						}}
					>
						<div>
							<Add2x2Units
								handleInputChange={this.handleInputChange}
								units2x2text={this.state.units2x2text}
								setUnits2x2={this.setUnits2x2}
							/>
						</div>
					</div>
					<div style={{ width: "40%", float: "right" }}>
						<Add2by2Materials
							material2x2={this.state.material2x2}
							length2x2materialText={this.state.length2x2materialText}
							handleInputChange={this.handleInputChange}
							add2x2Material={this.add2x2Material}
							remove2x2Material={this.remove2x2Material}
						/>
					</div>
				</div>
				<div>Units: {this.state.units2x2}</div>
				<button onClick={this.clearResults2x2}>Calculate 2x2</button>
				<div>
					<Results2x2
						result2x2={this.state.result2x2}
						result2x2CutList={this.state.result2x2CutList}
						waste2x2={this.state.waste2x2}
					/>
				</div> */}
			</div>
		);
	}
}

export default App;
