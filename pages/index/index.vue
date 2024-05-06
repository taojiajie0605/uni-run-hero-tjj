<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="heroListBox">
			<view 
				v-for="(item,index) in heroObjList"
                :key="index" 
				class="heroItem"
				:class="{'checkItem': defCheckHero === index}"
				@click="()=> {defCheckHero = index}"
			>
				<image class="pimg" :src="item.url"></image>
				<view class="qline">
					<view class="qleft">英雄名称：</view>
					<view class="qRight">{{item.name}}</view>
				</view>
				<view :class="{'qW': index === 0}" class="qline">
					<view class="qleft">移动速度：</view>
					<view>{{item.speed}}</view>
				</view>
				<view :class="{'qW': index === 1}" class="qline">
					<view class="qleft">攻速：</view>
					<view>{{item.attackSpeed}}</view>
				</view>
				<view :class="{'qW': index === 2}" class="qline">
					<view class="qleft">攻击距离：</view>
					<view>{{item.attackLength}}</view>
				</view>
				<view :class="{'qW': index === 3}" class="qline">
					<view class="qleft">血量：</view>
					<view>{{item.totalblood}}</view>
				</view>
				<view :class="{'qW': index === 4}" class="qline">
					<view class="qleft">幸运值：</view>
					<view>{{item.lucky}}</view>
				</view>
				<view :class="{'qW': index === 5}" class="qline">
					<view class="qleft">初始武器数量：</view>
					<view>{{item.arms}}</view>
				</view>
			</view>
		</view>
		<view class="btn-area">
			<u-button @click="toGamePage" type="primary">进入游戏</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defCheckHero: 0,
				heroObjList: [
					{
						name: '金灿灿',
						url: '/static/hero/hero3.png',
						speed: 6, // 英雄移动速度
						attackSpeed: 1, // 攻速
						attackLength: 1, // 攻击距离
						bloodPercent: 100, // 当前血条
						totalblood: 100, // 总血条
						lucky: 1, // 幸运值
						arms: 5, // 武器数量
					},
					{
						name: '红彤彤',
						url: '/static/hero/hero1.png',
						speed: 4, // 英雄移动速度
						attackSpeed: 2, // 攻速
						attackLength: 1, // 攻击距离
						bloodPercent: 100, // 当前血条
						totalblood: 100, // 总血条
						lucky: 1, // 幸运值
						arms: 5, // 武器数量
					},
					{
						name: '黑黝黝',
						url: '/static/hero/hero2.png',
						speed: 4, // 英雄移动速度
						attackSpeed: 1, // 攻速
						attackLength: 2, // 攻击距离
						bloodPercent: 100, // 当前血条
						totalblood: 100, // 总血条
						lucky: 1, // 幸运值
						arms: 5, // 武器数量
					},
					{
						name: '绿油油',
						url: '/static/hero/hero6.png',
						speed: 4, // 英雄移动速度
						attackSpeed: 4, // 攻速
						attackLength: 1, // 攻击距离
						bloodPercent: 2000000, // 当前血条
						totalblood: 2000000, // 总血条
						lucky: 1, // 幸运值
						arms: 5, // 武器数量
					},
					{
						name: '粉扑扑',
						url: '/static/hero/hero4.png',
						speed: 4, // 英雄移动速度
						attackSpeed: 1, // 攻速
						attackLength: 1, // 攻击距离
						bloodPercent: 100, // 当前血条
						totalblood: 100, // 总血条
						lucky: 2, // 幸运值
						arms: 5, // 武器数量
					},
					{
						name: '蓝晶晶',
						url: '/static/hero/hero5.png',
						speed: 4, // 英雄移动速度
						attackSpeed: 1, // 攻速
						attackLength: 1, // 攻击距离
						bloodPercent: 100, // 当前血条
						totalblood: 100, // 总血条
						lucky: 1, // 幸运值
						arms: 6, // 武器数量
					},
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			toGamePage() {
				//在页面设置缓存
				const checkHero = this.heroObjList[this.defCheckHero];
				uni.setStorageSync('checkHero',JSON.stringify(checkHero))
				// 跳转新页面
				uni.navigateTo({
					url: '/pages/rampageHero/rampageHero?id=1&name=uniapp'
				});
			}
		}
	}
</script>

<style lang="scss">
	uni-page-body {
		height: 100%;
		overflow-y: scroll;
	}
	page {
		height: 100%;
		overflow-y: scroll;
	}
	.content {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: flex-start;
		padding-bottom: 150rpx;
		.btn-area {
			width: 375rpx;
			margin-top: 20rpx;
		}
	}
	.heroListBox {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-flow: wrap;
		.heroItem {
			border: 5rpx solid black;
			margin-top: 20rpx;
			width: 350rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: column;
			.pimg {
				width: 150rpx;
				height: 150rpx;
			}
			.qline {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.qW {
				color: #e84225;
				font-weight: bold;
			}
		}
		.checkItem {
			border-color: red;
			border-width: 6px;
			background-color: #ccc;
		}
	}
</style>
