<template>
    <header style = "border: 1px solid black">
        <h1> {{abd}} </h1>
        <Button 
        v-show="homePage"
        @toggle-add-task="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task'" 
        :color="showAddTask ? 'red' : 'green'" 
        />
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'MOGA',
    props: {
        abd: String,
        showAddTask: Boolean,
    },
    components: {
        Button
    },
    computed: {
        homePage() {
            if (this.$route.path === '/') {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>