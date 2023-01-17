import * as InputView from "./view/InputView.js";
import {User} from "./domain/User.js"
import {initAccount} from "./repository/AccountRepository.js";


function getNewUser() {
	return new User(InputView.inputName(),
		InputView.inputPassword(),
		InputView.inputEmail()
	)
}
