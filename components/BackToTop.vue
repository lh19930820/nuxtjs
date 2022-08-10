<template>
	<button class="back-to-top"  @click="handleClick" aria-label="to top">
		<img v-bind:class="{ scroll: scTop>300 }" class="game-item__img" src="~/assets/images/arrow-down.svg" alt="">
	</button>
</template>
<style lang="scss">
	.back-to-top{
		cursor: pointer;
		position: fixed;
		bottom: 5rem;
		right: 80px;
		z-index: 105;
		width: 6.6rem;
		height: 6.6rem;
		border-radius: 50%;
		border: none;
		padding: 0;
		background: #FFFFFF;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
		@media screen and (max-width: 768px) {
			right: 2.2rem;
		}
		img{
			&.scroll{
				transform: matrix(1, 0, 0, -1, 0, 0);
			}
		}
	}

</style>
<script>

export default {
	data() {
		return {
			scTop: 0,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
    methods: {
		handleScroll: function () {
			this.scTop = window.scrollY
		},
		handleClick: function () {
			if(this.scTop>0){
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}else{
				window.scrollTo(0,document.body.scrollHeight || document.documentElement.scrollHeight);
			}
		},
    },
}
</script>

