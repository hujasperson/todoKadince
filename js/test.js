// select the elements 
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("data");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes names 
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH =  "lineThrough";

//Show todays date
const options = {weekday : "long", month:"short",day:"numberic"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", optoins);