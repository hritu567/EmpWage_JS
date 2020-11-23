//uc9
//Calculating Wages along with daily wage for multiple companies
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
class Employee
{
  constructor(comname, empRatePerHour, numOfWorkingDays, maxHoursInMonth) {
	this.comname = comname;
	this.empRatePerHour = empRatePerHour;
	this.numOfWorkingDays = numOfWorkingDays;
	this.maxHoursInMonth = maxHoursInMonth;
	}
	calculateWage() {
		let empHrs = 0;
		let totalEmpHrs = 0;
		let totalWorkingDays = 0;
		while (totalEmpHrs < this.maxHoursInMonth && totalWorkingDays < this.numOfWorkingDays) {
			totalWorkingDays++;
			let empCheck = Math.floor(Math.random() * 10) % 3;
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
			totalEmpHrs += empHrs;
			console.log("Days : " + totalWorkingDays + " Emp hours : " + empHrs);
		}

		let totalSalary = this.empRatePerHour * totalEmpHrs;
		console.log(totalSalary);
		console.log("Total Salary for : " + this.comname + " is : " + totalSalary);
	}
}
let emp = () => {
	console.log("welcome")
}
module.exports = { Employee, emp }
