"use strict"

// const fn = require("./util.js");
import {MyDate} from "./MyDate.js";


let asset = 44992000 + 40256000; // 85248000
let month = 36;

let print = console.log;
// calculate(getPerPayment(asset, month), month);

// let tmp = new Date(2020, 0, 0);
// console.log(tmp.getFullYear());
// console.log(tmp.getMonth() + 1);
// console.log(tmp.getDate());
// console.log(tmp.getDay());



/**
 * 원래 매달 내야하는 돈
 */
function getPerPayment(asset, month) {
	let perMonthValue = asset / month;
	return Math.floor(perMonthValue / 1000) * 1000;
}

/**
 * 적금 시의 가치
 */
function getTotalPayValue(perPayment, month, startDate = new MyDate()) {
	
	
}

function getMidPayDay(perPayment, month, startDate) {
	let totalPayValue = getTotalPayValue(perPayment, month);
	totalPayValue - perPayment * (month / 2)
}

function calculate(perPayment, month = 36, startDate = new MyDate()) {
	print("첫 달에 내야하는 금액 : " + perPayment * (month / 2));
	
	
}


/**
 * 시작일로 부터 month 달 이후 총 예치일을 구하는 함수
 */
function getDipositDate(start, momth) {
	let result = 0;
	for (let count = 0; count < momth; count++) {
		start.setDate(1);
		start.setMonth(start.getMonth() + 1);
		start.setDate(0);
		result += start.getDate();
		start.setDate(1);
		start.setMonth(start.getMonth() + 1);
	}
	return result;
}