
<template>
	<section class="partner" id="partners">
		<div  class="partner__inner">
		<h3 class="partner__ttl c-title">Our Partners</h3>
			<VueSlickCarousel  v-bind="settings">
				<a href="#" target="_blank" v-for="partner in partners" :key="partner.id" class="partner__item">
					<img :src="require(`~/assets/images/${partner.logo}`)" :alt="partner.alt">
				</a>
			</VueSlickCarousel>
		</div>
	</section>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
	data: () => ({
		partners:[
				{logo: "p1.png", link: "/",alt: "partner"},
				{logo: "p2.png", link: "/",alt: "partner"},
				{logo: "p3.png", link: "/",alt: "partner"},
				{logo: "p4.png", link: "/",alt: "partner"},
				{logo: "p5.png", link: "/",alt: "partner"},
				{logo: "p6.png", link: "/",alt: "partner"},
				{logo: "p7.png", link: "/",alt: "partner"}
			],
		settings: {
			"dots": false,
			"slidesToShow": 5,
			"slidesToScroll": 1,
			"responsive": [
			{
				"breakpoint": 1024,
				"settings": {
					"slidesToShow": 3,
					"slidesToScroll": 1,
				}
			},
			{
					"breakpoint": 600,
					"settings": {
						"centerMode": true,
						"slidesToShow": 1,
						"cssEase": 'linear',
						"variableWidth": true,
						"variableHeight": true,
						"centerPadding": "20px",
					}
				}
			]
		}
	}),
	components: {
		VueSlickCarousel,
	}
  }
</script>
<style lang="scss">
	.partner{
		padding-top: 120px;
		padding-bottom: 115px;
		background-color: #f6f6f6;
		@media screen and (max-width: 768px) {
			padding: 4rem 0;
		}
		&__item{
			display: block;
			@media screen and (max-width: 550px) {
				width: 180px!important;
			}
			img{
				margin-left: auto;
				margin-right: auto;
				max-width: 100%;
			}
			&:hover{
				opacity: 0.8;
				transition-duration: 0.2s;
			}
		}
		&__ttl{
			margin-bottom: 78px;
			@media screen and (max-width: 768px) {
				margin-bottom: 4rem;
			}
		}
		&__inner{
			max-width: 1525px;
			padding: 0 16px;
			margin: 0 auto;
			@media screen and (max-width: 1199px) {
				padding: 0;
			}
		}
		.slick-arrow{
			width: 40px;
			height: 40px;
			z-index: 9;
			box-shadow:0px 4px 10px rgba(0, 0, 0, 0.2);
			transform:  translateY(-50%);
			border-radius: 8px;
			@media screen and (max-width: 1199px) {
				width: 34px;
				height: 34px;
			}
			&::before{
				content: "";
				position: absolute;
				width: 50%;
				height: 50%;
				left: 25%;
				top: 25%;
				background: #f6f6f6;
			}
			&:hover{
				box-shadow:0px 4px 10px rgba(0, 0, 0, 0.35);
				transition-duration: 0.2s;
				margin-top: -1px;
			}
			&::after{
				position: absolute;
				top: 0;
				left: 0;
				opacity: 1;
				content: '';
				width: 100%;
				height: 100%;
				background: url('~assets/images/arrow-square-right.png') center center no-repeat;
				background-size: 100% 100%;

			}
			&.slick-prev{
				left: -20px;
				@media screen and (max-width: 1600px) {
					left: 2rem;
				}
			}
			&.slick-next{
				right: -20px;
				&:after{
					transform: rotate(180deg)
				}
				@media screen and (max-width: 1600px) {
					right: 2rem;
				}
			}
		}
	}
</style>
