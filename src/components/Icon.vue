<script>
import '../styles/icon.css'
import { readXML } from '../utils/utils';

export default {
	props: {
		svgPath: String
	},
	data() {
		return {
			svgIcon: ""
		}
	},
	async beforeCreate() {
		await readXML(this.svgPath, "image/svg+xml")
			.then((result) => {
				this.svgIcon = result.querySelector("svg").outerHTML
			})
			.catch((error) => {
				alertError(error)
			})
	},
	methods: {
		alertError(error) {
			alert("Error Loading Icon")
			console.error(error.message)
		}
	}
}
</script>

<template>
	<div v-html="svgIcon"></div>
</template>