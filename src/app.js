import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#todo-app",
    data: {
      tasks: [
          {taskname: "Write the dam code", status: false, priority: "high"},
          {taskname: "Pull hair out", status: true, priority: "low"}
      ],
      newTask: "",
      priority: ""
    },
    methods: {
      addNewTask: function(){
        this.tasks.push({
          taskname: this.newTask,
          status: false,
          priority: this.priority
        });
        this.newTask = "";
        this.priority = "";
      }
    }
  });
});
