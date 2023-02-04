<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,
        time: Number,
    },
    methods: {
        onClick(){
            this.$emit('toggle-add-task')
        }
    }
}
</script>