<template>
    <div>
      {{ $store.state.count }} <sup>2</sup> = {{ $store.getters.getCounterSquare }}
    </div>
</template>

<script>
export default {
    name: "SquaredComponent",
}
</script>