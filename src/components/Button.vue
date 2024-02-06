<template>
    <button type="button" class="btn btn-outline-secondary">
        {{ displayText }}
    </button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        displayText: {
            type: String,
            default: 'Submit'
        }
    }
}
</script>