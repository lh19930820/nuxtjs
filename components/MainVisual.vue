<template>
	<section class="mv" ref="mv">
		<div class="mv__container">
			<div class="mv__content">
				<h1 class="mv__ttl" v-html="$t('mainvisual.title')"></h1>
				<div class="mv__coundown">
					<CountDownTime/>
				</div>
				<div class="mv__form">
					<p class="mv__caption">{{$t('mainvisual.caption')}}</p>
					<Form/>
				</div>
			</div>
			<div class="mv__img" >
				<nuxt-img format="webp" src="/mv-fairy.png" alt="" placeholder />
			</div>
		</div>
	</section>
</template>
<style lang="scss">
	.mv{
		background: url('~assets/images/mv-bg3.png') center center no-repeat;
		background-size: 100% 100%;
		position: relative;
		text-align: center;
		overflow: hidden;
		.sp{
			display: none;
		}
		&__container{
			max-width: 1920px;
			margin: 0 auto;
			position: relative;
			min-height: 1017px;
			padding-top: 312px;
		}
		&__form{
			max-width: 560px;
			margin: 9.7rem auto 0;
			position: relative;
			z-index: 9;
		}
		&__content{
			max-width: 892px;
			padding: 0 16px;
			margin: 0 auto;
			position: relative;
			z-index: 100;
			&::before{
				content: "";
				position: absolute;
				top: -14px;
				left: -7%;
				top: 11.5rem;
				width: 116%;
				height: 100%;
				background: radial-gradient(27.72% 27.79% at 50.81% 68.15%, #210544 0%, rgba(23, 5, 68, 0.71) 50.52%, rgba(23, 5, 68, 0) 100%);
				mix-blend-mode: normal;
				backdrop-filter: blur(5px);
				-webkit-backdrop-filter: blur(5px);
				background-size: 100% 100%;
				border-radius: 50%;
				z-index: 5;
			}
		}

		&__ttl{
			color: #FFF;
			font-weight: 900;
			font-size: 80px;
			line-height: 12px;
			font-family: 'Playfair Display', serif;
			text-align: center;
			letter-spacing: 0.6px;
			text-transform: capitalize;
			line-height: 1;
			position: relative;
			z-index: 9;
		}

		&__caption{
			margin-bottom: 32px;
			font-size: 18px;
			line-height: 23px;
			text-align: center;
			color: #FFFFFF;
			position: relative;
			z-index: 9;
		}
		&__img{
			position: absolute;
			bottom: 0;
			left: 0;
			max-width: 44.2%;
			img{
				max-width: 100%;
			}
		}
		&__coundown{
			max-width: 756px;
			margin: 42px auto 0;
			position: relative;
			z-index: 9;
		}
	}
	@media screen and (max-width: 768px) {
		.mv{
			background: url('~assets/images/mv-bg__sp.png') center center no-repeat;
			background-size: 100% 100%;
			overflow: hidden;
			.sp{
				display: block;
			}
			&__coundown{
				max-width: 68.6rem;
			}
			&__container{
				padding-top: 13.7rem;
				min-height: 81rem;

			}
			&__form{
				margin-top: 4rem;
				max-width: 68.6rem;
			}
			&__ttl{
				font-size: 4rem;
				line-height: 1.25;
			}

			&__caption{
				font-size: 1.2rem;
				line-height: 1.25;
				letter-spacing: 0.9px;
				margin-bottom: 1.6rem;
			}
			&__img{
				position: relative;
				bottom: 0;
				left: 0;
				width: 32rem;
				max-width: 100%;
				margin-top: -6.7rem;
				margin-left: auto;
				margin-right: auto;
			}
			&__coundown{
				margin-top: 38px;
			}
			&__content{
				&::before{display: none}
			}
		}

	}
	@media screen and (max-width: 750px) {
		.mv{
			&__img{
				left: 6.6rem;
			}
		}
	}
</style>
