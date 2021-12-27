var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1;//January is 0!
var year = today.getFullYear();

if (month < 10) month = "0" + month; //Keep space for 2 digits
if (day < 10) day = "0" + day; //Keep space for 2 digits

today = year + "-" + month + "-" + day;

//today=`${year}-${month}-${day}`;
document.getElementById('theDate').value = today; 