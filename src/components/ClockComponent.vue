<template>
    <div>
        <h2>{{ title }}</h2>

        <div> {{ currentTime }} </div>
    </div>
</template>

<script>

export default{
    name:"ClockComponent",
    data() {
        return {
            title:"My Clock (Added by Prem)",
            currentTime: ''
        }
    },
    props: {
        updateInterval: {
            type: Number,
            default: 1000 // default update interval in milliseconds (1 second)
        }
    },
    created() {
        this.updateClock();
        // Update the clock based on the specified interval
        setInterval(this.updateClock, this.updateInterval);
    },
    methods: {
        updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            this.currentTime = `${hours}:${minutes}:${seconds}`;
        }
    }
}
</script>