const buttons = document.querySelectorAll(".completed-btn");
const completedTask = document.getElementById("task-completed");
const taskAssigned = document.getElementById("task-assigned");
const historySection = document.getElementById("history-container");

let taskTitle = document.querySelectorAll(".task-title");

let convertedCompletedTask = parseInt(completedTask.innerText);
let convertedTaskAssigned = parseInt(taskAssigned.innerText);
let totalTask = convertedCompletedTask + convertedTaskAssigned;


for (let button of buttons) {
  button.addEventListener("click", function (event) {
    alert("Board updated successfully");
    event.target.disabled = true;
    button.classList.add("bg-gray-400", "cursor-not-allowed");
    convertedCompletedTask++;
    completedTask.innerText = convertedCompletedTask;
    convertedTaskAssigned--;
    taskAssigned.innerText = convertedTaskAssigned;

    const taskIndex = [...buttons].indexOf(button);  
    const taskTitleText = taskTitle[taskIndex].innerText; 
    const currentTime = new Date().toLocaleString();

    const p = document.createElement("p");
    p.innerText = `You have completed the task ${taskTitleText} at ${currentTime}`;
    p.classList.add("bg-[rgba(55,82,253,0.2)]", "p-4", "mt-2", "rounded-xl");
    historySection.appendChild(p);

    if (convertedCompletedTask === totalTask){
      alert("congrats ! you have completed all the current task")
    }

  });
}
