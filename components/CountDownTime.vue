<template>
	<div>
		<div class="coundown-time"  v-if="distance>0">
			<div class="coundown-time__item">
				<span class="coundown-time__day font-play">{{d}}</span>
				{{$t('coundown.days')}}
			</div>
			<div class="coundown-time__item">
				<span class="coundown-time__h font-play">{{h}}</span>
				{{$t('coundown.hours')}}
			</div>
			<div class="coundown-time__item">
				<span class="coundown-time__m font-play">{{m}}</span>
				{{$t('coundown.minutes')}}
			</div>
			<div class="coundown-time__item">
				<span class="coundown-time__s font-play">{{s}}</span>
				{{$t('coundown.second')}}
			</div>
		</div>
		<div class="time-out" v-else>Dummy text</div>
	</div>
</template>

	<script>

 export default {
	data: function() {
		const countDownDate = new Date("Sep 5, 2022 15:37:25").getTime()
		return  {
			d:'',
			h: '',
			m: '',
			s: '',
			distance: countDownDate  - new Date().getTime(),
			countDownDate
		}
	},

	methods: {
		getNow: function() {
			const now = new Date().getTime();
			// Find the distance between now and the count down date
			this.distance = this.countDownDate - now;
			// Time calculations for days, hours, minutes and seconds
			this.d = Math.floor(this.distance / (1000 * 60 * 60 * 24));
			this.h = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.m = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
			this.s = Math.floor((this.distance % (1000 * 60)) / 1000);

			}
	},
	mounted () {
		if (this.distance > 0) {
			setInterval(this.getNow, 1000);
		}else{
			clearInterval(this.getNow);
		}

	}
}
</script>
<style lang="scss">
	.time-out{
		background-color: rgb(255 255 255 / 53%);
		color: #000;
		padding: 10px 20px;
		display: inline-block;
		border-radius: 5px;
	}
	.coundown-time{
		background: #FFFFFF;
		box-shadow: 0px 0.4rem 1rem rgba(0, 0, 0, 0.25);
		border-radius: 2.1rem;
		padding: 26px 40px;
		display: flex;
		justify-content: center;
		position: relative;
		@media screen and (max-width: 768px) {
			padding: 2.4rem 2.4rem 3rem;
		}
		&__item{
			font-size: 15.6414px;
			line-height: 19px;
			align-items: center;
			text-align: center;
			letter-spacing: -0.651724px;
			color: #000000;
			text-align: center;
			font-weight: bold;
			@media screen and (max-width: 768px) {
				font-size: 1.2rem;
				line-height: 1.25;
			}
			&:not(:last-child){
				margin-right: 120px;
				@media screen and (max-width: 768px) {
					margin-right: 2.4rem;
				}
			}
			&:last-child{
				span{
					&:before{
						display: none
					}
				}
			}
			span{
				display: block;
				width: 80px;
				height: 80px;
				line-height: 64px;
				font-weight: 900;
				font-size: 60px;
				text-align: center;
				letter-spacing: 4.8px;
				position: relative;
				@media screen and (max-width: 768px) {
					width: 5.4rem;
					height: 4.6rem;
					font-size: 3.6rem;
					line-height: 1.25;
					letter-spacing: 0;
					position: relative;
					margin-bottom: 0.3rem;

				}
				&:before{
					position: absolute;
					content: ':';
					top: 50%;
					transform: translateY(-50%);
					right: -72px;
					font-size: 65px;
					line-height: 79px;
					font-weight: 400;
					font-family: 'Montserrat', sans-serif;
					@media screen and (max-width: 768px) {
						font-size: 4rem;
						line-height: 1.25;
						right: -1.6rem;
						line-height: 1;
					}
				}
			}
		}
	}

</style>
