// CODE EXPLAINED channel

// Select the Elements 
const clear = document.querySelector(".clear");
const dataElement = document.getElementById(".date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
const SORT_BY_PEN = "pending";

// Show todays date
const options = {weekday : "long", month:"short", day:"numeric"}
const today = new Date();

dataElement.innerHTML = today.toLocaleDateSTring("en-US", options);