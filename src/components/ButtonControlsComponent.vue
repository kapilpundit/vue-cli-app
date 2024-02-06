<template>
    <div>
      <ButtonComponent display-text="-" @click="dispatchDecrement" />
      <ButtonComponent display-text="+" @click="dispatchIncrement" />
      <ButtonComponent display-text="Reset" @click="resetCounter" />
    </div>
</template>

<script>
import ButtonComponent from './Button.vue';

export default {
    components: {
        ButtonComponent
    },
    methods: {
        dispatchIncrement() {
            this.$store.dispatch('incrementCounter')
        },
        dispatchDecrement() {
            this.$store.dispatch('decrementCounter')
        },
        resetCounter() {
            this.$emit('resetCounter', 0);
        }
    }
}
</script>