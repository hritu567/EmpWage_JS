//uc4
//solving UC3 using Switch statement
var EMP_RATE_PER_HOUR = 20;
var empHrs = 0;
var empCheck = Math.floor(Math.random() * 10) % 3;

switch (empCheck) {
	case 1:
		console.log("Employee is Present for full time");
		empHrs = 8;
		break;
	case 2:
		console.log("Employee is Present for part time");
		empHrs = 4;
		break;
	default:
		console.log("Employee is Absent");
		empHrs = 0;
		break;
		}
var dailyWage = EMP_RATE_PER_HOUR * empHrs;
console.log("Employee Daily wage is : " + dailyWage);