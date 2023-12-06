let counterElement = document.getElementById("counterValue")

function onIncrement() {
    let previouscountervalue = counterElement.textContent;
    let updatedcountervalue = parseInt(previouscountervalue) + 1;
    counterElement.textContent = updatedcountervalue;
    if (updatedcountervalue > 0) {
        counterElement.style.color = "green";
    } else if (updatedcountervalue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }



}

function onDecrement() {
    let previouscountervalue = counterElement.textContent;
    let updatedcountervalue = parseInt(previouscountervalue) - 1;
    counterElement.textContent = updatedcountervalue;
    if (updatedcountervalue > 0) {
        counterElement.style.color = "green";
    } else if (updatedcountervalue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }

}

function onReset() {

    updatedcountervalue = 0;
    counterElement.textContent = updatedcountervalue;
    counterElement.style.color = "black";
}