<template>
<form @submit.prevent="handleSubmit">
  <label for="">Email</label>
  <input type="email" name="email" v-model="email" required>

  <label for="">Password</label>
  <input type="password" name="password" v-model="password" required> 
  
  <button>Sign Up</button>
  <div v-if="error">{{ error }}</div>
</form>
</template>

<script setup>

    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import useSignup from '../composables/useSignup'

    const email = ref('')
    const password = ref('')

    const { signup, error } = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
        await signup(email.value, password.value)

        if(!error.value) {
            router.push('/')
        }
    }
</script>

<style>

</style>