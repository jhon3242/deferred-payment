

function userMaker() {
	let count = 0;

	return function(asset, startDate, month) {
		console.log(`총 유저 수 ${count++}`);
		return {
			asset,
			startDate,
			month,
		};
	}
}

export {userMaker};