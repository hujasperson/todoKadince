// CODE EXPLAINED channel

// Select the Elements 
const clear = document.querySelector(".clear");
const dateElement = document.getElementById(".date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
 //const SORT_BY_PEN = "pending";
//Variables
let LIST , id;

//get item from local storage 
data = localStorage.getItem("TODO");

//Check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);

}else{
    // if dat isn't empty
    LIST= [];
    id = 0;
}

//load items to the user's interface 
function loadList(array){
        array.forEach(function(item){
            addToDo(item.name, item.id, item.done, item.trash);
        });
    
}

// Show todays date
const options = {weekday : "long", month:"short", day:"numeric"}
const today = new Date();

dataElement.innerHTML = today.toLocaleDateSTring("en-US", options);

// add to do function 
function addToDo(toDo, id, done, trash){

    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";


    const item = '<li class="DONE"><i class="fa fa-circle-thin co" job="complete" id="${id}"></i><p class="LINE">${toDo}</p><i class="fa fa-trash-o de" job="delete" id="${id}"></i></li>';
   
    const position = "beforeend"

    list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key
document.addEventListener("keyup", function(even){
    if(event.keyCode ==13){
        const toDo = input.value;

        //if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id, 
                done : false,
                trash : false
            });
            //add item to local storage 
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
}); 

// complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDO(element){
    element.parentNode.parentNode.removeChiled(element.parentNode);

    LIST[element.id].trash = true;

}

//target the items created 

list.addEventListener("click", function(event){
    const element =event.target;
    const elementJob =element.attributes.job.value;

    if(element == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDO(element);
    }
    //add item to local storage 
    localStorage.setItem("TODO", JSON.stringify(LIST));
});