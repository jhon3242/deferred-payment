"use strict"



import * as Cal from "./Calculation.js"
import * as Util from "./Util.js"

const ASSET = 44992000 + 40256000; // 85248000
const MONTH = 36;
// const START_DATE = new Date(document.getElementById("date"));
const START_DATE = new Date("2026-05-06");
const print = console.log;

Util.setDefaultTime(START_DATE);


run();

function run() {
	let info = Cal.calculate(START_DATE, MONTH);
	print(Cal.getStartDate(info) + "(첫 날) 납부 금액 : " + Cal.getFirstPayment(ASSET, MONTH));
	print(Cal.getMidDate(info, MONTH) + "(중간 날) 납부 금액 : " + Cal.getMidPayment(ASSET, MONTH));
	print(Cal.getLastDate(info) + "(마지막 날) 납부 금액 : " + Cal.getLastPayment(ASSET, MONTH));
}

