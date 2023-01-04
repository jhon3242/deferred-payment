"use strict"



import * as Cal from "./Calculation.js"
import * as Util from "./Util.js"

const ASSET = 44992000 + 40256000; // 85248000
const MONTH = 36;
const START_DATE = new Date("2026-05-30");
const print = console.log;

// Util.setDefaultTime(START_DATE);

// let a = Cal.getMidDate(MONTH, START_DATE);

// let a = new Date("2022-02-30");
// let b = new Date("2022-03-02");
// console.log("" + a);
// console.log(+a == +b);


run();

function run() {
	const MID_DATE = Cal.getMidDate(START_DATE, MONTH);
	const LAST_DATE = Util.getAfterMonth(START_DATE, MONTH); 
	console.log("" + MID_DATE);
	print(Util.getDateStr(START_DATE) + "(첫 날) 납부 금액 : " + Cal.getFirstPayment(ASSET, MONTH));
	print(Util.getDateStr(MID_DATE) + "(중간 날) 납부 금액 : " + Cal.getMidPayment(ASSET, MONTH));
	print(Util.getDateStr(LAST_DATE) + "(마지막 날) 납부 금액 : " + Cal.getLastPayment(ASSET, MONTH));
}

