import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#todo-app",
    data: {
      tasks: [
          {taskname: "Write the dam code", isComplete: false, priority: "high"},
          {taskname: "Pull hair out", isComplete: true, priority: "complete"},
          {taskname: "Test data 1", isComplete: false, priority: "medium"},
          {taskname: "PTest data 2", isComplete: false, priority: "low"}
      ],
      newTask: "",
      priority: ""
    },
    methods: {
      addNewTask: function(){
        // if this.priority === null ? this.priority.push("low");
        this.tasks.push({
          taskname: this.newTask,
          isComplete: false,
          priority: this.priority
        });
        this.newTask = "";
        this.priority = "";
      },
      taskChecked: function(index){
        this.tasks[index].priority = "complete";
      }
    }
  });
});
