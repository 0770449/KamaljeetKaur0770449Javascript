/*
	WEB 303 Assignment 1 - jQuery
	Name:Kamaljeet Kaur 
	Student ID:0770449
*/
 
 
$(document).ready(function()
{
 $("input").change(function()
 {
     let salary= $("#yearly-salary").val();
     let percent= $("#percent").val();
     
     let result=((salary*percent)/100).toFixed(2);
     $("#amount").text("$" +result);
 });

}
);	  

