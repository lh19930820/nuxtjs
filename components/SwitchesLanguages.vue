<template>
	<div class="lang">
		<button class="lang__btn lang__btn-active">
			<span><img src="~assets/images/us.png"/></span>
			</button>
		<ul class="lang__list" >
			<li class="lang__item" >
				<button class="lang__btn">en</button>
				<button class="lang__btn">vn</button>
			</li>
		</ul>
	</div>
</template>
<script>

export default {
	// data() {
	// 	const langueges = this.$store.app.i18n.availableLocales.filter((lang)=>lang!==this.$store.app.i18n.locale);
	// 	return {
	// 		showSelectLang: false,
	// 		// langueges,
	// 		// selectedLang: this.$store.app.i18n.locale
	// 	}
	// },
    // methods: {
	// 	handleSelectLang: function () {
	// 		this.showSelectLang=!this.showSelectLang;
	// 	},
	// 	changeLang (lang) {
	// 		//mutate 'locale' in store
	// 		this.$store.commit('SET_LANG', lang)
	// 		//re-route to the current page but with the selected language in a query string
	// 		this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
	// 		this.selectedLang = lang;
	// 		this.langueges=this.$store.app.i18n.availableLocales.filter((item)=>item!==lang)
	// 		this.showSelectLang=!this.showSelectLang;

	// 	}
    // },
	// components: {
	// 	FlagIcon
	// }
}
</script>
<style lang="scss">
	.lang{
		width: 68px;
		height: 4rem;
		position: relative;
		@media screen and (max-width: 1199px) {
			margin-left: 6rem
		}
		@media screen and (max-width: 991px) {
			margin-left: 5rem
		}
		@media screen and (max-width: 768px) {
			width: 8rem;
			margin-left: 0;
			img{
				width: 2.7rem;
			}
		}
		.flag-icon{
			display: block;
			width: 33px;
			height: 24px;
			background-size: 100% 100% ;
		}
		&__list{
			display: none;
			&.show{
				display: block;
			}
		}
		.lang__btn-active{
			background: none;
			position: relative;
			height: 4rem;
			&:before{
				content: "";
				position: absolute;
				right: 6px;
				top: 50%;
				transform: translateY(-50%);
				border-top: solid .5rem #fff;
				border-left: solid .5rem transparent;
				border-right: solid .5rem transparent;
				@media screen and (max-width: 768px) {
					border-top-color: #000;
					right: 1.9rem
				}
			}
		}

		&__select{
			position: absolute;
			top: 100%;
			width: 100%;
			left: 0
		}
		&__btn{
			padding: 3px;
			background-color: #fff;
			height: 4rem;
			width: 100%;
			border: none;
			display: flex;
			align-items: center;
			border-radius: 8px;
			cursor: pointer;
			@media screen and (max-width: 768px) {
				padding: 0.3rem 3.8rem 0.3rem 1.4rem;
				background: #F6F6F6;
				border: 1px solid #AFAFAF;
				border-radius: .8rem;
			}
		}
	}
</style>
