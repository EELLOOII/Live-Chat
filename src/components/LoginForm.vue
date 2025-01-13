<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email"/>
    <input type="password" required placeholder="password" v-model="password"/>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { auth } from '../firebase/config'

export default {
    setup() {
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            console.log(email.value, password.value)
            // try {
            //     await auth.createUserWithEmailAndPassword(email.value, password.value)
            //     const user = auth.currentUser
            //     await user.updateProfile({
            //         displayName: displayName.value
            //     })
            // } catch (error) {
            //     console.error(error.message)
            // }
        }

        return {
            email,
            password,
            handleSubmit
        }
    }
}
</script>

<style>

</style>