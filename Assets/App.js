//Question_01:

var age = 20;
alert("I am " + age + " Years old");


//Question_02:
  var count = Number(localStorage.getItem('visitorCount')) || 0;
  count++;

  
  localStorage.setItem('visitorCount', count);
  window.onload = function() {
      var visitorCountElement = document.getElementById("visitorCount");
      alert(visitorCountElement.innerHTML = "You have visited this site " + count + " times.");
  };

//Question_03:
var birthYear = 2002;
var message = "My birth year is: " + birthYear;

document.write(message);

//Question_04:

var visitorName = prompt("Please enter your name:");
var productTitle = prompt("Please enter the product title:");
var quantity = prompt("Please enter the quantity:");
var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store";
document.write(message);
