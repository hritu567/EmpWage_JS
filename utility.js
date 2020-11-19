//uc5
//Calculating Wages for month
var EMP_RATE_PER_HOUR = 20;
var NUM_OF_WORKING_DAYS = 20;
var empHrs = 0;
var totalSalary = 0;
for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {
	var empCheck = Math.floor(Math.random() * 10) % 3;
	switch (empCheck) {
		case 1:
			empHrs = 8;
			break;
		case 2:
			empHrs = 4;
			break;
		default:
			empHrs = 0;
			break;
			}
	var dailyWage = EMP_RATE_PER_HOUR * empHrs;
	totalSalary = totalSalary + dailyWage;
		}
console.log("Total Salary for a month is : " + totalSalary);
