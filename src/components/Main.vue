<script>
import "../styles/main.css";
import TasksList from "/src/components/TasksList.vue";
import TaskCreator from "/src/components/TaskCreator.vue";
import Task from "/src/utils/task.js";

var a;
export default {
  components: {
    TasksList,
    TaskCreator,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTodo(task) {
      this.tasks.push(task);
      this.tasks = this.tasks.slice();
    },
    removeTask(toRemove) {
      this.tasks = this.tasks.filter(
        (task) => task.getId() != toRemove.getId()
      );
    },
    createTask(name) {
      return new Task(this.tasks.length, name);
    },
  },
};
</script>

<template>
  <main>
    <section>
      <TaskCreator @new_task="(new_task) => addTodo(createTask(new_task))" />
    </section>
    <aside>
      <TasksList :tasks="tasks" @remove="(remove) => removeTask(remove)" />
    </aside>
  </main>
</template>
