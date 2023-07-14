<template>
	<text :style="{fontSize: fontSize, ...extraStyle}" @click="clickHandler">
		<slot></slot>
	</text>
</template>

<script>
	export default {
		name: "app-text",
		emits: ['click'],
		props: {
			fontSize: {
				type: String,
				default: '14px'
			},
			likeLink: Boolean
		},
		options: {
			virtualHost: true
		},
		computed: {
			extraStyle() {
				let res = {}
				if (this.likeLink) {
					res.color = this.$theme
					res.cursor = 'pointer'
				}
				return res
			}
		},
		methods: {
			clickHandler(e) {
				this.$emit('click', e)
			}
		}
	}
</script>

<style>

</style>