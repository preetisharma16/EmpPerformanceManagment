
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    listAllEmployees(data.deptID);
}


function logout() {
  //oktaSignIn.authClient.signOut();
  location.reload();
}

function listAllEmployees( deptNo, reset = true) {

  var url = document.location.href,
  params = url.split('?')[1].split('&'),
  data = {}, tmp;
for (var i = 0, l = params.length; i < l; i++) {
   tmp = params[i].split('=');
   data[tmp[0]] = tmp[1];
}
//alert(data.empID);
    console.log("inside priti");
    //const fetchURL = 'http://localhost:3000/getEmployees';
    const fetchURL = 'https://j52bp60fkg.execute-api.us-west-2.amazonaws.com/v2/dep-id'

const deptID = {
      dept_no: deptNo,
    };

fetch(fetchURL, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      body: JSON.stringify(deptID),
      headers: {
        'content-type': 'application/json',
      },
    })

.then(response => response.json())
    .then(result => {
      console.log(result);
      console.log(result);
      //slicedResult = result.slice(1, 100);
      //result.forEach(status => {
      result.forEach(status => {
		console.log(status);
    if (status.emp_id != data.empID) {
		var newRow = $("<tr>");
                var cols = "";
                cols += '<td> '+ status.firstName +'</td>';
                cols += '<td> '+ status.lastName +'</td>';
                cols += '<td> '+ status.emp_id +'</td>';
                cols += '<td> '+ (status.hireDate).split('T')[0] +'</td>';
                //cols += '<td> '+ '<input type=\"button\" value=\"Rate Employee\" id=\'rate-button\' onClick=\'rateMe()\'/>' +'</td>';
                //cols += '<td> '+ '<input type=\"button\" value=\"Update Rating\" id=\'update-button\' onClick=\'updateRating()\'/>' +'</td>';
                cols += '<td> '+ '<input type=\"button\" value=\"Show Rating\" id=\'show-button\' onClick=\'showRating(' + status.emp_id + ')\'/>' +'</td>';
                newRow.append(cols);
                $('#empData  .tbody').append(newRow);
    }

});
});
}

function rateMe() {
	url = './rate.html';
	document.location.href = url;
}
function showChart() {
  var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
  //alert(data.empID);
  url = './employeeHome.html?empID=' + data.empID +'&isMgr=yes'+ '&deptID='+ data.deptID;
	document.location.href = url;
}

function showRating(empID) {
  var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
  console.log(empID);
  url = './employeeHome.html?empID=' + empID +'&isMgr=yes'+ '&deptID='+ data.deptID;;
	document.location.href = url;
}

function updateRating() {
	url = './updaterate.html';
	document.location.href = url;
}










