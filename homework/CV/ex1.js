function checkLeapYear() {
    const yearInput = document.querySelector('#yearInput'); 
    const resultDiv = document.querySelector('.result'); 

    const year = parseInt(yearInput.value); 
    if (isNaN(year)) {
        resultDiv.textContent = "Please enter a valid year."; 
        return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    resultDiv.textContent = 
        isLeap ? `${year} is a leap year!` : `${year} is not a leap year.`; 
}
