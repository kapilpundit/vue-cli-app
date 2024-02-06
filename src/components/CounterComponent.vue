<template>
    <div>
        <h2>{{ title }}</h2>

        <div class="counter-output"
            :class="{
                'counter-green': counterColor === 'green',
                'counter-red': counterColor === 'red',
                'counter-default': ['green', 'red'].indexOf(counterColor) == -1
            }">
                {{ $store.state.count }}
        </div>
    </div>
    
</template>

<script>
export default {
    name: "CounterComponent",
    props: {
        counterColor: {
            type: String,
            default: "green"
        }
    },
    data() {
        return {
            title: "Increase counter!"
        }
    }
}
</script>

<style scoped>
div > div {
    font-size: 24px;
}
</style>