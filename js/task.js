
 const buttons = document.querySelectorAll(".completed-btn");
 const completedTask = document.getElementById("task-completed");
 const taskAssigned = document.getElementById("task-assigned");
 let convertedCompletedTask = parseInt(completedTask.innerText);
 let convertedTaskAssigned = parseInt(taskAssigned.innerText);
 console.log(completedTask,taskAssigned)
 for (let button of buttons ){
    button.addEventListener("click", function(event){
        alert("task updated")
         event.target.disabled = true;
         button.classList.add("bg-gray-400", "cursor-not-allowed");
         convertedCompletedTask++;
         completedTask.innerText =  convertedCompletedTask;
         convertedTaskAssigned--;
         taskAssigned.innerText = convertedTaskAssigned;


    })

 }

 
 