import * as Util from "./Util.js"
import * as Const from "./Constant.js"

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
	let tmpDate = Util.getAfterMonth(start, start.getDate());
	while (--month > 0) {
		tmpDate = Util.getAfterMonth(tmpDate, start.getDate());
	}
	return tmpDate;
}

/**
 * 중간 납부 날짜를 구하는 함수
 */
function getMidDate(start, end, month) {
	let midPayIndex = month * Const.FIRST_RATIO;
	let info = getPayInfo(start, end, month);
	let totalDiff = getTotalDiff(info);
	let midDateInfo = info[midPayIndex];
	midDateInfo["diff"] = -totalDiff;
	midDateInfo["deferredPayDate"] = Util.getDateStr(Util.getDateAfter(new Date(midDateInfo["normalPayDate"]), -totalDiff));
	return midDateInfo["deferredPayDate"];
}


function getPayInfo(start, end, month) {
	let tmpDate = Util.getCloneDate(start);
	let lastPayDate = Util.getDateAfter(end, -1);
	let info = [];
	let i = 0;
	while (i++ < month) {
		let tmp = {"normalPayDate" : null, "deferredPayDate" : null, "diff" : null};
		tmp["normalPayDate"] = Util.getDateStr(tmpDate);
		if (i <= month * Const.FIRST_RATIO) {
			tmp["deferredPayDate"] = Util.getDateStr(start);
			tmp["diff"] = Util.getDateDiff(new Date(tmp["normalPayDate"]), new Date(tmp["deferredPayDate"]));
		} else if (i === month * Const.FIRST_RATIO + 1) {
			tmp["deferredPayDate"] = undefined;
		} else {
			tmp["deferredPayDate"] = Util.getDateStr(lastPayDate);
			tmp["diff"] = Util.getDateDiff(new Date(tmp["normalPayDate"]), new Date(tmp["deferredPayDate"]));
		}
		info.push(tmp);
		tmpDate = Util.getAfterMonth(tmpDate, start.getDate());
	}
	return info;
}

function getTotalDiff(info) {
	return info.reduce((acc, now) => now["diff"] + acc, 0);
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


export {getFirstPayment, getMidPayment, getLastPayment, getMidDate, getLastDate}