<template>
	<h1>{{ message }}</h1>
	<button role="button" @click.prevent="count++">count is: {{ count }}</button>
	<p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
/* eslint-disable indent */

	"use strict";

	import { ref } from "vue";

	export default {
		props: {
			message: String
		},
		setup() {
			const count = ref(0);
			return { count };
		}
	};
</script>
