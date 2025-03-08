const clearHistory = document.getElementById("clear-history");
const historyContainer = document.getElementById("history-container");
clearHistory.addEventListener("click", function(){
    historyContainer.innerHTML = "";
})