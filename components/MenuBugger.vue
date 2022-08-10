<template>
	<button class="p-menu-bugger" id="js-menu" aria-label="open navigation" :class="{active: showMenu}" @click="$emit('func');">
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	</button>
</template>

<script>

export default {
	props: ["showMenu"],
    methods: {
		handleMenuBugger: function () {
			this.isShow=!this.isShow;
			document.body.classList.toggle('hide-scroll')
			document.querySelector('#js-menucontent').classList.toggle('active')
		},
    },
}
</script>
<style lang="scss">
.p-menu-bugger {
	display: none;
	width: 4rem;
	height: 4rem;
	background-color: transparent;
	border: none;
	padding: 0.4rem;
	@media screen and (max-width: 768px) {
		display: block;
		z-index: 99999;
	}

	&.active {
		.icon-bar {
			background-color: #000;
			&:nth-child(2) {
				transform: translateX(50px);
				background: transparent;
				box-shadow: none;
				-webkit-transform: translateX(50px);
				-moz-transform: translateX(50px);
				-ms-transform: translateX(50px);
				-o-transform: translateX(50px);
			}
			&:first-child {
				transform: rotate(45deg);
			}
			&:last-child {
				transform: rotate(-45deg);
			}
		}
	}
	.icon-bar {
		display: block;
		height: 0.25rem;
		border-radius: 1.5px;
		-webkit-border-radius: 1.5px;
		-moz-border-radius: 1.5px;
		-ms-border-radius: 1.5px;
		-o-border-radius: 1.5px;
		background-color: #fff;
		width: 3.2rem;
		border-radius: 1.5px;
		transition: all 0.5s ease-in-out 0s;
		&:nth-child(2) {
			position: absolute;
			top: 50%;
		}
		&:first-child {
			position: absolute;
			transition: all 0.5s ease-in-out 0s;
			transform: translateY(-0.85rem);
			-webkit-transform: translateY(-0.85rem);
			-moz-transform: translateY(-0.85rem);
			-ms-transform: translateY(-0.85rem);
			-o-transform: translateY(-0.85rem);
		}

		&:last-child {
			position: absolute;
			transition: all 0.5s ease-in-out 0s;
			transform: translateY(0.85rem);
			-webkit-transform: translateY(0.85rem);
			-moz-transform: translateY(0.85rem);
			-ms-transform: translateY(0.85rem);
			-o-transform: translateY(0.6rem);
		}
	}
}

</style>
