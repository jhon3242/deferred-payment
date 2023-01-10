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
	let infos = getPayInfos(start, month);
	initMidDateInfo(infos);
	return infos;
}

function initMidDateInfo(infos) {
	let midDateInfo = infos.find(info => info["diff"] === undefined);
	let totalDiff = getTotalDiff(infos);
	midDateInfo["diff"] = -totalDiff;
	midDateInfo["deferredPayDate"] = Util.getDateStr(Util.getDateAfter(midDateInfo["normalPayDate"], -totalDiff));
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


function getPayInfos(start, month) {
	let tmpDate = new Date (start);
	let infos = [];
	for (let i = 0; i < month; i++) {
		let tmp = {"normalPayDate" : undefined, "deferredPayDate" : undefined, "diff" : undefined};
		tmp["normalPayDate"] = Util.getDateStr(tmpDate);
		if (i < month * Const.FIRST_RATIO) {
			tmp["deferredPayDate"] = Util.getDateStr(start);
			tmp["diff"] = Util.getDateDiff(new Date(tmp["normalPayDate"]), new Date(tmp["deferredPayDate"]));
		} else if (i !== month * Const.FIRST_RATIO) {
			tmp["deferredPayDate"] = Util.getDateStr(Util.getLastPayDate(start, month));
			tmp["diff"] = Util.getDateDiff(new Date(tmp["normalPayDate"]), new Date(tmp["deferredPayDate"]));
		}
		infos.push(tmp);
		tmpDate = Util.getAfterMonth(tmpDate, start.getDate());
	}
	return infos;
}


function getTotalDiff(info) {
	return info.reduce((acc, now) => (now["diff"] ?? 0) + acc, 0);
}


export {calculate, getFirstPayment, getMidPayment, getLastPayment, getStartDate, getMidDate, getLastDate}