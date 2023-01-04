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
	// console.log("" + start);
	// console.log("" + date2);
	let result = 0;
	while (isNotSameDate(start, end)) {
		start.setDate(start.getDate() + 1);
		result++;
		setDefaultTime(start);
	}
	return result;
	// const diffDate = date1.getTime() - date2.getTime();
	// return Math.ceil(Math.abs(diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
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

/**
 * 인수 날짜로 부터 month 달 이후의 날짜를 구하는 함수
 * 해당달에 일치하는 일이 없는 경우(예, 1월31일의 한 달 뒤가 2월 31일 인 경우)에는 말일을 리턴 (2월 28일 or 2월29일)
 */
function getAfterMonth(date, month) {
	let newDate = getCloneDate(date);
	newDate.setMonth(newDate.getMonth() + month);
	if (newDate.getDate() != date.getDate()) {
		newDate.setDate(0);
	}
	newDate.setHours(0) // (2022/10/15 , 1) 입력 시 00/00/00 UTC 에서 09/00/00 UTC 로 변하는 경우가 있음 
	return newDate;
}

/**
 * 1-31 -> 2-28 - 3-28 로 바뀌여서 이를 해결하기 위한 메서드
 */
function handleSpecDate(tmpDate, target) {
	let newDate = getCloneDate(tmpDate);
	newDate.setMonth(newDate.getMonth() + 1);

	if (target == 29) {
		if (tmpDate.getMonth() == 0) { // newDate 가 2월인 경우
			newDate.setDate(0);
		}
	} else if (target == 30) {
		if (tmpDate.getDate() < 30) { // tmpDate 가 2월인 경우
			newDate.setDate(30);
		} else { // tmpDate 가 31일인 경우
			newDate.setDate(0); 
		} 
	} else if (target == 31) {
		if (tmpDate.getDate() <= 30) { // tmpDate 가 28or29or30인 경우 
			newDate.setDate(31);
		} else { // tmpDate 가 31일인 경우
			newDate.setDate(0); 
		}
	}
	return newDate;
}

function setDefaultTime(date) {
	date.setHours(0);
	date.setMinutes(0);
	date.setSeconds(0);
}

function getBeforeDate(target, date) {
	let result = getCloneDate(target);
	for (let i = 0; i < date; i++) {
		result.setDate(result.getDate() - 1);
	}
	return result;
}


export {getDateDiff, getDateStr, getCloneDate, getAfterMonth, setDefaultTime, getBeforeDate, handleSpecDate}