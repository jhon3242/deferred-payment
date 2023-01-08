import * as Cal from "./Calculation.js";
import * as Util from "./Util.js"
import assert from "assert";

describe("n달 뒤 구하는 함수 (getAfterMonth) 테스트", function() {
	function makeTest(testCase) {
		it (`시작일 ${testCase.start} , ${testCase.month} 달 뒤`, function() {
			let result = Util.getAfterMonth(new Date(testCase.start), testCase.target, testCase.month);
			assert.equal(Util.getDateStr(result), testCase.expect);
		})
	}
	let cases = {
		case1 : {start : "2022-01-31", target : 31, month : 1, expect : "2022-02-28"},
		case2 : {start : "2023-02-28", target : 28, month : 1, expect : "2023-03-28"},
		case3 : {start : "2024-02-29", target : 29, month : 12, expect : "2025-02-28"},
		case4 : {start : "2024-01-31", target : 31, month : 1, expect : "2024-02-29"},
		case5 : {start : "2024-02-29", target : 29, month : 6, expect : "2024-08-29"},
		case6 : {start : "2024-01-31", target : 31, month : 36, expect : "2027-01-31"},
		case7 : {start : "2024-01-29", target : 29, month : 1, expect : "2024-02-29"},
		case8 : {start : "2024-07-31", target : 31, month : 1, expect : "2024-08-31"},
		case9 : {start : "2024-12-31", target : 31, month : 1, expect : "2025-01-31"},
	}

	Object.values(cases).forEach(makeTest);
})


describe("기능 테스트", function() {
	function makeTest(testCase) {
		it (`시작일 ${testCase.start} , ${testCase.month} 달 적금 시 중간날`, function() {
			let info = Cal.calculate(new Date(testCase.start), testCase.month);
			assert.equal(Cal.getMidDate(info, testCase.month), testCase.expect);
		})
	}
	
	let cases = {
		case1 : {start : "2023-01-01", month : 12, expect : "2023-06-28"},
		case2 : {start : "2023-01-01", month : 36, expect : "2024-06-25"},
		case3 : {start : "2023-01-08", month : 36, expect : "2024-07-02"},
		case4 : {start : "2026-05-30", month : 36, expect : "2028-01-08"},
	}

	Object.values(cases).forEach(makeTest);
})

