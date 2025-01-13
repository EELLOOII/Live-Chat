<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName"/>
    <input type="email" required placeholder="email" v-model="email"/>
    <input type="password" required placeholder="password" v-model="password"/>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { auth } from '../firebase/config'

export default {
    setup() {
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            console.log(displayName.value, email.value, password.value)
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
            displayName,
            email,
            password,
            handleSubmit
        }
    }
}
</script>

<style>

</style>