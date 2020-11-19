//uc3
//Added part time employee wage
var IS_FULL_TIME = 1;
var IS_PART_TIME = 2;
var EMP_RATE_PER_HOUR = 20;
var empHrs = 0;
var empCheck = Math.floor(Math.random() * 10) % 3;

if (empCheck == IS_FULL_TIME) {
	console.log("Employee is Present for full time");
	empHrs = 8;
    } 
else if (empCheck == IS_PART_TIME) {
	console.log("Employee is Present for part time");
	empHrs = 4;
    } 
else {
	console.log("Employee is Absent");
	empHrs = 0;
	}
var dailyWage = EMP_RATE_PER_HOUR * empHrs;
console.log("Employee Daily wage is : " + dailyWage);
	