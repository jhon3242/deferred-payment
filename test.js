import * as Cal from "./Calculation.js";
import * as Util from "./Util.js"
import assert from "assert";

// describe("일수 차이 함수 (getDateDiff) 테스트", function() {
// 	function makeTest(testCase) {
// 		it (`시작일 ${testCase.start}, 종료일 ${testCase.end}`, function() {
// 			let result = Util.getDateDiff(new Date(testCase.start), new Date(testCase.end));
// 			assert.equal(result, testCase.expect);
// 		})
// 	}
// 	let cases = {
// 		case1 : {start : "2022-01-01", end : "2022-01-31", expect : 30},
// 		case2 : {start : "2022-01-01", end : "2023-01-01", expect : 365},
// 		case3 : {start : "2024-01-01", end : "2025-01-01", expect : 366},
// 		case4 : {start : "2022-01-01", end : "2028-01-01", expect : 2191},
// 		case5 : {start : "2023-01-01", end : "2026-01-01", expect : 1096},
// 		case6 : {start : "2026-05-30", end : "2029-05-30", expect : 1096},
// 		case7 : {start : "2027-11-30", end : "2028-01-08", expect : 39},
// 		case8 : {start : "2027-12-30", end : "2029-05-29", expect : 516},
// 		case9 : {start : "2026-05-30", end : "2027-04-30", expect : 335},
// 	}
// 	for (let testCase in cases) {
// 		makeTest(cases[testCase]);
// 	}
// })


// describe("n달 뒤 구하는 함수 (getAfterMonth) 테스트", function() {
// 	function makeTest(testCase) {
// 		it (`시작일 ${testCase.start} , ${testCase.target} 달 뒤`, function() {
// 			let result = Util.getAfterMonth(new Date(testCase.start), testCase.target);
// 			assert.equal(Util.getDateStr(result), testCase.expect);
// 		})
// 	}
// 	let cases = {
// 		case1 : {start : "2022-01-31", target : 1, expect : "2022-02-28"},
// 		case2 : {start : "2023-02-28", target : 1, expect : "2023-03-28"},
// 		case3 : {start : "2024-02-29", target : 12, expect : "2025-02-28"},
// 		case4 : {start : "2024-01-31", target : 1, expect : "2024-02-29"},
// 		case5 : {start : "2024-02-29", target : 6, expect : "2024-08-29"},
// 		case6 : {start : "2024-01-31", target : 36, expect : "2027-01-31"},
// 	}

// 	for (let testCase in cases) {
// 		makeTest(cases[testCase]);
// 	}
// })



describe("가까운 날 구하는 (handleSpecDate) 테스트", function() {
	function makeTest(testCase) {
		it (`시작일 ${testCase.start} , 타켓날 ${testCase.target}`, function() {
			let result = Util.handleSpecDate(new Date(testCase.start), testCase.target);
			assert.equal(Util.getDateStr(result), testCase.expect);
		})
	}
	let cases = {
		case1 : {start : "2022-01-31", target : 31, expect : "2022-02-28"},
		case2 : {start : "2023-02-28", target : 30, expect : "2023-03-30"},
		case3 : {start : "2023-02-28", target : 31, expect : "2023-03-31"},
		case4 : {start : "2024-01-31", target : 31, expect : "2024-02-29"},
		case5 : {start : "2024-02-29", target : 31, expect : "2024-03-31"},
		case6 : {start : "2024-02-29", target : 30, expect : "2024-03-30"},
		case7 : {start : "2026-05-30", target : 30, expect : "2026-06-30"},
		case8 : {start : "2026-01-20", target : 20, expect : "2026-01-20"},
	}
	for (let testCase in cases) {
		makeTest(cases[testCase]);
	}
})





// describe("만기누적지수 (getInstallmentValue) 테스트", function() {
// 	function makeTest(testCase) {
// 		it (`적금 달 ${testCase.month}, 시작일 ${testCase.start}`, function() {
// 			let result = Cal.getInstallmentValue(testCase.month , new Date(testCase.start));
// 			assert.equal(result, testCase.expect);
// 		})
// 	}
// 	let cases = {
// 		case1 : {start : "2022-01-01", month : 12, expect : 2382},
// 		case2 : {start : "2023-01-01", month : 36, expect : 20300},
// 		case3 : {start : "2026-05-30", month : 36, expect : 20248},
// 	}
// 	for (let testCase in cases) {
// 		makeTest(cases[testCase]);
// 	}
// })


