# deferred-payment
선납이연 계산 프로그램입니다.


# 기능 구현 목록

- [X] 첫 날 지불해야하는 금액을 구하는 기능 - Calculation#getFirstPayment
- [X] 마지막 날 지불해야하는 금액을 구하는 기능 - Calculation#getLastPayment
- [X] 선납 이연 시 중간에 입금해야하는 날짜를 구하는 기능 - Calculation#getMidDate
	- [X] 두 날짜의 날짜 차이를 구하는 기능 - Util#getDateDiff
	- [X] 적금 시 수지를 구하는 기능 - Calculation#getInstallmentValue
- [X] 시작일로 부터 특정 달 이후의 날짜를 구하는 기능 - Util#getAfterMonth