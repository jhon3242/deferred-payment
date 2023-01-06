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


function calculate(start, month) {
	let midPayIndex = month * Const.FIRST_RATIO;
	let info = getPayInfo(start, month);
	let totalDiff = getTotalDiff(info);
	let midDateInfo = info[midPayIndex];
	midDateInfo["diff"] = -totalDiff;
	midDateInfo["deferredPayDate"] = Util.getDateStr(Util.getDateAfter(new Date(midDateInfo["normalPayDate"]), -totalDiff));
	return info;
}

/**
 * 중간 납부 날짜를 구하는 함수
 */
function getMidDate(info, month) {
	let midDateInfo = info[month * Const.FIRST_RATIO];
	return midDateInfo["deferredPayDate"];
}

function getStartDate(info) {
	let startInfo = info[0];
	return startInfo["deferredPayDate"];
}

function getLastDate(info) {
	let endInfo = info[info.length - 1];
	return endInfo["deferredPayDate"];
}


function getPayInfo(start, month) {
	let tmpDate = Util.getCloneDate(start);
	let lastPayDate = Util.getLastPayDate(start, month);
	let info = [];
	let i = 0;
	for (let i = 0; i < month; i++) {
		let tmp = {"normalPayDate" : null, "deferredPayDate" : null, "diff" : null};
		tmp["normalPayDate"] = Util.getDateStr(tmpDate);
		if (i < month * Const.FIRST_RATIO) {
			tmp["deferredPayDate"] = Util.getDateStr(start);
			tmp["diff"] = Util.getDateDiff(new Date(tmp["normalPayDate"]), new Date(tmp["deferredPayDate"]));
		} else if (i === month * Const.FIRST_RATIO) {
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


export {calculate, getFirstPayment, getMidPayment, getLastPayment, getStartDate, getMidDate, getLastDate}