# deferred-payment
선납이연 계산 프로그램입니다.


# 기능 구현 목록

- [ ] 첫 날 지불해야하는 금액을 구하는 기능 - Calculation#getFirstPayment
- [ ] 마지막 날 지불해야하는 금액을 구하는 기능 - Calculation#getLastPayment
- [ ] 선납 이연 시 중간에 입금해야하는 날짜를 구하는 기능 - Calculation#getMidDate
	- [ ] 두 날짜의 날짜 차이를 구하는 기능 - Util#getDateDiff
	- [ ] 적금 시 수지를 구하는 기능 - Calculation#getInstallmentValue
