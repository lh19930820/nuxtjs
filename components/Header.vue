
<template>
	<header class="header" ref="header" id="js-header" :class="{hasBackGround: hasBG }">
		<a class="header__logo" href="/">
			<nuxt-img src="/white-logo.svg" alt="logo" placeholder />
			<!-- <img src="~/assets/images/white-logo.svg" alt=""> -->
		</a>
		<MenuBugger :showMenu="showMenu" @func="showMenu = !showMenu" />
		<div class="header__direction" :class="{active: showMenu}" id="js-menucontent">
			<ul class="header__nav">
				<li class="header__nav-item"><a class="js-anchor" @click.prevent="handleClick('about-us')" href="#about-us">{{$t('nav.about')}}</a></li>
				<li class="header__nav-item"><a class="js-anchor" @click.prevent="handleClick('games')" href="#games">{{$t('nav.games')}}</a></li>
				<li class="header__nav-item"><a class="js-anchor" @click.prevent="handleClick('partners')" href="#partners">{{$t('nav.partners')}}</a></li>
				<li class="header__nav-item"><a class="js-anchor" @click.prevent="handleClick('contact')" href="#contact">{{$t('nav.contact')}}</a></li>
			</ul>
			<div class="header__lang" :class="{scrol: hasBG }">
				<SwitchesLanguages/>
			</div>
		</div>
	</header>
</template>
<script>
import MenuBugger from './MenuBugger.vue';
 export default {
    data: function () {
        return {
            hasBG: false,
			showMenu: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll: function () {
            this.hasBG = window.scrollY > 1;
        },
        toTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        handleClick: function (refName) {
            const element = document.getElementById(refName);
            var headerHeight = this.$refs.header.offsetHeight;
            if (element.offsetTop) {
                window.scrollTo({
                    top: element.offsetTop - headerHeight,
                    behavior: "smooth",
                });
            }
			console.log(this.showMenu)
			this.showMenu = !this.showMenu;
			console.log(this.showMenu)
        }

    },
	watch:{
		showMenu(){
			this.showMenu? document.body.classList.add('hide-scroll'): document.body.classList.remove('hide-scroll')
		}
	},
    components: { MenuBugger }
}
</script>
<style lang="scss">
	.header{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 999;
		padding: 20px 8rem;
		transition-duration: 0.2s;
		@media screen and (max-width: 1199px) {
			padding: 20px 4rem
		}
		@media screen and (max-width: 768px) {
			padding: 4.8rem 16px;

		}

		&.hasBackGround{
			background-color:rgb(19 24 70 / 60%);
			padding-top: 2rem;
			padding-bottom: 2rem;
			transition-duration: 0.2s;
		}
		&__logo{
			width: 108px;
			flex-shrink: 0;
			@media screen and (max-width: 768px) {
				width: 6.8rem;
			}
			img{
				max-width: 100%;
			}
		}
		&__lang{
			margin-left: 8.4rem;
			@media screen and (max-width: 1199px) {
				margin-left: 6rem
			}
			@media screen and (max-width: 991px) {
				margin-left: 5rem
			}
			@media screen and (max-width: 768px) {
				position: absolute;
				margin-left: 0;
				top: 4.8rem;
				left: 16px;
				width: 80px;
				&.scrol{
					top: 2rem;
					transition-duration: 0.2s;
				}
			}
		}
		&__direction{
			display: flex;
			align-items: center;
			padding-top: 16px;
			@media screen and (max-width: 768px) {
				padding-top: 0;
				display: none;
				position: fixed;
				top: 0;
				left:  0;
				width: 100%;
				height: 100%;
				background: #E5E5E5;
				z-index: 888;
				&.active{
					display: block
				}
			}
		}

		&__nav-item{
			margin-left: 8.4rem;
			@media screen and (max-width: 1199px) {
				margin-left: 6rem
			}
			@media screen and (max-width: 991px) {
				margin-left: 4rem
			}
			@media screen and (max-width: 768px) {
				margin-left: 0;
				&:not(:last-child){
					border-bottom: solid 1px  #EEEEEE;
				}
			}
			a{
				font-weight: 700;
				font-size: 1.4rem;
				line-height: 1.21;
				color: #FFFFFF;
				text-decoration: none;
				position: relative;
				@media screen and (max-width: 768px) {
					text-align: center;
					display: block;
					padding: 2.5rem;
					color: #000
				}
				&::before{
					content: '';
					position: absolute;
					left: 50%;
					height: 1px;
					width: 0;
					display: block;
					background-color: #fff;
					bottom: -5px;
					transition-timing-function: ease-in-out;
					transition-duration: 0.2s;
					@media screen and (max-width: 768px) {
						display: none
					}
				}
				&:hover{
					&:before{
						width: 100%;
						left: 0;
						right: 0;
						transition-duration: 0.2s;
					}
				}
			}
		}
		&__nav{
			display: flex;

			@media screen and (max-width: 768px) {
				display: block;
				padding: 12.8rem 16px 1rem;
			}
		}
	}

</style>

