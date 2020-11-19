//uc2
//Calculating daily employee Wage
var IS_FULL_TIME=1;
var EMP_RATE_PER_HOUR=20;
var empHrs=0;
var empWage=0;
var empCheck=Math.floor(Math.random() * 10) %2;
if (empCheck == IS_FULL_TIME)
	empHrs=8;
else
	empHrs=0;
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Emp Wage: " + empWage);
	