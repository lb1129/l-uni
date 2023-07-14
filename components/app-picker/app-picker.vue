<template>
	<view v-if="$slots.default" @click="open">
		<slot></slot>
	</view>
	<uni-popup ref="popup" type="bottom" background-color="#fff">
		<view class="app-picker-header">
			<text class="app-picker-header-item app-picker-header-cancel" @click="cancelHandler">{{$t('cancel')}}</text>
			<text class="app-picker-header-item app-picker-header-confirm" :style="{color: $theme}"
				@click="confirmHandler">{{$t('confirm')}}</text>
		</view>
		<picker-view immediate-change :value="innerValue" @change="pickerChangeHandler" class="app-picker-view"
			indicator-style="height: 50px">
			<picker-view-column class="app-picker-view-item">
				<view v-for="item in range" :key="itemIsObject ? item[rangeKey] : item">
					<slot v-if="$slots.render" name="render" :record="item"></slot>
					<text v-else>{{itemIsObject ? item[rangeKey] : item}}</text>
				</view>
			</picker-view-column>
		</picker-view>
	</uni-popup>
</template>

<script>
	import {
		isObject
	} from 'lodash-es'
	export default {
		name: "app-picker",
		emits: ['change', 'cancel'],
		props: {
			value: Number,
			rangeKey: String,
			range: {
				type: Array,
				default () {
					return []
				}
			}
		},
		options: {
			virtualHost: true
		},
		data() {
			return {
				innerValue: []
			}
		},
		computed: {
			itemIsObject() {
				return this.range[0] && isObject(this.range[0])
			}
		},
		methods: {
			open() {
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			},
			pickerChangeHandler(event) {
				this.innerValue = event.detail.value
			},
			cancelHandler() {
				this.$emit('cancel')
				this.close()
			},
			confirmHandler() {
				this.$emit('change', {
					detail: {
						value: this.innerValue[0]
					}
				})
				this.close()
			}
		},
		watch: {
			value: {
				handler(newValue) {
					this.innerValue = [newValue]
				},
				immediate: true
			}
		}
	}
</script>

<style lang="scss">
	.app-picker-header {
		position: relative;
		text-align: center;
		width: 100%;
		height: 45px;

		&-item {
			max-width: 50%;
			top: 0;
			padding: 0 14px;
			font-size: 17px;
			line-height: 45px;
			overflow: hidden;
			cursor: pointer;
		}

		&-cancel {
			float: left;
		}

		&-confirm {
			float: right;
		}

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			height: 1px;
			clear: both;
			border-bottom: 1px solid #e5e5e5;
			color: #e5e5e5;
			transform-origin: 0 100%;
			transform: scaleY(.5);
		}
	}

	.app-picker-view {
		width: 100%;
		height: 238px;

		&-item {
			font-size: 14px;
			line-height: 50px;
			text-align: center;
		}
	}
</style>