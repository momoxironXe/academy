<script>
import '../styles/tasks_creator.css'
import Icon from "/src/components/Icon.vue"

export default {
	components: {
		Icon
	},
	data() {
		return {
			addIcon: "src/assets/icons/addon.svg",
			taskCreating: "",
			maxlength: 30
		}
	},
	emits: ["new_task"],
	methods: {
		addTask() {
			if (this.taskCreating.trim().length === 0) return

			this.$emit("new_task", this.taskCreating)

			this.taskCreating = ""
		}
	},
	computed: {
		maxlengthReached() {
			return this.taskCreating.length >= this.maxlength
		},
		maintainBackgroundColor(e) {
			console.log("here")
		}
	}
}
</script>

<template>
	<form @submit.prevent="addTask">
		<div>
			<input type="text" name="new_task" :maxlength="maxlength" v-model="taskCreating" :class="{ error: maxlengthReached }">
			<span v-if="maxlengthReached" class="error_message">Max Length is 30 Characters</span>
		</div>
		<button type="submit">
			<Icon :svgPath="addIcon"/>
		</button>
	</form>
</template>

<style>
.error {
	border-color: red;
	position: relative;
	top: 1.25vh;
}

.error_message {
	color: red;
	font-size: small;
	position: relative;
	top: 1.5vh;
	left: min(2vw, 50px);
	align-self: flex-start;
	justify-self: start;
}
</style>
