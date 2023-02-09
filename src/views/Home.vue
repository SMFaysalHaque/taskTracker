<template>
    <div v-show="showAddTask">
        <AddTask @add-task="addTask" />
    </div>
    <Tasks 
    @toggle-reminder="toggleReminder()" 
    @abcd="deleteTask" 
    :tasks="tasks" 
    />
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default {
    name: 'Home',
    props: {
        showAddTask: Boolean,
    },
    components: {
        Tasks,
        AddTask,
    },
    data () {
        return {
            tasks: [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 3rd at 11:00pm',
        reminder: false,
      },
    ],
        }
    },
    methods: {
    addTask(task){
        this.tasks = [...this.tasks, task]
        // this.tasks.push(task)
    },
    deleteTask(id){
        if(confirm('Are you sure?')){
            this.tasks = this.tasks.filter((task)=> task.id !== id)
        }
    },
    toggleReminder(id){
        this.tasks = this.tasks.map(
            (task) => task.id === id ? {...task, reminder: !task.reminder} : task
        )
    },
    }
}
</script>