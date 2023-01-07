import * as Cal from "./Calculation.js";
import * as Util from "./Util.js"
import assert from "assert";

describe("n달 뒤 구하는 함수 (getAfterMonth) 테스트", function() {
	function makeTest(testCase) {
		it (`시작일 ${testCase.start} , ${testCase.target} 달 뒤`, function() {
			let result = Util.getAfterMonth(new Date(testCase.start), testCase.target);
			assert.equal(Util.getDateStr(result), testCase.expect);
		})
	}
	let cases = {
		case1 : {start : "2022-01-31", target : 1, expect : "2022-02-28"},
		case2 : {start : "2023-02-28", target : 1, expect : "2023-03-28"},
		case3 : {start : "2024-02-29", target : 12, expect : "2025-02-28"},
		case4 : {start : "2024-01-31", target : 1, expect : "2024-02-29"},
		case5 : {start : "2024-02-29", target : 6, expect : "2024-08-29"},
		case6 : {start : "2024-01-31", target : 36, expect : "2027-01-31"},
	}

	for (let testCase in cases) {
		makeTest(cases[testCase]);
	}
})



