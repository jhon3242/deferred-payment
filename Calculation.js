import * as Util from "./Util.js"

function getFirstPayment(asset, month = 36) {
	return (asset / 2);
}

function getLastPayment(asset, month = 36) {
	return asset * ((month / 2) - 1) / month;
}

function getMidPayment(asset, month = 36) {
	return asset / month;
}

/**
 * 중간 납부 날짜를 구하는 함수
 */
function getMidDate(start = new Date(), month = 36) {
	let endDate = Util.getAfterMonth(start, month);
	let midDateDiff = getMidValue(month, start); // 마지막 일로부터 며칠 전에 납부해야하는지
	console.log("month : " + month);
	console.log("start : " + start);
	// console.log("마지막날" + endDate);
	console.log("며칠 전 ? " + midDateDiff);
	return Util.getBeforeDate(endDate, midDateDiff);
}

// 557
// let startDate = new Date("2026-05-30");
// let endDate = Util.getAfterMonth(startDate, 36);
// let a = Util.getDateDiff(startDate, endDate);
// console.log("" + getInstallmentValue(36, startDate));
// let before = Util.getBeforeDate(endDate, 365*2 + 1);
// console.log("" + before);

/**
 * 적금 수지 - 첫 달 6/12 - 마지막 달 5/12
 */
function getMidValue(month, start) {
	let year = month / 12;
	let value = getInstallmentValue(month, start);
	let a = - 6 * year * Util.getDateDiff(start, Util.getAfterMonth(start, month));
	let b = - 5 * year * 1;
	console.log("value " + value);
	console.log("a " + a);
	console.log("b " + b);
	return getInstallmentValue(month, start) 
	- 6 * year * Util.getDateDiff(start, Util.getAfterMonth(start, month)) 
	- 5 * year * 1;
}

/**
 * 적금 시 총 수지 (만기누적지수)
 */
function getInstallmentValue(month = 36, start = new Date()) {
	let count = -1;
	let result = 0;
	let tmpDate = Util.getCloneDate(start);
	let endDate = Util.getAfterMonth(start, month);
	let target = start.getDate();
	
	while (++count < month) {
		result += Util.getDateDiff(tmpDate, endDate);
		// console.log("dif " + Util.getDateDiff(tmpDate, endDate));
		// console.log(`result : ${result}, tmpDate : ${tmpDate}`);
		if (target > 28) {
			tmpDate = Util.handleSpecDate(tmpDate, target);
		} else {
			tmpDate = Util.getAfterMonth(tmpDate, 1);
		}
		
	}
	
	return result;
}


export {getFirstPayment, getMidPayment, getLastPayment, getMidDate, getInstallmentValue}