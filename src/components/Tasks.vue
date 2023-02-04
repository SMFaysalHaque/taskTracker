<template>
    <div style = "border: 1px solid red">
        <div :key="task.id" v-for="task in tasks"> 
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('abcd', task.id)" :task="task" />
    </div>
    </div>
</template>

<script>
import Task from './Task'


export default {
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    components: {
        Task
    },
    emits: ['delete-task', 'toggle-reminder'],
}
</script>