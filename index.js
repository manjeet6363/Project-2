function Calculate() {
let userInput = document.getElementById('dob').value;
let userInput2 = document.getElementById('newDate').value;
let dobYear = new Date(userInput).getFullYear();
let currentYear = new Date(userInput2).getFullYear();
if(userInput==null || userInput==='' || userInput2==null || userInput2===''){
    document.getElementById('result').innerText = 'Please select both date first';
    document.getElementById('result').style.color = 'white';
    return false;
}
let ageDiff = currentYear-dobYear;

document.getElementById('result').style.color = 'yellow';
return document.getElementById('result').innerText = "You are "+ageDiff+" years old.";
}
