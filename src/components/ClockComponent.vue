<template>
    <div>
        <h2>{{ title }}</h2>

        <div> {{ currentTime }} </div>
    </div>
</template>

<script>

import { ref, onMounted, onUnmounted } from 'vue';

export default{
    name:"ClockComponent",
    data() {
        return {
            title:"My Clock (Added by Prem)"
        }
    },
    setup() {
        const currentTime = ref(new Date().toLocaleTimeString());

        const updateTime = () => {
            currentTime.value = new Date().toLocaleTimeString();
        };

        // Update the time every second
        const intervalId = setInterval(updateTime, 1000);

        onMounted(() => {
            // Update the time immediately when the component is mounted
            updateTime();
        });

        onUnmounted(() => {
            // Clear the interval when the component is unmounted
            clearInterval(intervalId);
        });

        return {
            currentTime
        };
    }
}
</script>