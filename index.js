
function Calculate(){
    let userInput = document.getElementById('dob').value; 
    let dobYear = new Date(userInput).getFullYear(); 
    let currentYear = new Date(Date.now()).getFullYear();
    let ageDiff = currentYear - dobYear;
    if(userInput==null || userInput===''){
        document.getElementById('result').innerText = "Please select your date of birth";
        document.getElementById('result').style.color = 'blue';
        return false;
    }
    if(ageDiff<0){
        document.getElementById('result').innerText = "Please choose a valid date";
        document.getElementById('result').style.color = 'green';
        return false;
    }
    
    document.getElementById('result').style.color = 'yellow';
    document.getElementById('result').innerText = "You are "+ageDiff+ " year old.";
    return false;
}
