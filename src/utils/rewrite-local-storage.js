export const rewriteLocalStorage = (progress) => {
	const timestamp = Date.now();
	const existingDataString = localStorage.getItem('results');
	const existingData = existingDataString ? JSON.parse(existingDataString) : [];

	const newDataObject = {
		timestamp: timestamp,
		progress: progress,
	};

	existingData.push(newDataObject);

	const updatedDataString = JSON.stringify(existingData);

	localStorage.setItem('results', updatedDataString);
};
