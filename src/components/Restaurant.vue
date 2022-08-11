<script setup>
import { onMounted, toRefs } from 'vue';

const props = defineProps({
  array: Object
})

const { array } = toRefs(props)

onMounted ( async () => {
    
    console.log(array)
    
})
</script>
<template>
    <div>
        {{ array }}
    </div>
</template>