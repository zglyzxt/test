<template>
    <div class="check-btn">
        <input type="checkbox" :checked="isChecked" >
    </div>
</template>

<script>
export default {
    name:"CheckBtn",
    props:{
        isChecked: {
            type:Boolean,
            default:false
        }
    }

}
</script>

<style>

</style>


