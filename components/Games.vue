<template>
	<section class="games" id="games">
		<h3 class="games__ttl c-title">{{$t('games.title')}}</h3>
		<p class="games__decs">{{$t('games.caption')}}</p>
		<ul class="games__list">
			<li class="game-item" v-for="game in games" :key="game.id">
				<a class="game-item__link" href="">
					<img class="game-item__img" :src="require(`~/assets/images/${game.image}`)" alt="">
					<div class="game-item__info">
						<p class="game-item__ttl">{{game.title}}</p>
						<p class="game-item__decs">{{game.description}}</p>
					</div>
				</a>
			</li>
		</ul>
	</section>
</template>
<script>
  export default {
	data: () => ({
		games:[
			{title: "E-Space", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g1.jpg"},
			{title: "Kingland", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g2.jpg"},
			{title: "The Last Game", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g3.jpg"},
			{title: "G-Dragon", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g4.jpg"},
			{title: "Pirates", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g5.jpg"},
			{title: "Witch Party", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g6.jpg"},
			{title: "Rocky", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g7.jpg"},
			{title: "Blue Fire", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g8.jpg"},
			{title: "Magic tree", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g9.jpg"},
			{title: "Aborigines", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g10.jpg"},
			{title: "Cinderella", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g11.jpg"},
			{title: "Egypt Game", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "g12.jpg"},
		],
	}),

  }
</script>
<style lang="scss">
	.game-item{
		width: 25%;
		padding: 0 2rem;
		margin-bottom: 4rem;
		@media screen and (max-width: 1199px) {
			width: 50%;
		}
		@media screen and (max-width: 768px) {
			padding: 0 0.8rem;
			margin-bottom: 2rem;
		}
		&:hover{
			filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25));
			opacity: 0.9;
			transition-duration: 0.2s;
		}
		&:nth-child(2n){
			transform: translateY(120px);
			@media screen and (max-width: 1199px) {
				transform: translateY(10rem);
			}

			@media screen and (max-width: 768px) {
				transform: translateY(3.6rem);
			}
		}
		&__img{
			max-width: 100%;
			border-radius: 1rem
		}

		&__link{
			display: block;
			position: relative;
			filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
			border-radius: 1rem;
			height: 560px;
			@media screen and (max-width: 768px) {
				height: 26.8rem;
			}
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__ttl{
			width: 100%;
			font-weight: bold;
			font-size: 4.8rem;
			line-height: 1.25;
			color: #FFFFFF;
			margin-bottom: 15px;
			letter-spacing: -1px;
			margin-top: auto;
			@media screen and (max-width: 768px) {
				font-size: 2.4rem;
				margin-bottom: 0.3rem;
			}
		}
		&__decs{
			width: 100%;
			color: #FFFFFF;
			margin-bottom: 0;
			@media screen and (max-width: 768px) {
				font-size: 1.2rem;
				line-height: 1.25;
				letter-spacing: 0.9px;
			}
		}
		&__info{
			border-radius: 10px;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			padding: 3.2rem 3.2rem 4rem;
			background-image: linear-gradient(360deg, rgba(37, 39, 99, 0.2) 6.79%, rgba(0, 0, 0, 0) 61.34%);
			@media screen and (max-width: 768px) {
				padding: 1.2rem 0.8rem;
			}
		}
	}
	.games{
		max-width: 1920px;
		margin: 0 auto;
		padding: 126px 6rem  210px;
		@media screen and (max-width: 768px) {
			padding: 5.4rem 16px 6.5rem;
		}
		&__list{
			margin-top: 80px;
			display: flex;
			flex-wrap: wrap;
			@media screen and (max-width: 768px) {
				margin: 4rem -0.8rem 0;
			}
		}
		&__decs{
			max-width: 840px;
			margin: 24px auto 0;
			text-align: center;
			@media screen and (max-width: 768px) {
				margin-top: 1.6rem
			}
		}
	}

</style>
