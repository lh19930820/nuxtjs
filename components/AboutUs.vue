<template>
	<section class="about-us"  id="about-us">
		<div class="container">
			<div class="about-us__inner">
				<div class="about-us__content">
					<h2 class="c-title">{{$t('about.title')}}</h2>
					<p class="about-us__description">{{$t('about.text')}}</p>
					<div class="status">
						<div class="status-item">
							<div class="status-item__number">600<span>M</span>+</div>
							<span class="status-item__name">{{$t('status.users')}}</span>
						</div>
						<div class="status-item">
							<span class="status-item__number">135+</span>
							<span class="status-item__name">{{$t('status.games')}}</span>
						</div>
					</div>
				</div>
				<div class="benefit">
					<div class="benefit__bg">
						<ul class="benefit__list">
							<li class="benefit-item">
								<div class="benefit-item__img"><img src="~/assets/images/calendar-tick.svg" alt=""></div>
								<div class="benefit-item__content">
									<p class="benefit-item__ttl"> {{$t('benefits.benefit[0].title')}}</p>
									<p class="benefit-item__txt"> {{$t('benefits.benefit[0].text')}}</p>
								</div>
							</li>
							<li class="benefit-item">
								<div class="benefit-item__img"><img src="~/assets/images/pen-tool-2.svg" alt=""></div>
								<div class="benefit-item__content">
									<p class="benefit-item__ttl"> {{$t('benefits.benefit[1].title')}}</p>
									<p class="benefit-item__txt"> {{$t('benefits.benefit[1].text')}}</p>
								</div>
							</li>
							<li class="benefit-item">
								<div class="benefit-item__img"><img src="~/assets/images/people.svg" alt=""></div>
								<div class="benefit-item__content">
									<p class="benefit-item__ttl"> {{$t('benefits.benefit[2].title')}}</p>
									<p class="benefit-item__txt"> {{$t('benefits.benefit[2].text')}}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="map">
				<nuxt-img format="webp" class="map__person" src="/illustrator.png" alt="About Us" placeholder />
				<nuxt-img format="webp" class="map__pin" src="/pin-map.png" alt="About Us" placeholder />
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.map{
		margin-top: 66px;
		text-align: center;
		@media screen and (max-width: 768px) {
			margin: 4.2rem -16px 0;
			text-align: center;
		}
		&__pin{
			margin-top: -100px;
			@media screen and (max-width: 768px) {
				margin-top: -3rem;
			}
		}
		&__person{
			margin-left: 30px;
			animation:move 5s linear infinite alternate;
			@media screen and (max-width: 768px) {
				width: 82%;
				margin: 0 auto;
				padding-left: 0.9rem;
			}
		}
		img{
			max-width: 100%;
		}

		@keyframes move {
			0%, 100% {
				transform: translate(0, 0);
			}
			50% {
				transform: translate(2px, 2px) rotate(2deg);
			}

			80% {
				transform: translate(-2px, -2px) rotate(-2deg);
			}
		}

	}
	.status{
		@media screen and (max-width: 991px) {
			display: flex;
		}
	}

	.status-item{
		&~.status-item{
			margin-top: 46px;
			@media screen and (max-width: 768px) {
				padding-left: 1.5rem;
				margin-top: 4rem
			}
		}

		@media screen and (max-width: 991px) {
			flex: 1;
			margin-top: 0!important;
		}

		&__number{
			font-weight: bold;
			font-size: 80px;
			line-height: 1;
			letter-spacing: -1px;
			color: #079BEE;
			display: block;
			@media screen and (max-width: 768px) {
				font-size: 4.4rem;
			}
			span{
				font-size: 50%;
			}
		}
		&__name{
			font-weight: bold;
			font-size: 2.4rem;
			line-height: 1.25;
			margin-top: 1.4rem;
			display: block;
			color: #000000;
		}
	}
	.about-us{
		padding-top: 130px;
		@media screen and (max-width: 768px) {
			padding-top: 4.2rem;
		}
		.container{
			max-width: 1192px;
		}
		&__inner{
			display: flex;
			margin: 0 -20px;
			@media screen and (max-width: 1240px) {
				margin: 0
			}
			@media screen and (max-width: 991px) {
				display: block;
			}
		}
		.c-title{
			margin-bottom: 40px;
			text-align: left;
			@media screen and (max-width: 768px) {
				margin-bottom: 2.6rem;
			}
		}
		&__content{
			padding: 0 20px;
			flex: 1;
			@media screen and (max-width: 991px) {
				padding: 0;
				margin-bottom: 4rem;
			}
		}
		&__description{
			margin-bottom: 88px;
			@media screen and (max-width: 991px) {
				margin-bottom: 4rem;
			}
			@media screen and (max-width: 768px) {
				line-height: 1.43;
			}
		}
		.benefit-item{
			display: flex;
			&~.benefit-item{
				margin-top: 40px;
				@media screen and (max-width: 768px) {
					margin-top: 4.2rem;
				}
			}
			&__content{
				flex: 1;
			}
			&__img{
				width: 50px;
				height: 50px;
				margin-right: 24px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #E3FCFF;
				border-radius: 50%;
				@media screen and (max-width: 768px) {
					width: 4rem;
					height: 4rem;
					margin-right: 2rem;
					img{
						width: 2rem;
					}
				}
			}
			&__ttl{
				font-weight: bold;
				font-size: 2.4rem;
				line-height: 1.25;
				color: #000;
				margin-bottom: 8px;
				@media screen and (max-width: 768px) {
					margin-bottom: 1.5rem;
				}
			}
			&__txt{
				margin-bottom: 0;
			}
		}
		.benefit{
			padding: 0 20px;
			flex: 1;
			@media screen and (max-width: 991px) {
				padding: 0;
			}
			@media screen and (max-width: 768px) {
				margin: 0 -16px;
			}
			&__bg{
				background: #EEEEEE;
				height: 100%;
				padding: 7.5rem;
				display: flex;
				align-items: center;
				@media screen and (max-width: 768px) {
					padding: 4rem 16px
				}
			}
		}
	}

</style>
