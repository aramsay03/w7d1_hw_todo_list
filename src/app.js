import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#todo-app",
    data: {
      tasks: [
          {taskname: "Write the dam code", status: false},
          {taskname: "Pull hair out", status: true}
      ],
      newTask: ""
    },
    methods: {
      addNewTask: function(){
        this.tasks.push({
          taskname: this.newTask,
          status: false
        });
        this.newTask = "";
      }
    }
  });
});
