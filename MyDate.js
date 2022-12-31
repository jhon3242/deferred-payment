function getCloneDate(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function printDate(date) {
	console.log(date.getFullYear() + "년" + (date.getMonth() + 1) + "월" + date.getDate() + "일");
}



export function MyDate(date = new Date()) {
	this.date = date;
	this.month = date.getMonth();

	/**
	 * month 이후 달의 말일을 구하는 메서드
	 */
	this.getAfterMonthDate = function(month){
		let cloneDate = getCloneDate(this.date);
		cloneDate.setDate(1);	// 1월 31일인 경우 + 1달을 해버리면 2월은 31일이 없어서 3월 31일로 바뀐다. 따라서 모두 1일로 바꿔줌
		cloneDate.setMonth(cloneDate.getMonth() + month + 1); // 0으로 이전 달 말일을 구하기 위해 한 달을 더 더한다.
		cloneDate.setDate(0);
		return cloneDate.getDate();
	}

	// this.getTotalDepositDates = function(month){
	// 	let result = 0;
	// 	for (let count = 1; count <= month; count++) {
	// 		result += getDipositDate(getCloneDate(this.date), count);
	// 	}
	// 	return result;
	// }

// 	this.oneMonthLater() {
// 		let newDate = getCloneDate(this.date);
// 		newDate.
// 		return 
// 	}
}

let tmp = new Date("2022.1.31");
let result = tmp.setMonth(tmp.getMonth() + 1);

// let result = tmp.getTotalDepositDates(12);
console.log(result);