<template>
	<div class="container">
		<Navbar />
	</div>
</template>

<script>
import getUser from "@/composables/getUser"
import Navbar from "@/components/Navbar.vue"
import { watch } from "vue"
import { useRouter } from "vue-router"

export default {
	components: { Navbar },
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