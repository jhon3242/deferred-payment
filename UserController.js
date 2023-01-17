import * as InputView from "./view/InputView";
import {User} from "./domain/User"

function init() {
	let reposiotry = new Map();
	let id = 0;

	function makeUser(asset, startDate, month) {
		if (makeUser.length == 3) {
			let obj = {asset, startDate, month};
			reposiotry.set(id++, obj);
			return obj;
		} else {
			throw new Error("Invalid format");
		}
		
	}

	return makeUser;
}

function makeAccount() {
	let user = new User(InputView.inputName(),
		InputView.inputPassword(),
		InputView.inputEmail()
	)
}