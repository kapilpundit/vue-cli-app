<template>
  <div>
    <h1>{{ title }}</h1>

    <CounterComponent counter-color="red" />

    <SquaredComponent />

    <ButtonControlsComponent @reset-counter="resetCounter" />

    <PropsComponent
      header="I am a props component!"
      :some-computed-val="3.14"
      :date-time="dateTime"
    />

    <ButtonComponent display-text="Prem's Button" />

    <ClockComponent></ClockComponent>

    <!-- <input type="text" ref="name" />
    <button @click="handleClick">Click Me</button> -->
    
  </div>  
</template>

<script>
import CounterComponent from "./components/CounterComponent.vue";
import SquaredComponent from './components/SquaredComponent.vue';
import ButtonControlsComponent from './components/ButtonControlsComponent.vue';
import PropsComponent from "./components/PropsComponent.vue";
import ButtonComponent from './components/Button.vue'
import ClockComponent from "./components/ClockComponent.vue";

export default {
  name: 'App',
  components: {
    CounterComponent,
    SquaredComponent,
    ButtonControlsComponent,
    PropsComponent,
    ButtonComponent,
    ClockComponent,
},
  data() {
    return {
      title: 'My First Vue App!',
    }
  },
  computed: {
    dateTime() {
      return new Date()
    }
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    resetCounter(val) {
      // Action dipatched with payload 'val'
      this.$store.dispatch('resetConterAction', val);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>