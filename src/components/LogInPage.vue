<template>
<form @submit.prevent="handleSubmit">
  <h2>Login</h2>
  <br>
  <label for="">Email</label>
  <input type="email" name="email" v-model="email" required> &nbsp;

  <label for="">Password</label>
  <input type="password" name="password" v-model="password" required> &nbsp;
  
  <button>Login</button>
  <div v-if="error">{{error}}</div>
  
</form>
</template>

<script setup>

    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import useLogin from '../composables/useLogin'

    const email = ref('')
    const password = ref('')

    const { login, error } = useLogin()
    const router = useRouter()

    const handleSubmit = async () => {
        await login(email.value, password.value)

        if(!error.value) {
            router.push('/')
        }
    }
</script>

<style scoped>

</style>