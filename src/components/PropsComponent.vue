<template>
    <div>
        <h3>Props Component</h3>
        <p>The following values are coming from the parent component as props:</p>

        <div>
            <ul>
                <li>
                    <pre>header: {{ header }}</pre>
                </li>
                <li>
                    <pre>some-computer-val: {{ someComputedVal }}</pre>
                </li>
                <li>
                    <pre>date-time: {{ dateTime.toString() }}</pre>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            default: ''
        },
        someComputedVal: {
            type: Number,
            default: 0.0
        },
        dateTime: {
            type: Date,
            default: Date()
        }
    }
}
</script>