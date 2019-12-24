import React from "react";

import ListOf1x2Cuts from "./listOf1x2Cuts";

const Add1by2Cut = props => {
	const { pieces1x2 } = props;
	return (
		<div>
			<div>
				<form>
					<div>Add 1x2 piece to cut</div>
					<input
						type="text"
						value={props.cut1x2text}
						name="cut1x2text"
						onChange={props.handleInputChange}
					/>
				</form>
				<button onClick={props.add1x2Cut}>Add</button>
			</div>
			<ListOf1x2Cuts pieces1x2={pieces1x2} />
		</div>
	);
};

export default Add1by2Cut;
