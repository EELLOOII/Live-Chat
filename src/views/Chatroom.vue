<template>
	<div class="container">
	<Navbar />
	<ChatWindow />
    <NewChatForm />
	</div>
</template>

<script>
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import getUser from "@/composables/getUser"
import Navbar from "@/components/Navbar.vue"
import { watch } from "vue"
import { useRouter } from "vue-router"

export default {
	components: { Navbar, NewChatForm, ChatWindow },
	setup() {
		const { user } = getUser()
		const router = useRouter()

		watch(user, () => {
			if (!user.value) {
        console.log("User is not logged in")				
				router.push({ name: 'welcome' })
			} else {
        console.log("User is logged in")
			}
		});

		return { user }
	},
};
</script>

<style>
</style>