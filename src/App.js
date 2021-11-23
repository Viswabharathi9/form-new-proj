import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";


function App() {
 const [selectedDate, setSelectedDate]=useState(null);
 const [name,setName]=useState("");

 var age;
 //var date =new Date();
 var d= Date.now() - selectedDate;
 var age_dt = new Date(d);
 
 var final_age=Math.abs(age_dt.getUTCFullYear() - 1970);
 
const changeHandler = e =>{

  setName(e.target.value);
 
 }

 const submitHandler = e => {
      e.preventDefault();

 }


 const ageCalc = e => {
 
  var dob = new Date(selectedDate);
  /*
  if(selectedDate==null || selectedDate=='') {
    document.getElementById("message").innerHTML = "**Choose a date please!";  
    return false; 
  } else {
   */
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();
  
  //convert the calculated difference in date format
  var age_dt = new Date(month_diff); 
  
  //extract year from date    
  var year = age_dt.getUTCFullYear();
  
  //now calculate the age of the user
  var age = Math.abs(year - 1970);
  
  //display the calculated age
  
  
  alert(`welcom ${name} and your age is : ${age}`);

 }

 


 return(

  <div>
  <form onSubmit={submitHandler}>
  <label>
   Your Name 
   <input type="text" onChange={changeHandler} value={name}></input></label>
  <label>Enter your DOB 
     <DatePicker  onChange={date => setSelectedDate(date)} value={selectedDate}/>
     </label>

    <button onClick={ageCalc}>Calculate Age</button>


</form>
  </div>
  
  

  
  
  );
  
  }
  
  
  export default App;



 /*
 var age;
 var d = new Date();
var n = d.getFullYear();
var birthYear;


var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;

*/


 /* To calculate age:
 var age;
 var calculatedAge;
//var year_born = prompt("Please enter your date of birth:", "Type here");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
alert("Hello, " + "you are " + calculatedAge + " years old!");
*/
