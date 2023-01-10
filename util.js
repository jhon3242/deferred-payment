import * as Const from "./Constant.js";

function isNotSameDate(date1, date2) {
	let dateA = new Date(date1);
	let dateB = new Date(date2);
	return !(dateA.getFullYear() == dateB.getFullYear() && 
			dateA.getMonth() == dateB.getMonth() &&
			dateA.getDate() == dateB.getDate())
}


function getDateDiff(date1, date2) {
	let start = new Date(date1);
	let end = new Date(date2);
	setDefaultTime(start);
	setDefaultTime(end);
	let result = 0;
	if (start <= end) {
		while (isNotSameDate(start, end)) {
			start.setDate(start.getDate() + 1);
			result++;
			setDefaultTime(start);
		}
	} else {
		while (isNotSameDate(start, end)) {
			end.setDate(end.getDate() + 1);
			result--;
			setDefaultTime(end);
		}
	}
	return result;
}


function getTwoLengthNumStr(num) {
	num = "" + num;
	if (num.length == 1) {
		return "0" + num;
	} else {
		return "" + num;
	}
}

function getDateStr(date) {
	return getTwoLengthNumStr(date.getFullYear()) + "-" + 
			getTwoLengthNumStr(date.getMonth() + 1) + "-" + 
			getTwoLengthNumStr(date.getDate());
}



function getDateAfter(target, date) {
	let result = new Date(target);
	result.setDate(result.getDate() + date);
	result.setHours(0);
	return result;
}

// /**
//  * 1-31 -> 2-28 - 3-28 로 바뀌여서 이를 해결하기 위한 메서드
//  */
function getAfterOneMonth(tmpDate, target) {
	if (target === 29) {
		return handle29(tmpDate);
	} else if (target === 30) {
		return handle30(tmpDate);
	} else if (target === 31) {
		return handle31(tmpDate);
	}
	let newDate = new Date(tmpDate);
	newDate.setMonth(newDate.getMonth() + 1);
	return newDate;
}

function handle29(tmpDate) {
	let newDate = new Date(tmpDate);
	newDate.setMonth(newDate.getMonth() + 1);
	if (tmpDate.getMonth() === Const.JAN) {
		if (newDate.getDate() !== tmpDate.getDate()) { // 이월이 발생한 경우
			newDate.setDate(0);
		}
	}
	return newDate;
}

function handle30(tmpDate) {
	let newDate = new Date(tmpDate);
	newDate.setMonth(newDate.getMonth() + 1);
	if (tmpDate.getMonth() === Const.JAN) {
		newDate.setDate(0);
	}
	if (tmpDate.getMonth() == Const.FEB) {
		newDate.setDate(30);
	}
	return newDate;
}

function handle31(tmpDate) {
	let newDate = new Date(tmpDate);
	newDate.setMonth(newDate.getMonth() + 1);
	if (tmpDate.getDate() <= 30 || tmpDate.getMonth() == Const.JUL 
		|| tmpDate.getMonth() == Const.DEC) { // tmpDate 가 28or29or30인 경우 or 7월 , 12인 경우
		newDate.setDate(31);
	}else { // tmpDate 가 31일인 경우
		newDate.setDate(0); 
	}
	return newDate;
}

function getAfterMonth(date, target, month = 1) {
	let result = getAfterOneMonth(date, target);
	for (let count = 1; count < month; count++) {
		result = getAfterOneMonth(result, target)
	}
	return result;
}

function setDefaultTime(date) {
	date.setHours(0);
	date.setMinutes(0);
	date.setSeconds(0);
}

function getLastPayDate(start, month) {
	return getDateAfter(getAfterMonth(start, start.getDate(), month), -1);
}

export {getDateStr, getAfterMonth, setDefaultTime, getDateDiff, getDateAfter, getLastPayDate}