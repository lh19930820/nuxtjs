<template>
	<ul class="social">
		<li v-for="social in socials" :key="social.id" class="social__item">
			<a target="_blank" v-bind:href="social.link"><img :src="require(`~/assets/images/${social.icon}`)" alt=""></a>
		</li>
	</ul>
</template>
<script>
export default {
	data: () => ({
		socials:[
			{icon: "twitter.svg", link: "#"},
			{icon: "facebook.svg", link: "#"},
			{icon: "linkedin.svg", link: "#"},
		],
	}),
}
</script>
<style lang="scss">
	.social{
		display: flex;
		margin-top: 40px;
		@media screen and (max-width: 991px) {
			justify-content: center;
			margin-top: 3.8rem;
		}
		&__item{
			text-align: center;
			display: block;
			margin-right: 2.4rem;
			transition-duration: 0.2s;
			&:hover{
				opacity: 0.6;
				transition-duration: 0.2s;
				transition-timing-function: ease-in;
			}
			&:last-child{
				margin-right: 0;
			}
			img{
				max-width: 100%;
				width: 4rem;
				height: 4rem;
			}
		}
	}

</style>
