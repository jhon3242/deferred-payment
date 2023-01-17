import * as Util from "./Util.js"
import * as Const from "./Constant.js"


function initUser(user) {
	let infos = getInfos(user, new Date(user.startDate));
	user["infos"] = infos;
	user.start = user.infos[0];
	user.mid = user.infos[user.month * Const.FIRST_RATIO];
	user.end = infos[infos.length - 1];
	
}

function getInfos(user, start) {
	let tmpDate = new Date (user.startDate);
	let infos = [];
	for (let i = 0; i < user.month; i++) {
		let format = {"normalPayDate" : undefined, "deferredPayDate" : undefined, "diff" : undefined};
		format["normalPayDate"] = Util.getDateStr(tmpDate);
		infos.push(format);
		tmpDate = Util.getAfterMonth(tmpDate, start.getDate());
	}
	
	return infos;
}

function calculate(user) {
	setDefferedDate(user);
	setMidDateInfo(user);
	setToString(user);
}

function setDefferedDate(user) {
	let infos = user.infos;
	let fistPayDate = user.start["normalPayDate"];
	let lastPayDate = Util.getDateStr(Util.getLastPayDate(user.startDate, user.month));
	for (let i=0; i<infos.length; i++){
		let cur = infos[i];
		if (i < user.month * Const.FIRST_RATIO) { // 첫날에 지불하는 날
			cur["deferredPayDate"] = fistPayDate;
		} else if (i > user.month * Const.FIRST_RATIO) { // 마지막날에 지불하는 날
			cur["deferredPayDate"] = lastPayDate;
		} else { // 중간에 지불하는 날
			continue;
		}
		cur["diff"] = Util.getDateDiff(new Date(cur["normalPayDate"]), new Date(cur["deferredPayDate"]));
	}
}

function setMidDateInfo(user) {
	let infos = user.infos;
	let midDateInfo = infos.find(info => info["diff"] === undefined);
	let totalDiff = getTotalDiff(infos);
	midDateInfo["diff"] = -totalDiff;
	midDateInfo["deferredPayDate"] = Util.getDateStr(Util.getDateAfter(midDateInfo["normalPayDate"], -totalDiff));
}

function getTotalDiff(info) {
	return info.reduce((acc, now) => (now["diff"] ?? 0) + acc, 0);
}

function setToString(user) {
	user.toString = function() {
		return `
초기 납부일 : ${user.start["deferredPayDate"]} 납부금 : ${getFirstPayment(user)} 원
중간 납부일 : ${user.mid["deferredPayDate"]} 납부금 : ${getMidPayment(user)} 원
말기 납부일 : ${user.end["deferredPayDate"]} 납부금 : ${getLastPayment(user)} 원
		`;
	} 
}


function getFirstPayment(user) {
	return (user.asset / 2).toLocaleString();
}

function getLastPayment(user) {
	return (user.asset * ((user.month / 2) - 1) / user.month).toLocaleString();
}

function getMidPayment(user) {
	return (user.asset / user.month).toLocaleString();
}



export {initUser, calculate }