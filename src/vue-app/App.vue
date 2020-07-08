<template>
	<div id="app">
		<img alt="Vue logo" class="vue-logo" src="@/assets/logo.svg" />
		<HelloWorld message="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
/* eslint-disable indent */

	"use strict";

	export default {
		name: "App",
		components: {
			HelloWorld: () => import("@/components/HelloWorld.vue")
		}
	};
</script>

<style lang="scss">
	@charset "utf-8";

	@import "@/styles/variables";

	#app {
		font-family: $font-family;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		background-color: $background-color;
		color: $text-color;
		margin-top: 60px;
	}

	img.vue-logo {
		max-width: 200px;
	}
</style>
