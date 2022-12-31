// import getPerPayment from "./main.js";
// import {getPerPayment} from "./main.js";

let assert = chai.assert;

describe("getPerPayment 테스트", function() {
	it("45,000,000 원 36 개월 적금 시 월 2,368,000원을 납부해야 한다.", function() {
		assert.equal(getPerPayment(45000000, 36), 2368000);
	})
});