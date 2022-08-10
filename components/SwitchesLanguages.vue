<template>
    <div class="lang" v-click-outside="handlerClose">
		<button class="lang__btn" @click="showSelectLang = !showSelectLang">
			<span class="flag" :class="[$i18n.locale]"></span>
		</button>
		<ul class="lang__list" :class="{ show: showSelectLang }" >
			<li
				@click="showSelectLang = !showSelectLang"
				v-for="locale in $i18n.locales"
				:key="locale.code">
				<nuxt-link :class="` ${$i18n.locale === locale.code? 'active' : ''}`" class="lang__item" :to="switchLocalePath(locale.code)">
					<span class="flag" :class="[locale.code]"></span>{{ locale.name }}
				</nuxt-link>
			</li>
		</ul>
    </div>
</template>
<script>
import Vue from 'vue'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)
export default {
	directives: {
      clickOutside: vClickOutside.directive
    },
    data() {
        return {
			showSelectLang: false,
        }
    },
	methods: {
		handlerClose: function () {
			this.showSelectLang= false
		},
    },
}
</script>
<style lang="scss">
	.flag{
		background: url('~assets/images/flag.png') center center no-repeat;
		width: 34px;
		height: 34px;
		display: inline-block;
		flex-shrink: 0;
		&.vn{
			background-position: -4px -4px;
		}
		&.en{
			background-position: -62px -4px;
		}
	}
	.lang{
		width: 68px;
		height: 4rem;
		position: relative;
		@media screen and (max-width: 768px) {
			width: 80px;
		}

		&__list{
			display: none;
			right: 0;
			background: #fff;
			position: absolute;
			border: 1px solid #EEEEEE;
			border-radius: 0.8rem;
			padding: 0.3rem 0.8rem;
			margin-top: 4px;
			@media screen and (max-width: 768px) {
				right: auto;
				left: 0;
			}
			&.show{
				display: block;
			}
		}
		&__item{
			display: flex;
			align-items: center;
			font-weight: 700;
			font-size: 10px;
			line-height: 1.8;
			padding: 2px 0 2px 35px;
			color: #000;
			text-decoration: none;
			&~.lang__item{
				border-top: solid 1px #C4C4C4;
			}
			&.active{
				&:before{
					content: "";
					position: absolute;
					left: 8px;
					width: 24px;
					height: 24px;
					background: url('~assets/images/check.svg') center center no-repeat;
				}
			}
			span{
				margin-right: 7px;
			}
		}
		.lang__btn{
			background: none;
			position: relative;
			height: 40px;
			padding: 3px;
			width: 100%;
			border: none;
			display: flex;
			align-items: center;
			border-radius: 8px;
			cursor: pointer;
			@media screen and (max-width: 768px) {
				padding: 3px 38px 3px 14px;
				background: #F6F6F6;
				border: 1px solid #AFAFAF;
			}
			&:before{
				content: "";
				position: absolute;
				right: 6px;
				top: 50%;
				transform: translateY(-50%);
				border-top: solid 5px #fff;
				border-left: solid 5px transparent;
				border-right: solid 5px transparent;
				@media screen and (max-width: 768px) {
					border-top-color: #000;
					right: 12px
				}
			}
		}
	}
</style>
