"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Dominic Torres
   Date:  2/3/20 

	
*/
//step 4
var thisDay = new Date("August 30, 2018");
//step 5
var tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";
//step 6
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);
loop:
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleDateString();

   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr><td>" + eventDay + " @ " + eventTime + "</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] + "</td></tr>";
   }
}
//functions
tableHTML += "</table>";
document.getElementById("eventList").innerHTML = tableHTML;




