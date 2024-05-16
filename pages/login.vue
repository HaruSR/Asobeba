<script setup lang="ts">
import { useAuth } from '~/composables/auth';

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');

const signIn = async (): Promise<void> => {
  await useAuth().signIn(email.value, password.value);
  if (useAuth().token.value) {
    console.log(useAuth().token.value)
    navigateTo('/');

  }
}

const signInGoogle = async () => {
  await useAuth().signInWithGoogle();
  if (useAuth().token.value) {
    navigateTo('/');
  }
}
</script>
<template>
  <div>
    <label>メールアドレス<input type="text" v-model="email" placeholder="email" name="email" /></label>
    <label>パスワード<input type="password" v-model="password" placeholder="password" name="password" /></label>
    <button @click="signIn">Sign In</button>
    <button @click="signInGoogle">Google Sign In</button>
  </div>
</template>
