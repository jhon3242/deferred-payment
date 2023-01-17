export function initRepository() {
	let reposiotry = new Map();
	let id = 0;

	return {
		getAccountById(id) {
			reposiotry.get(id);
		},

		addAccount(acc) {
			reposiotry.set(id++, acc);
		}
	}
}