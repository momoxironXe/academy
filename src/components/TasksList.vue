<script>
import '../styles/tasks_list.css'
import Icon from "/src/components/Icon.vue"

export default {
	components: {
		Icon
	},
	props: {
		tasks: Array
	},
	data() {
		return {
			eraseIcon: "src/assets/icons/eraser.svg",
			plusIcon: "src/assets/icons/plus.svg",
			textLabel: "Add Task",
			tasksNotEmpty: false
		}
	},
	emits: ["remove"],
	methods: {
		removeTask(toRemove) { this.$emit("remove", toRemove) }
	},
	beforeUpdate() {
		this.tasksNotEmpty = this.tasks.length > 0
	}
}
</script>

<template>
	<ul v-if="tasksNotEmpty">
		<li v-for="task in tasks" :key="task.getId()">
			<span>
				{{ task.getName() }}
			</span>
			<button type="button" @click="removeTask(task)">
				<Icon :svgPath="eraseIcon"/>
			</button>
		</li>
	</ul>
	<article v-else>
		<span>{{ textLabel }}</span>
		<Icon :svgPath="plusIcon"/>
	</article>
</template>