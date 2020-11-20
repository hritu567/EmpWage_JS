//uc8
//Calculating Wages for multiple companies
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
function EmployeeWages(comname, empRatePerHour, numOfWorkingDays, maxHoursInMonth){
let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs < maxHoursInMonth && totalWorkingDays < numOfWorkingDays){
	totalWorkingDays++;
	var empCheck = Math.floor(Math.random() * 10) % 3;
	switch (empCheck) {
		case IS_FULL_TIME:
			empHrs = 8;
			break;
		case IS_PART_TIME:
			empHrs = 4;
			break;
		default:
			empHrs = 0;
			break;
            }
    totalEmpHrs = totalEmpHrs + empHrs;
	console.log("Day : " , totalWorkingDays + " Emp hours : " , empHrs);
    }
let totalSalary = empRatePerHour * totalEmpHrs;
console.log("Total Salary for : " , comname + " is " , totalSalary);
}
module.exports = { EmployeeWages }
