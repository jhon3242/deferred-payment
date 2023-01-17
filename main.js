"use strict"



import * as Cal from "./Calculation.js"
import {init} from "./User.js";

const ASSET = 44992000 + 40256000; // 85248000
const MONTH = 36;
const START_DATE = "2023-01-01";
const print = console.log;
const makeUser = init();

// const ASSET = document.getElementById("price"); // 85248000
// const MONTH = document.getElementById("month");
// const START_DATE = document.getElementById("date");
// const print = document.write

// Util.setDefaultTime(START_DATE);


run();

function run() {
	let user = makeUser(ASSET, START_DATE, MONTH);
	let user2 = makeUser(ASSET, MONTH);
	Cal.initUser(user);
	Cal.calculate(user);
	print(user.toString());
}

