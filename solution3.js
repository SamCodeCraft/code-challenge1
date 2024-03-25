// Function to calculate PAYE (Tax) based on the given salary

function calculatePAYE(salary) {
    let tax = 0;

    if (salary <= 24000) {
        tax = salary * 0.1;
    } else if (salary <= 32333) {
        tax = 2400 + ((salary - 24000) * 0.25);
    } else if (salary <= 500000) {
        tax = 5600 + ((salary - 32333) * 0.3);
    } else if (salary <= 800000) {git 
        tax = 109130 + ((salary - 500000) * 0.325);
    } else {
        tax = 204130 + ((salary - 800000) * 0.35);
    }

    return tax;
}

// Function to calculate NHIF deductions based on the given salary
function calculateNHIF(salary) {
    if (salary <= 5999) {
        return 150;
    } else if (salary <= 7999) {
        return 300;
    } else if (salary <= 11999) {
        return 400;
    } else if (salary <= 14999) {
        return 500;
    } else if (salary <= 19999) {
        return 600;
    } else if (salary <= 24999) {
        return 750;
    } else if (salary <= 29999) {
        return 850;
    } else if (salary <= 34999) {
        return 900;
    } else if (salary <= 39999) {
        return 950;
    } else if (salary <= 44999) {
        return 1000;
    } else if (salary <= 49999) {
        return 1100;
    } else if (salary <= 59999) {
        return 1200;
    } else if (salary <= 69999) {
        return 1300;
    } else if (salary <= 79999) {
        return 1400;
    } else if (salary <= 89999) {
        return 1500;
    } else if (salary <= 99999) {
        return 1600;
    } else if (salary <= 109999) {
        return 1700;
    } else {
        return 1700;
    }
}

    // Function to calculate NSSF deductions based on the given salary

function calculateNSSF(salary) {
    if (salary <= 7000) {
        return salary * 0.06;
    } else if (salary <= 36000) {
        return 420;
    } else {
        return 2160;
    }
}

// Function to calculate net salary

function calculateNetSalary(basicSalary, benefits) {

    // Calculating total gross salary
    const grossSalary = basicSalary + benefits;

    // Calculating PAYE (Tax)
    const paye = calculatePAYE(grossSalary);

    // Calculating NHIF deductions
      const nhif = calculateNHIF(grossSalary);

    // Calculating NSSF deductions
      const nssf = calculateNSSF(basicSalary);

    // Calculating total deductions
    const totalDeductions = paye + nhif + nssf;

    // Calculating net salary
    const netSalary = grossSalary - totalDeductions;

    // Returning net salary
    return netSalary;
}

