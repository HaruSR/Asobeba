<script lang="ts" setup>
import { useAuth } from '~/composables/auth';

definePageMeta({
  middleware: ['auth']
})

const hundleClick = () => {
  window.alert(useAuth().token.value);
}

</script>

<template>
  <div>
    Page: index
    <button @click="hundleClick">トークンを確認</button>
  </div>
</template>

<style scoped></style>
