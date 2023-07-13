<template>
	<radio-group @change="radioChange">
		<label class="app-toggle-theme-item" v-for="(item, index) in themes" :key="item.value">
			<view class="app-toggle-theme-item-color" :style="{backgroundColor: item.value}"></view>
			<view>
				<radio :value="item.value" :checked="item.value === theme" />
			</view>
		</label>
	</radio-group>
</template>

<script>
	export default {
		name: "app-toggle-theme",
		data() {
			return {
				theme: "#1677ff",
				themes: [{
						text: "#1677ff",
						value: "#1677ff"
					},
					{
						text: "#f5222d",
						value: "#f5222d"
					},
					{
						text: '#fa541c',
						value: "#fa541c"
					}
				]
			};
		},
		created() {

		},
		methods: {
			radioChange(e) {
				if (this.theme !== e.detail.value) {
					this.theme = e.detail.value
				}
			}
		}
	}
</script>

<style lang="scss">
	.app-toggle-theme-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2px 0;

		&-color {
			width: 24px;
			height: 24px;
		}
	}
</style>