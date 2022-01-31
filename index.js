function Calculate() {
    var userinput = document.getElementById('dob').value;
var DOB = new Date(userinput);
if(userinput ===null || userinput ===''){
    document.getElementById('result').innerText = 'Please choose a date';
    document.getElementById('result').style.color = 'white';
    return false;
}
var monthDiff = Date.now()-DOB.getTime();
var ageDate = new Date(monthDiff);
var year = ageDate.getUTCFullYear();
var age = Math.abs(year - 1970);

document.getElementById('result').style.color = 'yellow';
return document.getElementById('result').innerText = 'You are '+ age+ ' years old.';
}
