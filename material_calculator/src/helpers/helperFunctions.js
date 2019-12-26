export const handleInputChange = function handleInputChange(event) {
	this.setState({
		[event.target.name]: event.target.value,
	});
	// console.log(event.target.name + ` - ${event.target.value}`);
};

export const setUnits1x2 = function setUnits1x2(event) {
	event.preventDefault();
	this.setState({
		units1x2: this.state.units1x2text,
	});
};

export const setUnits2x2 = function setUnits2x2(event) {
	event.preventDefault();
	this.setState({
		units2x2: this.state.units2x2text,
	});
};

export const add1x2Cut = function add1x2Cut(event) {
	event.preventDefault();
	this.setState({
		pieces1x2: [...this.state.pieces1x2, parseInt(this.state.cut1x2text)],
		cut1x2text: "",
	});
};

export const remove1x2Piece = function remove1x2Piece(itemIndex) {
	let temp = this.state.pieces1x2.sort((a, b) => a - b);
	temp = temp.slice(0, itemIndex).concat(temp.slice(itemIndex + 1, temp.length));
	this.setState({
		pieces1x2: temp,
	});
};

export const add2x2Cut = function add2x2Cut(event) {
	event.preventDefault();
	this.setState({
		pieces2x2: [...this.state.pieces2x2, parseInt(this.state.cut2x2text)],
		cut2x2text: "",
	});
};

export const remove2x2Piece = function remove2x2Piece(itemIndex) {
	let temp = this.state.pieces2x2.sort((a, b) => a - b);
	temp = temp.slice(0, itemIndex).concat(temp.slice(itemIndex + 1, temp.length));
	this.setState({
		pieces2x2: temp,
	});
};

export const add1x2Material = function add1x2Material(event) {
	event.preventDefault();
	this.setState({
		material1x2: [...this.state.material1x2, parseInt(this.state.length1x2materialText)],
		length1x2materialText: "",
	});
};

export const remove1x2Material = function(itemIndex) {
	let temp = this.state.material1x2.sort((a, b) => a - b);
	temp = temp.slice(0, itemIndex).concat(temp.slice(itemIndex + 1, temp.length));
	this.setState({
		material1x2: temp,
	});
};

export const add2x2Material = function add2x2Material(event) {
	event.preventDefault();
	this.setState({
		material2x2: [...this.state.material2x2, parseInt(this.state.length2x2materialText)],
		length2x2materialText: "",
	});
};

export const remove2x2Material = function remove2x2Material(itemIndex) {
	let temp = this.state.material2x2.sort((a, b) => a - b);
	temp = temp.slice(0, itemIndex).concat(temp.slice(itemIndex + 1, temp.length));
	this.setState({
		material2x2: temp,
	});
};

export function result1x2Posting(result, cuttingList, waste) {
	// console.log("MESSAGE FOR THIS MATERIAL", cuttingList);
	this.setState({
		result1x2: [...this.state.result1x2, ...result],
		result1x2CutList: [...this.state.result1x2CutList, cuttingList],
		waste1x2: [...this.state.waste1x2, waste],
	});
	// console.log("UPDATED MESSAGE ", this.state.result1x2CutList);
}

export function result2x2Posting(result, cuttingList, waste) {
	// console.log("MESSAGE FOR THIS MATERIAL", cuttingList);
	this.setState({
		result2x2: [...this.state.result2x2, ...result],
		result2x2CutList: [...this.state.result2x2CutList, cuttingList],
		waste2x2: [...this.state.waste2x2, waste],
	});
	// console.log("UPDATED MESSAGE ", this.state.result1x2CutList);
}

export const clearResults1x2 = function clearResults1x2(event) {
	event.preventDefault();
	const emptyArr = [];
	this.setState(
		{
			result1x2: emptyArr,
			result1x2CutList: emptyArr,
			waste1x2: emptyArr,
		},
		() => this.calculate1x2()
	);
};

export const clearResults2x2 = function clearResults2x2(event) {
	event.preventDefault();
	const emptyArr = [];
	this.setState(
		{
			result2x2: emptyArr,
			result2x2CutList: emptyArr,
			waste2x2: emptyArr,
		},
		() => this.calculate2x2()
	);
};

export const calculate2x2 = function(event) {
	let waste = 0;
	// let cutsArray = [...this.state.pieces2x2];
	let cutsArray = [];
	let materialCount = 0;
	let order = [];
	let cutList = [];
	let currentMaterial = 0;
	let resultMessage = [];
	let fullCutsArray = [];
	let wasteArray = [];

	for (let y = 0; y < this.state.material2x2.length; y++) {
		cutList.push([]);
		resultMessage.push([]);
		wasteArray.push([]);
	}

	for (let h = 0; h < this.state.units2x2; h++) {
		cutsArray = cutsArray.concat(...this.state.pieces2x2);
	}

	fullCutsArray = [...cutsArray];

	for (let z = 0; z < this.state.material2x2.length; z++) {
		waste = 0;
		// cutsArray = [...this.state.pieces2x2];
		cutsArray = [...fullCutsArray];
		materialCount = 0;
		order = [];
		currentMaterial = this.state.material2x2[z];
		cutsArray = cutsArray.sort((a, b) => a - b);

		while (cutsArray.length > 0) {
			currentMaterial = this.state.material2x2[z];
			materialCount++;
			cutList[z].push(order);
			order = [];
			while (currentMaterial > 0 && cutsArray.length > 0) {
				if (cutsArray[cutsArray.length - 1] > currentMaterial) {
					for (let i = cutsArray.length - 1; i >= 0; i--) {
						if (cutsArray[i] <= currentMaterial) {
							currentMaterial -= cutsArray[i];
							order.push(cutsArray[i]);
							cutsArray = cutsArray.slice(0, i).concat(cutsArray.slice(i + 1, cutsArray.length));
						}
					}

					waste += currentMaterial;
					break;
				} else {
					currentMaterial -= cutsArray[cutsArray.length - 1];
					order.push(cutsArray[cutsArray.length - 1]);
					cutsArray.pop();
				}
			}
			if (cutsArray.length === 0) {
				waste += currentMaterial;
			}
			wasteArray[z].push(currentMaterial);
		}
		cutList[z].push(order);
		cutList[z].shift();
		resultMessage[z].push(
			`Size of: ${this.state.material2x2[z]}in   ||   Quantity: ${materialCount}   ||   Waste: ${waste}in`
		);
		this.result2x2Posting(resultMessage, cutList, wasteArray);
	}
};

export const calculate1x2 = function(event) {
	let waste = 0;
	// let cutsArray = [...this.state.pieces1x2];
	let cutsArray = [];
	let materialCount = 0;
	let order = [];
	let cutList = [];
	let currentMaterial = 0;
	let resultMessage = [];
	let fullCutsArray = [];
	let wasteArray = [];

	for (let y = 0; y < this.state.material1x2.length; y++) {
		cutList.push([]);
		resultMessage.push([]);
		wasteArray.push([]);
	}

	for (let h = 0; h < this.state.units1x2; h++) {
		cutsArray = cutsArray.concat(...this.state.pieces1x2);
	}

	fullCutsArray = [...cutsArray];

	for (let z = 0; z < this.state.material1x2.length; z++) {
		waste = 0;
		// cutsArray = [...this.state.pieces1x2];
		cutsArray = [...fullCutsArray];
		materialCount = 0;
		order = [];
		currentMaterial = this.state.material1x2[z];
		cutsArray = cutsArray.sort((a, b) => a - b);

		// console.log("");
		// console.log("-------------------------");
		// console.log("NEW MATERIAL SIZE START");
		// console.log("length", this.state.material1x2.length, " z is ", z);
		// console.log("NEW Cutlist ", cutList);
		// console.log("Outcome ", this.state.result1x2);
		// console.log("ORIGINAL ARR ", this.state.pieces1x2);
		// console.log(
		// 	"Number of Material Needed: ",
		// 	materialCount,
		// 	" | Pieces to Cut Needed: ",
		// 	cutsArray,
		// 	" | Wasted Material:  ",
		// 	waste,
		// 	" | Material Size: ",
		// 	this.state.material1x2[z]
		// );
		// console.log("");
		// console.log("-------------------------");
		// console.log("");

		while (cutsArray.length > 0) {
			// console.log("*********    LOOKING AT ARRAY    **************** ", this.state.pieces1x2);
			currentMaterial = this.state.material1x2[z];
			materialCount++;
			// console.log("--- Cuts made on this material: ", order);
			cutList[z].push(order);
			order = [];
			// console.log("NEW material started; count: ", materialCount);
			while (currentMaterial > 0 && cutsArray.length > 0) {
				if (cutsArray[cutsArray.length - 1] > currentMaterial) {
					// console.log("");
					// console.log("TOO SHORT");
					for (let i = cutsArray.length - 1; i >= 0; i--) {
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
			wasteArray[z].push(currentMaterial);
		}
		// console.log("");
		// console.log("");
		// console.log(`Material Length ${this.state.material1x2[z]} COMPLETE`);
		// console.log("PIECES ARR ", this.state.pieces1x2);
		// console.log("");
		// console.log("--- Cuts made on this material: ", order);
		cutList[z].push(order);
		cutList[z].shift();
		// console.log("LIST FOR CUTTING ", cutList);
		// console.log(
		// 	"pieces needed ",
		// 	materialCount,
		// 	` size: ${this.state.material1x2[z]}`,
		// 	" waste created: ",
		// 	waste,
		// 	" remaining cuts: ",
		// 	cutsArray
		// );
		resultMessage[z].push(
			`Size of: ${this.state.material1x2[z]}in   ||   Quantity: ${materialCount}   ||   Waste: ${waste}in`
		);
		this.result1x2Posting(resultMessage, cutList, wasteArray);
	}
};
