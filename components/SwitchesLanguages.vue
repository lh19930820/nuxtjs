<template>
    <div class="lang">
		<button class="lang__btn lang__btn-active" @click="handleSelectLang">
			<span class="flag" :class="[selectedValue]"></span>
		</button>
		<ul class="lang__list" :class="{ show: showSelectLang }" >
			<li class="lang__item" @click="onChange(selectedValue)" v-for="locale in $i18n.locales" :class="` ${selectedValue === locale.code? 'active' : ''}`" :key="locale.code" :selected="selectedValue === locale.code">
			<span class="flag" :class="[locale.code]"></span>{{ locale.name }}
			</li>
		</ul>
    </div>
</template>
<script>

export default {
    data() {
        return {
            selectedValue: '',
			showSelectLang: false,
        }
    },
     mounted () {
        this.selectedValue = this.$i18n.locale;
    },
     methods: {
		handleSelectLang: function () {
			this.showSelectLang=!this.showSelectLang;
		},
        onChange(event) {
			console.log(event)
            this.$router.replace(this.switchLocalePath(event));
        }
    }
}
</script>
<style lang="scss">
	.flag{
		background: url('~assets/images/flag.png') center center no-repeat;
		width: 34px;
		height: 34px;
		display: inline-block;
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

		&__list{
			display: none;
			width: 156px;
			right: 0;
			background: #fff;
			position: absolute;
			border: 1px solid #EEEEEE;
			border-radius: 0.8rem;
			padding:0.3rem 0.8rem;
			&.show{
				display: block;
			}
		}
		&__item{
			display: flex;
			align-items: center;
			font-weight: 700;
			font-size: 1rem;
			line-height: 1.8;
			padding-left: 3.5rem;
			&.active{
				&:before{
					content: "";
					position: absolute;
					width: 20px;
					height: 15px;
					border-left: solid 1px #000;
					border-bottom: solid 1px #000
				}
			}
			span{
				margin-right: 7px;
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
