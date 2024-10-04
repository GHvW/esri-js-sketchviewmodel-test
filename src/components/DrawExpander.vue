
<template>
    <div>
        <button @click="drawPoint">
            Point
        </button>
        <button @click="drawPolygon">
            Polygon
        </button>
    </div>
</template>

<script>
export default {
    name: "DrawExpander",
    props: {
        drawPolygon: {
            type: Function,
            required: true,
        },
        drawPoint: {
            type: Function,
            required: true,
        }
    },
    setup(props) {
        return {};
    }
}
</script>