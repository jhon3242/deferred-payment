function isNotSameDate(date1, date2) {
	return !(date1.getFullYear() == date2.getFullYear() && 
			date1.getMonth() == date2.getMonth() &&
			date1.getDate() == date2.getDate())
}


function getDateDiff(date1, date2) {
	let start = getCloneDate(date1);
	let end = getCloneDate(date2);
	setDefaultTime(start);
	setDefaultTime(date2);
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


function getCloneDate(date) {
	return new Date(getDateStr(date));
}

function getDateAfter(target, date) {
	let result = getCloneDate(target);
	result.setDate(result.getDate() + date);
	result.setHours(0);
	return result;
}

// /**
//  * 1-31 -> 2-28 - 3-28 로 바뀌여서 이를 해결하기 위한 메서드
//  */
function getAfterOneMonth(tmpDate, target) {
	let newDate = getCloneDate(tmpDate);
	newDate.setMonth(newDate.getMonth() + 1);

	if (target === 29) {
		if (tmpDate.getMonth() === 0) { // newDate 가 2월이여야 하는 경우
			newDate.setDate(0);
		}
	} else if (target === 30) {
		if (tmpDate.getMonth() === 0) { // newDate 가 2월이여야 하는 경우
			newDate.setDate(0);
		} else if (tmpDate.getMonth() === 1) { // tmpDate 가 2월인 경우
			newDate.setDate(30);
		}
	} else if (target === 31) {
		if (tmpDate.getDate() <= 30 || tmpDate.getMonth() == 6 || tmpDate.getMonth() == 11) { // tmpDate 가 28or29or30인 경우 or 7월 , 12인 경우
			newDate.setDate(31);
		}else { // tmpDate 가 31일인 경우
			newDate.setDate(0); 
		}
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

export {getCloneDate, getDateStr, getAfterMonth, setDefaultTime, getDateDiff, getDateAfter, getLastPayDate}