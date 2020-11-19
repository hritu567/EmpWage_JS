//uc7
//Refactoring UC6 using function
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;
function Employee(){
var empHrs = 0;
var totalSalary = 0;
var totalEmpHrs = 0;
var totalWorkingDays = 0;
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
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
    totalEmpHrs += empHrs;
	console.log("Day : " + totalWorkingDays + " Emp hours : " + empHrs);
    
}
totalSalary = EMP_RATE_PER_HOUR * totalEmpHrs;
console.log("Total Salary for a month is : " + totalSalary);
}
module.exports = { Employee }