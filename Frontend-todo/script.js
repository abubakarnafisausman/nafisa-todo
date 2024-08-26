const headerElement = document.getElementById("title");
const inputElement = document.getElementById("txt");
const tableElement = document.getElementsByClassName("bordered-table")[0];
const buttonElement = document.getElementById("btn");



               
inputElement.focus();

buttonElement.addEventListener("click", function() {
    headerElement.style.display = "block";
    const inputValue = inputElement.value; 
    var deleteIcon = "<img src = delete-svgrepo-com.svg>"; 
    const newRow = tableElement.insertRow(-1);
    const newCell = newRow.insertCell(0);
    var div = document.createElement("div");
    div.innerHTML= inputValue + deleteIcon;
    div.style.width = "450px";
    newCell.appendChild(div);
    inputElement.value="";
    inputElement.focus()

})

inputElement.addEventListener("keydown", function(Event){
    if(Event.key === "Enter"){
        headerElement.style.display = "block";
    const inputValue = inputElement.value;
    var deleteIcon = "<img src = delete-svgrepo-com.svg>";
    const newRow = tableElement.insertRow(-1);
    const newCell = newRow.insertCell(0);
    var div = document.createElement("div");
    div.innerHTML= inputValue + deleteIcon;
    div.style.width = "450px";
    newCell.appendChild(div);
    inputElement.value="";
    inputElement.focus()

    }
    });

    const iconAll = document.querySelectorAll("deleletIcon");
    iconAll.forEach((deleteIcon) => {
        deleteIcon.addEventListener("click", () =>{
            tableElement=deleteIcon.closest("tr");
            if(tableElement){
                tableElement.remove()
            }
        })
        
    });
    


