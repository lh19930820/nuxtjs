<template>
    <div class="lang">
             <select v-model="selectedValue" @change="onChange(selectedValue)">
                <option v-for="locale in $i18n.locales" :value="locale.code" :key="locale.code" :selected="selectedValue === locale.code">{{ locale.name }}</option>
            </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedValue: ''
        }
    },
     mounted () {
        this.selectedValue = this.$i18n.locale;
    },
     methods: {
        onChange(event) {
            this.$router.replace(this.switchLocalePath(event));
        }
    }
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
