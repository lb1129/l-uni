<template>
	<!-- #ifdef H5 || APP -->
	<uni-section :title="$t('language')" type="line" padding>
		<app-toggle-locale></app-toggle-locale>
	</uni-section>
	<app-gap></app-gap>
	<!-- #endif -->
	<uni-section :title="$t('theme')" type="line" padding>
		<app-toggle-theme></app-toggle-theme>
	</uni-section>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			clickHandler() {

			}
		}
	}
</script>

<style>

</style>