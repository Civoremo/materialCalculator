import React from "react";
import { CSVLink } from "react-csv";

const SaveFToCSV = props => {
	const {
		formatResultForSaving,
		saveFilename,
		// handleInputChange,
		formatedArr,
		resultIndex,
	} = props;
	return (
		<div>
			{/* <input
				type="text"
				required
				placeholder="filename"
				name="saveFilename"
				value={saveFilename}
				onChange={e => {
					handleInputChange({
						target: {
							name: e.target.name,
							value: e.target.value,
						},
					});
				}}
			/> */}
			{/* <button onClick={() => formatResultForSaving(resultIndex)}>save</button> */}
			<div>
				<CSVLink
					filename={saveFilename + ".csv"}
					data={formatedArr}
					onClick={event => {
						formatResultForSaving(resultIndex);
						console.log("finished");
						// return false;
					}}
				>
					Download Results
				</CSVLink>
			</div>
		</div>
	);
};

export default SaveFToCSV;
