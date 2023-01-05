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


function getLastDate(start = new Date(), month = 36){
	let tmpDate = Util.getAfterMonth(start, month);
	tmpDate.setDate(tmpDate.getDate()-  1);
	return tmpDate;
}

/**
 * 중간 납부 날짜를 구하는 함수
 */
function getMidDate(6) {
	let endDate = Util.getAfterMonth(start, month);
	let midDateDiff = getMidValue(month, start); // 마지막 일로부터 며칠 전에 납부해야하는지
	return Util.getBeforeDate(endDate, midDateDiff);
}


/**
 * 적금 시 총 수지 (만기누적지수)
 */
// function getInstallmentValue(month = 36, start = new Date()) {
// 	let count = -1;
// 	let result = 0;
// 	let tmpDate = Util.getCloneDate(start);
// 	let endDate = Util.getAfterMonth(start, month);
// 	let target = start.getDate();
// 	while (++count < month) {
// 		result += Util.getDateDiff(tmpDate, endDate);
// 		if (target > 28) {
// 			tmpDate = Util.handleSpecDate(tmpDate, target);
// 		} else {
// 			tmpDate = Util.getAfterMonth(tmpDate, 1);
// 		}
// 	}
	
// 	return result;
// }


export {getFirstPayment, getMidPayment, getLastPayment, getMidDate, getLastDate, getInstallmentValue}