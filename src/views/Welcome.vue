<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat"/>
      <p>Don't have an account yet?<span @click="showLogin = false"> Signup</span> instead</p>
      <!-- <button @click="showLogin = false">Sign up</button> -->

    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat"/>
     <p>Already Registered?<span @click="showLogin = true"> Login</span> instead</p>
    </div>
    <!-- <SignupForm /> -->
    <!-- <LoginForm /> -->
  </div>
</template>

<script>

import SignupForm from '../components/SignupForm.vue'
import LoginForm  from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'chatroom' })
    }

    return {
      showLogin,
      enterChat
    }
  }

}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;  
}
.welcome span:hover {
  color: #5ae4ca;
}
.welcome button {
  margin: 20px auto;
}
</style>