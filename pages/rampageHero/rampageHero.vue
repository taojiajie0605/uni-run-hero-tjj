<template>
	<view class="content">
		<!-- 游戏开始倒计时 -->
		<u-overlay :show="showOverlay">
			<view class="warp">
				<view class="startText">游戏即将开始</view>
				<view v-if="stopText !== -1" class="startNum">{{stopText}}</view>
			</view>
		</u-overlay>
		<!-- 游戏结束 -->
		<u-overlay :show="gameOverOverlay">
			<view class="warp">
				<view class="startText">游戏结束</view>
				<view class="startNum">得分：{{killCount}}</view>
				<view class="toGameHome">
					<u-button @click="toGameHome" type="primary">返回首页</u-button>
				</view>
			</view>
		</u-overlay>
		<!-- 顶部 -->
		<view class="topBar">
			<!-- 返回按钮 -->
			<view class="pause">
				<image @click="toGameHome" class="pimg" src="/static/back.png"></image>
			</view>
			<view class="killCount">得分：{{killCount}}</view>
			<view class="killCount">攻速倍率：{{heroObj.attackSpeed.toFixed(1)}}</view>
			<view class="bloodPercent">
				<view :style="{width: barWidth, backgroundColor: barColor}" class="bloodPercentContent"></view>
				<view :style="{color: barColor}" class="bloodPercentText">{{heroObj.bloodPercent}}/{{heroObj.totalblood}}</view>
			</view>
			<!-- 暂停按钮 -->
			<view class="pause">
				<image @click="() => {pauseOrRun = false}" v-if="pauseOrRun" class="pimg" src="/static/pause.png"></image>
				<image @click="() => {pauseOrRun = true}" v-else class="pimg" src="/static/run.png"></image>
			</view>
		</view>
		<!-- 底部摇杆 -->
		<view class="rocker" :style="{width: rocketWidth, height: rocketHeight, top: rocketTop, left: rocketLeft}"></view>
		<view class="rockerCenter" :style="{width: rocketCenterWidth, height: rocketCenterHeight, top: rocketCenterTop, left: rocketCenterLeft}"></view>
		<canvas 
			:style="{backgroundImage: 'url('+imageURL+')'}" 
			:class="{'contentShadow': heroObj.bloodPercent <= heroObj.totalblood / 4}"
			canvas-id="myCanvas" 
			id="myCanvas" 
			tabindex="0"
			@touchstart.stop="(e)=>{
				e.preventDefault();
				touchEvent(e.changedTouches[0].x, e.changedTouches[0].y);
			}" 
			@touchmove.stop="(e)=>{
				e.preventDefault();
				touchEvent(e.changedTouches[0].x, e.changedTouches[0].y);
			}" 
			@touchend.stop="(e)=>{
				e.preventDefault();
				touchend();
			}"
		></canvas>
	</view>
</template>

<script>
	import { selectFrom, powAndSqrt, throttle } from '@/utils/methods.js';
	import { fillRoundRect } from './methods.js';
	import { bg1 } from '../../static/backImages/bg.js';

	export default {
		data() {
			return {
			  imageURL: bg1,
			  isPortrait: false, // 是否横屏
			  windowWidth: 750,
			  windowHeight: 750,
			  totalWid: 75,
			  
			  pauseOrRun: true, // 暂停或者运行
			  timer: 0, // 3秒倒计时
			  clock: 0, // 渲染周期
			  ctx: 0, // 画布
			  
			  gameOverOverlay: false, // 游戏结束遮罩
			  showOverlay: true, // 游戏开始遮罩
			  stopText: -1, //开始倒计时文案
			  
			  // 杀敌数量
			  killCount: 0,
			  // 人物属性
			  heroObj: {
				url: '/static/hero/hero2.png',
				rate: 0, // 旋转度数
				x: 0,
				y: 0,
				w: 10,
				h: 10,
				speed: 4, // 英雄移动速度
				attackSpeed: 1, // 攻速
				attackLength: 1, // 攻击距离
				bloodPercent: 100, // 当前血条
				totalblood: 100, // 总血条
				lucky: 1, // 幸运值
				arms: 3, // 武器数量
			  },
			  // 怪物属性
			  monster: [],
			  // 武器属性
			  arms: [
			  	{url: '/static/arms/arms1.png', hUrl: '/static/photon/p1.png', time: 60, type: 1},
			  	{url: '/static/arms/arms2.png', hUrl: '/static/photon/p1.png', time: 50, type: 1},
				{url: '/static/arms/arms3.png', hUrl: '/static/photon/p1.png', time: 40, type: 1},
				{url: '/static/arms/arms4.png', hUrl: '/static/photon/p1.png', time: 30, type: 1},
				{url: '/static/arms/arms5.png', hUrl: '/static/photon/p1.png', time: 20, type: 1},
				{url: '/static/arms/arms6.png', hUrl: '/static/photon/p1.png', time: 10, type: 1},
			  ],
			  // 子弹列表
			  hList: [], // {x,y,w,h,speed,toX,toY}
			  bloodPack: [], // 回血包列表
			  attackSpeedList: [], // 攻速包列表
			  innerAudioContextHeart: 0, // 血条低于25时的心动声音
			  
			  // 键盘属性(控制人物移动方向)
			  top: 0, // 上下
			  bottom: 0, // 上下
			  left: 0, // 左右
			  top: 0, // 左右
			  keyControl: 0, // 空格键
			  // 模拟手柄
			  handleCenterX: 0, // 手柄中心
			  handleCenterY: 0,
			  touchX: 0, // 当前用户手中心
			  touchY: 0,
			}
		},
		watch: {
			// 监听暂停或者开始
		    pauseOrRun(newValue, oldValue) {
		      this.pauseOrRunFunc(newValue);
		    },
			// 监听血条
			'heroObj.bloodPercent'(newValue, oldValue) {
				// 创建内部音频上下文
				if (this.innerAudioContextHeart === 0) {
					this.innerAudioContextHeart = uni.createInnerAudioContext();
					this.innerAudioContextHeart.src = '/static/sound/heart.mp3';
					this.innerAudioContextHeart.loop = true // 循环
				}
				if (newValue <= this.heroObj.totalblood / 4 && newValue > 0) {
					// 播放音频
					this.innerAudioContextHeart.play();
				} else {
					this.innerAudioContextHeart.pause();
				}
				
				// 游戏结束
				if (newValue === 0) {
					this.gameOverFunc();
				}
			},
		},
		computed: {
			// 血条长度
			barWidth() {
				return `${this.heroObj.bloodPercent / this.heroObj.totalblood * 100}%`;
			},
			// 血条颜色
			barColor() {
				let color = 'rgba(0, 152, 0, 1.0)';
				if (this.heroObj.bloodPercent <= this.heroObj.totalblood / 4) {
					color = 'rgba(248, 76, 62, 1.0)';
				} else {
					color = 'rgba(0, 152, 0, 1.0)';
				}
				return color;
			},
			// 摇杆直径
			rocketWidth() {
				return `${this.totalWid / 3 / this.windowWidth * 100}%`;
			},
			rocketHeight() {
				return `${this.totalWid / 3 / this.windowHeight * 100}%`;
			},
			// 摇杆位置
			rocketTop() {
				return `${(this.handleCenterY - this.totalWid / 6) / this.windowHeight * 100}%`;
			},
			rocketLeft() {
				return `${(this.handleCenterX - this.totalWid / 6) / this.windowWidth * 100}%`;
			},
			
			// 摇杆中心圈的直径
			rocketCenterWidth() {
				return `${this.totalWid / 6 / this.windowWidth * 100}%`;
			},
			rocketCenterHeight() {
				return `${this.totalWid / 6 / this.windowHeight * 100}%`;
			},
			// 摇杆中心圈的摇杆位置
			rocketCenterTop() {
				let trueY = this.touchY;
				if (this.touchY - this.handleCenterY < -this.totalWid / 6) trueY = this.handleCenterY - this.totalWid / 6;
				if (this.touchY - this.handleCenterY > this.totalWid / 6) trueY = this.handleCenterY + this.totalWid / 6;
				return `${(trueY - this.totalWid / 12) / this.windowHeight * 100}%`;
			},
			rocketCenterLeft() {
				let trueX = this.touchX;
				if (this.touchX - this.handleCenterX < -this.totalWid / 6) trueX = this.handleCenterX - this.totalWid / 6;
				if (this.touchX - this.handleCenterX > this.totalWid / 6) trueX = this.handleCenterX + this.totalWid / 6;
				return `${(trueX - this.totalWid / 12) / this.windowWidth * 100}%`;
			},
		},
		onLoad() {
			// 监听横屏竖屏
		   //  uni.onWindowResize((res) => {
		   //    this.isPortrait = res.size.windowWidth > res.size.windowHeight;

			  // // if (res.size.windowWidth > res.size.windowHeight) {
			  // // 	// 横屏
			  // // 	console.log('landscape横屏');
			  // // } else {
			  // // 	// 竖屏
			  // // 	console.log('portrait竖屏');
			  // // }
			  // this.windowWidth = res.size.windowWidth;
			  // this.windowHeight = res.size.windowHeight;
			  
			  // const wid = Math.min(res.size.windowWidth, res.size.windowHeight) / 10;
			  // // console.log('宽高', res.size.windowWidth, res.size.windowHeight, wid);
			  // this.heroObj.w = wid;
			  // this.heroObj.h = wid;
			  // this.heroObj.x = res.size.windowWidth / 2 - wid/2;
			  // this.heroObj.y = res.size.windowHeight / 2 - wid/2;
			  
			  // this.draw();
		   //  })
		   
		   //在目的页面读取并销毁
		   var checkHero = JSON.parse(uni.getStorageSync("checkHero"));
		   // console.log('1data111', checkHero)
		   uni.removeStorage("checkHero")
		   this.heroObj = {...this.heroObj, ...checkHero}
		},
		
		onReady() {
			this.ctx = uni.createCanvasContext('myCanvas', this);
			let that = this;
			// 获取屏幕宽高
			uni.getSystemInfo({
			    success: function (res) {
					console.log('22222', res);
					// 设置屏幕宽高
					that.windowWidth = res.windowWidth;
					that.windowHeight = res.windowHeight;
					
					// 设置英雄属性
					that.totalWid = Math.min(res.windowWidth, res.windowHeight);
					const wid = Math.min(res.windowWidth, res.windowHeight) / 10;
					that.heroObj.w = wid;
					that.heroObj.h = wid;
					that.heroObj.x = res.windowWidth / 2 - wid/2;
					that.heroObj.y = res.windowHeight / 2 - wid/2;
					
					that.createArms(); // 生成武器
					that.createMonster(10); // 生成怪物
					that.createBloodPack(1 * that.heroObj.lucky); // 生成血包
					that.createAttackSpeedList(1 * that.heroObj.lucky); // 生成攻速包
					// 监听键盘输入
					// that.liskeydown();
					// 初始化手柄位置
					// console.log('11res.windowHeight', res.windowHeight)
					that.handleCenterX = wid * 3.5;
					that.handleCenterY = res.windowHeight - wid * 3.5;
					// 初始化手位置
					that.touchX = wid * 3.5;
					that.touchY = res.windowHeight - wid * 3.5;
					
					// 3秒倒计时
					let t = 3;
					that.timer = setInterval(function(){
							if (t !== 0) {
								that.stopText = t;
								that.playAudio('/static/sound/time.mp3');
							} else {
								that.stopText = '开始！'
								that.playAudio('/static/sound/start.mp3');
							}
							t--;
							if(t<0){
								if (that.timer) {
									clearInterval(that.timer);
									that.timer = null;
								}
								that.drawClock();	
								that.showOverlay = false;
							}
						}, 1000) 
					
			    }
			});

		},
		onUnload() {
			// console.log('11111onUnload')
			this.stopClock();
		},
		
		methods: {
			drawClock() {
				if (this.clock) return;
				this.clock = setInterval(() => {
					this.startDraw();
				}, 1000 / 60);
			},
			stopClock() {
				// console.log('进来了222222', this.clock)
				if (this.clock) {
					clearInterval(this.clock);
					this.clock = null;
				}
			},
			
			startDraw() {
				// 绘制分数
				// this.drawText(`分数：${this.killCount}`, this.windowWidth / 10, this.windowWidth / 14, "green", "red");
				// 绘制血条数值
				// this.drawText(`${this.heroObj.bloodPercent}/${100}`, this.windowWidth * 2 / 3, this.windowWidth / 14, "red", "blue");
				// 绘制人物血条
				// this.drawBloodBar(
				// 	{
				// 		x: this.windowWidth / 3, 
				// 		y: this.windowWidth / 20,
				// 		w: this.windowWidth / 3,
				// 		h: this.windowWidth / 30,
				// 		r: this.windowWidth / 60,
				// 		bc: 'rgba(1, 1, 1, 0.3)',
				// 		fc: this.heroObj.bloodPercent <= 25 ? 'rgba(250, 0, 0, 1.0)' : 'rgba(0, 238, 0, 1.0)',
				// 		p: this.heroObj.bloodPercent,
				// 	}
				// );
				this.drawHreo(); // 绘制人物
				this.drawArms(); // 绘制武器
				this.drawMonster(); // 绘制怪物
				this.drawBloodPack(); // 绘制血包
				this.drawAttackSpeedList(); // 绘制闪电
				this.createPhoton(); // 生成子弹
				this.drawPhoton(); // 绘制子弹
				this.ctx.draw(); // 绘制画布
			},

			// 绘制人物
			drawHreo() {
				// console.log('11111111', this.heroObj, this.windowWidth);
				this.heroObj.rate ++; // 修改旋转角度
				this.controlHeroMove(); // 修改xy移动人物
				this.rotate(this.heroObj); // 旋转人物
			},
			
			// 生成武器
			createArms() {
				this.arms.splice(this.heroObj.arms); // 武器数量
				for (let key in this.arms) {			
					let ax = this.heroObj.x + this.heroObj.w * Math.cos(key * 2*Math.PI / this.heroObj.arms);
					let ay = this.heroObj.y + this.heroObj.h * Math.sin(key * 2*Math.PI / this.heroObj.arms);
					this.arms[key].x = ax;
					this.arms[key].y = ay;
					this.arms[key].w = this.heroObj.w * 0.8;
					this.arms[key].h = this.heroObj.h * 0.8;
				}
			},
			// 绘制武器
			drawArms() {
				// console.log('11111',this.arms);
				// 绘制武器
				for (let key in this.arms) {
					this.arms[key].time--; // 武器时间冷却
					// console.log('3333333keykey', key, this.arms[key].time);
					let ax = this.heroObj.x + this.heroObj.w * Math.cos(key * 2*Math.PI / this.heroObj.arms);
					let ay = this.heroObj.y + this.heroObj.h * Math.sin(key * 2*Math.PI / this.heroObj.arms);
					this.arms[key].x = ax;
					this.arms[key].y = ay;
					
					// 发射子弹的时候武器60度抖动
					let rate = key * 60;
					if (this.arms[key].time <= 120 / this.heroObj.attackSpeed && this.arms[key].time >= 90 / this.heroObj.attackSpeed) {
						rate = key * 60 + 60;
					}
					// 旋转武器
					this.rotate({
						url: this.arms[key].url,
						x: ax,
						y: ay,
						w: this.arms[key].w,
						h: this.arms[key].h,
						rate: rate,
					});				
				}	
			},
			
			// 生成子弹
			createPhoton() {
				// 攻击距离
				let hLength = this.heroObj.attackLength * this.totalWid / 3;
				let hw = this.heroObj.w * 0.2;
				let hh = this.heroObj.h * 0.2;

				for (let mitem of this.monster) {
					for (let key in this.arms) {
						// 武器位置
						let ax = this.arms[key].x;
						let ay = this.arms[key].y;
						let nowLength = powAndSqrt(ax-mitem.x, ay-mitem.y); // 当前怪物和子弹距离
						// 已冷却好时间且在攻击范围内
						if (this.arms[key].time <= 0 && nowLength <= hLength) {
							// console.log('3333333key', key, this.arms[key].time);
							this.hList.push({
								url: this.arms[key].hUrl,
								x: ax,
								y: ay,
								w: hw,
								h: hh,
								toX: ax + (mitem.x - ax) * hLength / nowLength,
								toY: ay + (mitem.y - ay) * hLength / nowLength,
								speed: 8,
							})
							this.arms[key].time = 120 / this.heroObj.attackSpeed;
							// 播放子弹射击的声音
							throttle(() => {this.playAudio('/static/sound/shot.mp3')}, 120)();
							break;
						}
					}
				}
			},
			
			// 移动子弹
			drawPhoton() {
				// 移动子弹
				if (this.hList.length <= 0) return;
				// console.log('1111111', this.arms[key].hList);
				for (let hkey in this.hList) {
					let hitem = this.hList[hkey];
					// 向射击目标点移动
					let nowX = hitem.x;
					let nowY = hitem.y;
					let xLength = hitem.x - hitem.toX;
					let yLength = hitem.y - hitem.toY;
					let xieLength = powAndSqrt(xLength, yLength); // 子弹当前位置和子弹目标位置的斜边
					nowX = hitem.x - hitem.speed * xLength / xieLength;
					nowY = hitem.y - hitem.speed * yLength / xieLength;
					
					this.hList[hkey].x = nowX;
					this.hList[hkey].y = nowY;
					
					this.ctx.drawImage(hitem.url, hitem.x, hitem.y, hitem.w, hitem.h);
					
					// console.log('11111111', xLength, yLength, powAndSqrt(xLength, yLength))
					// 超出射程删除子弹
					if (xieLength <= hitem.speed){
						this.hList.splice(hkey, 1);
					}
					// 子弹怪物碰撞检测
					for (let mkey in this.monster) {
						let mitem = this.monster[mkey]
						if (nowX > mitem.x && nowX < mitem.x + mitem.w && nowY > mitem.y && nowY < mitem.y + mitem.h) {
							this.hList.splice(hkey, 1);
							// 扣血条
							if (mitem.bloodPercent - 10 <=0) {
								mitem.bloodPercent = 0;
								this.monster.splice(mkey, 1);
								this.createMonster(1);
								this.killCount++;
							} else {
								mitem.bloodPercent = mitem.bloodPercent - 10;
							}
						}
					}
					
				}
			},
			
			// 生成怪物
			createMonster(n) {
				let bloodPercent = 10;
				if (this.killCount > 50) {
					bloodPercent = 30;
				}
				if (this.killCount > 100) {
					bloodPercent = 50;
				} 
				if (this.killCount > 200) {
					bloodPercent = 80;
				} 
				if (this.killCount > 300) {
					bloodPercent = 120;
				} 
				if (this.killCount > 400) {
					bloodPercent = 160;
				} 
				if (this.killCount > 500) {
					bloodPercent = 200;
				} 
				if (this.killCount > 600) {
					bloodPercent = 250;
				} 
				if (this.killCount > 700) {
					bloodPercent = 300;
				} 
				if (this.killCount > 800) {
					bloodPercent = 350;
				} 
				if (this.killCount > 900) {
					bloodPercent = 400;
				} 
				if (this.killCount > 1000) {
					bloodPercent = 500;
				} 
				for (let i = 0; i < n; i++) {
					this.monster.push(
						{
							url: `/static/monster/m${selectFrom(1,6)}.png`,
							x: this.windowWidth * selectFrom(5,95) / 100,
							y: this.windowHeight * selectFrom(5,95) / 100,
							w: this.heroObj.w * 0.8,
							h: this.heroObj.h * 0.8,
							rate: 0, // 旋转角度
							lr: 1, // 旋转方向
							speed: 1, // 速度
							bloodPercent: bloodPercent, // 当前血条
							totalblood: bloodPercent, // 总血条
						}
					)
				}
			},
			
			// 绘制怪物
			drawMonster() {
				for (let key in this.monster) {
					// 怪物向英雄靠近
					let nowX = this.monster[key].x;
					let nowY = this.monster[key].y;
					let xLength = this.heroObj.x - this.monster[key].x;
					let yLength = this.heroObj.y - this.monster[key].y;
					let xieLength = powAndSqrt(xLength, yLength); // 怪物和人物的斜边
					
					// 向人物靠近
					nowX = nowX + this.monster[key].speed * xLength / xieLength;
					nowY = nowY + this.monster[key].speed * yLength / xieLength;
					
					this.monster[key].x = nowX;
					this.monster[key].y = nowY;
					// 旋转怪物并绘制怪物
					if (this.monster[key].rate >= 15) this.monster[key].lr = -1;
					if (this.monster[key].rate <= -15) this.monster[key].lr = 1;
					this.monster[key].rate +=this.monster[key].lr;
					this.rotate({
						url: this.monster[key].url,
						x: nowX,
						y: nowY,
						w: this.monster[key].w,
						h: this.monster[key].h,
						rate: this.monster[key].rate,
					});
					// 绘制怪物血条
					this.drawBloodBar(
						{
							x: nowX - 5,
							y: nowY - 5,
							w: this.monster[key].w + 10,
							h: this.monster[key].h / 8,
							// r: 0,
							bc: 'rgba(1, 1, 1, 0.3)',
							fc: 'rgba(250, 0, 0, 1.0)',
							p: this.monster[key].bloodPercent / this.monster[key].totalblood,
						}
					);
					
					// console.log('111111111111', nowX, this.heroObj.x + this.heroObj.w/2)
					// 碰到英雄以后删除怪物，并且重新生成怪物
					if ((nowX <= this.heroObj.x + this.heroObj.w/2 && nowX >= this.heroObj.x - this.heroObj.w/2)
					    &&
					   (nowY <= this.heroObj.y + this.heroObj.h/2 && nowY >= this.heroObj.y - this.heroObj.h/2)) {
						 // 播放扣血的声音
						 this.playAudio('/static/sound/blood.mp3');
						 // 扣血条
						 if (this.heroObj.bloodPercent - 10 <=0) {
							this.heroObj.bloodPercent = 0;
						 } else {
							this.heroObj.bloodPercent = this.heroObj.bloodPercent - 10;
						 }
						 // 删除怪物
						 this.monster.splice(key,1);
						 this.createMonster(1);
					};
				}
			},

			// 生成回血包
			createBloodPack(n) {
				for (let i = 0; i < n; i++) {
					this.bloodPack.push(
						{
							url: '/static/tool/leaf.png',
							x: this.windowWidth * selectFrom(5,95) / 100,
							y: this.windowHeight * selectFrom(5,95) / 100,
							w: this.heroObj.w * 0.8,
							h: this.heroObj.h * 0.8,
							rate: 0, // 旋转角度
							lr: 1, // 旋转方向
						}
					)
				}
			},
			
			// 绘制血包
			drawBloodPack() {
				for (let key in this.bloodPack) {
					// 旋转血包并绘制血包
					if (this.bloodPack[key].rate >= 15) this.bloodPack[key].lr = -1;
					if (this.bloodPack[key].rate <= -15) this.bloodPack[key].lr = 1;
					this.bloodPack[key].rate +=this.bloodPack[key].lr;
					this.rotate({
						url: this.bloodPack[key].url,
						x: this.bloodPack[key].x,
						y: this.bloodPack[key].y,
						w: this.bloodPack[key].w,
						h: this.bloodPack[key].h,
						rate: this.bloodPack[key].rate,
					});
					
					// console.log('111111111111', nowX, this.heroObj.x + this.heroObj.w/2)
					// 碰到英雄以后删除血包，并且重新生成血包
					if ((this.bloodPack[key].x <= this.heroObj.x + this.heroObj.w/2 && this.bloodPack[key].x >= this.heroObj.x - this.heroObj.w/2)
					    &&
					   (this.bloodPack[key].y <= this.heroObj.y + this.heroObj.h/2 && this.bloodPack[key].y >= this.heroObj.y - this.heroObj.h/2)) {
						 // 回血的声音
						 this.playAudio('/static/sound/leaf.mp3');
						 // 回血条
						 if (this.heroObj.bloodPercent + 10 >= this.heroObj.totalblood) {
							this.heroObj.bloodPercent = this.heroObj.totalblood;
						 } else {
							this.heroObj.bloodPercent = this.heroObj.bloodPercent + 10;
						 }
						 // 删除血包
						 this.bloodPack.splice(key,1);
						 setTimeout(() => {
							this.createBloodPack(1); 
						 }, 1000)
					};
				}
			},
			
			// 生成闪电攻速包
			createAttackSpeedList(n) {
				for (let i = 0; i < n; i++) {
					this.attackSpeedList.push(
						{
							url: '/static/tool/light.png',
							x: this.windowWidth * selectFrom(5,95) / 100,
							y: this.windowHeight * selectFrom(5,95) / 100,
							w: this.heroObj.w * 0.8,
							h: this.heroObj.h * 0.8,
							rate: 0, // 旋转角度
							lr: 1, // 旋转方向
						}
					)
				}
			},
			
			// 绘制闪电
			drawAttackSpeedList() {
				for (let key in this.attackSpeedList) {
					// 旋转并绘制
					if (this.attackSpeedList[key].rate >= 15) this.attackSpeedList[key].lr = -1;
					if (this.attackSpeedList[key].rate <= -15) this.attackSpeedList[key].lr = 1;
					this.attackSpeedList[key].rate +=this.attackSpeedList[key].lr;
					this.rotate({
						url: this.attackSpeedList[key].url,
						x: this.attackSpeedList[key].x,
						y: this.attackSpeedList[key].y,
						w: this.attackSpeedList[key].w,
						h: this.attackSpeedList[key].h,
						rate: this.attackSpeedList[key].rate,
					});
					
					// console.log('111111111111', nowX, this.heroObj.x + this.heroObj.w/2)
					// 碰到英雄以后删除，并且重新生成
					if ((this.attackSpeedList[key].x <= this.heroObj.x + this.heroObj.w/2 && this.attackSpeedList[key].x >= this.heroObj.x - this.heroObj.w/2)
					    &&
					   (this.attackSpeedList[key].y <= this.heroObj.y + this.heroObj.h/2 && this.attackSpeedList[key].y >= this.heroObj.y - this.heroObj.h/2)) {
						 // 回血的声音
						 this.playAudio('/static/sound/leaf.mp3');
						 // 增加攻速
						 this.heroObj.attackSpeed = this.heroObj.attackSpeed + 0.2;
						 // 删除闪电并生成
						 this.attackSpeedList.splice(key,1);
						 setTimeout(() => {
						 	this.createAttackSpeedList(1);
						 }, 1000)
					};
				}
			},
			// ========================================================
			// ========================================================
			// ========================================================
			// 旋转图片
			rotate(imgObj) {
				this.ctx.save();
				
				const centerX = imgObj.x + imgObj.w/2;
				const centerY = imgObj.y + imgObj.h/2;
				this.ctx.translate(centerX, centerY);
				if (imgObj.rate) this.ctx.rotate(Math.PI * imgObj.rate / 180);
				this.ctx.translate(-centerX, -centerY);
				// 绘制图片
				this.ctx.drawImage(imgObj.url, imgObj.x, imgObj.y, imgObj.w, imgObj.h);
				
				this.ctx.restore();
			},
			// 绘制血条
			drawBloodBar(barObj) {
				/*填充矩形方法：fillRect(x,y,w,h)*/
				this.ctx.fillStyle = barObj.bc;
				this.ctx.fillRect(
					barObj.x,barObj.y,
					barObj.w,barObj.h
				);
				this.ctx.fillStyle = barObj.fc;
				this.ctx.fillRect(
					barObj.x,barObj.y,
					 barObj.w * barObj.p,barObj.h
				);

				// fillRoundRect(this.ctx, barObj.x, barObj.y, barObj.w, barObj.h, barObj.r, barObj.bc);
				// fillRoundRect(this.ctx, barObj.x, barObj.y, barObj.w * barObj.p, barObj.h, barObj.r, barObj.fc);
			},
			// 绘制文字
			drawText(text, x, y, lColor,rColor) {
				let gradient = this.ctx.createLinearGradient(x,y,200,0);
				gradient.addColorStop(0,lColor);
				gradient.addColorStop(1,rColor);
				this.ctx.fillStyle = gradient
				this.ctx.font = "24px Microsoft YaHei"
				this.ctx.fillText(text,x,y);
			},
			// 暂停或者执行
			pauseOrRunFunc(inPauseOrRun) {
				console.log('进来了111', inPauseOrRun)
				if (inPauseOrRun) {
					this.drawClock();
				} else {
					this.stopClock();
				}
			},
			// 返回首页
			toGameHome() {
				uni.navigateBack({
				    delta: 1
				});
			},
			// 播放声音
			playAudio(url) {
			  // // 播放音频(h5端)
			  // let audio = new Audio(url);
			  // audio.play();
			  
				// 创建内部音频上下文
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = url;
				// 播放音频
				innerAudioContext.play();
				setTimeout(() => {
					innerAudioContext.destroy();
				}, 5000)
			},
			
			
			// 监听键盘wsad方法
			liskeydown() {
				let that = this;
				document.addEventListener("keydown",function(e){
				    // console.log("您按下的按钮的keyCode为："+e.keyCode);
					if (e.keyCode == 38 || e.keyCode == 87) {
						// 执行向上移动的方法
						that.top = 1;
					} else if (e.keyCode == 40 || e.keyCode == 83) {
						// 执行向下移动的方法
						that.bottom = 1;
					} else if (e.keyCode == 37 || e.keyCode == 65) {
						// 执行向左移动的方法
						that.left = 1;
					} else if (e.keyCode == 39 || e.keyCode == 68) {
						// 执行向右移动的方法
						that.right = 1;
					} else if (e.keyCode == 32) {
						// 空格点击
						that.keyControl = 1;
					}
				})
				document.addEventListener("keyup",function(e){
					// console.log("1111的keyCode为："+e.keyCode);
					if (e.keyCode == 38 || e.keyCode == 87) {
						// 执行向上移动的方法
						that.top = 0;
					} else if (e.keyCode == 40 || e.keyCode == 83) {
						// 执行向下移动的方法
						that.bottom = 0;
					} else if (e.keyCode == 37 || e.keyCode == 65) {
						// 执行向左移动的方法
						that.left = 0;
					} else if (e.keyCode == 39 || e.keyCode == 68) {
						// 执行向右移动的方法
						that.right = 0;
					}
				})
				
			},
			// 控制人物移动 
			controlHeroMove() {
				let trueMoveSpeed = this.heroObj.speed;
				// 如果点了空格键就加速跳跃
				if (this.keyControl === 1) {
					trueMoveSpeed = this.heroObj.speed * 30;
					this.keyControl = 0;
				}
				// 如果有键盘事件就移动
				if (this.top > 0) {
					if (this.heroObj.y - trueMoveSpeed * this.top > 0) {
						this.heroObj.y = this.heroObj.y - trueMoveSpeed * this.top;
					} else {
						this.heroObj.y = 0;
					}
				}
				if (this.bottom > 0) {
					if (this.heroObj.y + trueMoveSpeed * this.bottom < this.windowHeight - this.heroObj.h) {
						this.heroObj.y = this.heroObj.y + trueMoveSpeed * this.bottom;
					} else {
						this.heroObj.y = this.windowHeight - this.heroObj.h;
					}
				}
				if (this.left > 0) {
					if (this.heroObj.x - trueMoveSpeed * this.left > 0) {
						this.heroObj.x = this.heroObj.x - trueMoveSpeed * this.left;
					} else {
						this.heroObj.x = 0;
					}
				}
				if (this.right > 0) {
					if (this.heroObj.x + trueMoveSpeed * this.right < this.windowWidth - this.heroObj.w) {
						this.heroObj.x = this.heroObj.x + trueMoveSpeed * this.right;
					} else {
						this.heroObj.x = this.windowWidth - this.heroObj.w;
					}
				}
			},	
			touchEvent(x,y) {
				// console.log('111111111', x, y, this.handleCenterX, this.handleCenterY)
				// 保存当前手指位置
				this.touchX = x;
				this.touchY = y;
				// 触点和原点距离
				const xieLength = powAndSqrt(this.handleCenterX - x, this.handleCenterY - y);
				// console.log('1111xieLength', this.handleCenterX - x, this.handleCenterY - y, xieLength)
				// 在手柄内时速度按长度计算
				const hadW = this.totalWid / 6; // 手柄半径
				const touchSpeed = Math.min(hadW, xieLength) / hadW;
				
				
				if (this.handleCenterY > y) {
					// 执行向上移动的方法
					this.top = (this.handleCenterY - y) * touchSpeed / xieLength;
					this.bottom = 0;
				} else if (this.handleCenterY < y) {
					// 执行向下移动的方法
					this.bottom = (y - this.handleCenterY) * touchSpeed / xieLength;
					this.top = 0;
				} else {
					this.top = 0;
					this.bottom = 0;
				};
				
				if (this.handleCenterX > x) {
					// 执行向左移动的方法
					this.left = (this.handleCenterX - x) * touchSpeed / xieLength;
					this.right = 0;
				} else if (this.handleCenterX < x) {
					// 执行向右移动的方法
					this.right = (x - this.handleCenterX) * touchSpeed / xieLength;
					this.left = 0;
				} else {
					this.left = 0;
					this.right = 0;
				}
			},
			touchend(e) {
				this.touchX = this.handleCenterX;
				this.touchY = this.handleCenterY;
				this.top = 0;
				this.bottom = 0;
				this.left = 0;
				this.right = 0;
			},
			
			// 游戏结束
			gameOverFunc() {
				// 游戏结束
				setTimeout(() => {
					this.pauseOrRun = false;
					this.gameOverOverlay = true;
					this.innerAudioContextHeart.stop();
					this.playAudio('/static/sound/gameOver.mp3');
				}, 100)
			},
		},
		
	}
</script>

<style lang="scss" scoped>
	#myCanvas {
		width: 100vw;
		height: 100vh;
		outline:none;
		// background-image: url('/static/backImages/bg2.png'); //这里将图片路径替换成你的图片路径
		background-size: cover; // 背景图片等比例缩放并铺满整个页面
		background-repeat: no-repeat; // 不重复平铺背景图片
		background-position: center center; // 背景图片居中显示
	}
	.contentShadow {
		box-shadow: inset 0px 0px 16px 0px rgba(255, 0, 0, 1.0);
	}
	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		.warp {
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			width: 100%;
			.startText {
				font-family: "Arial", sans-serif;
				font-size: 36px;
				background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
				-webkit-background-clip: text;
				color: transparent;
				font-weight: bold;
			}
			.startNum {
				margin-top: 20px;
				font-family: "Arial", sans-serif;
				font-size: 50px;
				background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
				-webkit-background-clip: text;
				color: transparent;
				font-weight: bold;
			}
			.endNum {
				margin-top: 20px;
				font-family: "Arial", sans-serif;
				font-size: 50px;
				background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
				-webkit-background-clip: text;
				color: transparent;
				font-weight: bold;
			}
			.toGameHome {
				width: 50vw;
				height: 10vw;
			}
		}
	}
	.topBar {
		width: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: space-around;
		top: 4vw;
		z-index: 1;
		.killCount {
			font-family: "Arial", sans-serif;
			font-size: 26px;
			background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
			-webkit-background-clip: text;
			color: transparent;
			font-weight: bold;
		}
		.bloodPercent {
			width: 40vw;
			height: 3.6vw;
			border-radius: 1.8vw;
			background-color: rgba(1, 1, 1, 0.3);
			.bloodPercentContent {
				height: 3.6vw;
				border-radius: 1.8vw;
				/* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
			}
			.bloodPercentText {
				font-size: 16px;
			}
		}
		.pause {
			display: flex;
			align-items: center;
			.pimg {
				width: 5vw;
				height: 5vw;
			}
		}
	}
	.rocker {
		z-index: 1;
		position: absolute;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.2);
		pointer-events: none;
	}
	.rockerCenter {
		z-index: 2;
		position: absolute;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.5);
		pointer-events: none;
	}
</style>
