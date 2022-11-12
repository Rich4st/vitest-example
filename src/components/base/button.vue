<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'base button',
  },
})
const buttonClick = () => {
  console.log('button clicked')
}

</script>

<template>
<div>
  <button @click="buttonClick">{{ title }}</button>
</div>
</template>
