# Performance Managment

 San Jose State University
 
 CMPE-282 Cloud Services
 
 Professor: Andrew Bond
 
 ISA: Akanksha Jaiswal
 
# CMPE 282 Term Project Introduction:

* Performance Management application is an enterprise platform for employee’s performance management.

* 	This application is serverless application with two role-based access: Manager and Employee

* 	The manager has the highest level of authority. Manager provides ratings to the employees working under his departments. 

* 	Manager can view the employee ratings and update the rating as and when necessary. 

* 	Employees can login securely through AWS Cognito Single Sign on and view their respective ratings provided by the manager.

<br />

## Tech Stack and AWS cloud services used:
*	 Node.js
*  Express 
*  HTML, JavaScript, Bootstrap, google chart APIs
* 	DynamoDB
* 	AWS Cognito 
* 	AWS Lambda API 
*  AWS amplify 

### Application Link: 
* https://www.empperformance.store
  
  Use following Account Credentials for testing:
  1. Manager: priti.sharma@sjsu.edu / 123456
  2. Employee:  preetisharma16@icloud.com / apple123

## Architecture Diagram
<img src="https://github.com/preetisharma16/EmpPerformanceManagment/blob/main/images/archDiagm.png" width="500">

## Application Screenshots:
   Manager login with Cognito authentication:
   
   <img src="https://github.com/preetisharma16/EmpPerformanceManagment/blob/main/images/managerlogin.png" width="500" >
   <br />
   
   Manager view with all the employee for his department are shown
   <img src="https://github.com/preetisharma16/EmpPerformanceManagment/blob/main/images/managerView.png" width="500" >
   <br />
   
   Rating for Employee
   <img src="https://github.com/preetisharma16/EmpPerformanceManagment/blob/main/images/showRating.png" width="500" >
   <br />
   
   Update rating for Employee
   <img src="https://github.com/preetisharma16/EmpPerformanceManagment/blob/main/images/updaterating.png" width="500" >
   <br />
   
   
   


