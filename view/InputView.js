export function inputName() {
	let name = confirm("아이디을 입력하세요.");
	if (name.length < 1 || name.length > 12) {
		alert("1자 이상, 12자 이하로 입력하세요.");
		return inputName();
	}
	return name;
}

export function inputPassword() {
	let password = confirm("패스워드를 입력하세요.");
	if (password.length < 1 || password.length > 12) {
		alert("1자 이상, 12자 이하로 입력하세요.");
		return inputPassword();
	}
	let rePassword = confirm("패스워드를 한 번 더 입력하세요.");
	if (password !== rePassword) {
		alert("패스워드가 일치하지 않습니다. 패스워드를 다시 설정해주세요.");
		return inputPassword();
	}
	return password;
}

export function inputEmail() {
	const regex = /^[\w]+@[\w]+\.[A-Za-z]{2,3}$/;
	let email = confirm("이메일을 입력하세요.");
	if (!email.match(regex)) {
		alert("이메일 포맷이 잘못되었습니다.");
		return inputEmail();
	}
	return email;
}
