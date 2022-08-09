<template>
	<footer class="footer" id="contact">
		<div class="footer__inner">
			<div class="footer__left">
				<nuxt-img class="footer__logo" src="/white-logo.svg" alt="logo" placeholder />
				<Social/>
			</div>
			<div class="footer__right">
				<div class="footer__item">
					<h3 class="footer__ttl">Address</h3>
					<div class="footer__info">
						<div class="footer__info-img">
							<img src="~/assets/images/location.svg" alt="">
						</div>
						<div class="footer__txt">
							<p>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</p>
							<p>20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</p>
						</div>
					</div>
					<div class="footer__info">
						<div class="footer__info-img">
							<img src="~/assets/images/mobile.svg" alt="">
						</div>
						<div class="footer__txt">
							<p class="pc"><span class="address__phone">(+1) 555-0108-000</span> or <span class="address__phone">(+236) 555-0108</span></p>
							<p class="sp"><a href="tel:(+1) 555-0108-000" class="address__phone">(+1) 555-0108-000</a> or <a href="tel:(+236) 555-0108" class="address__phone">(+236) 555-0108</a></p>
						</div>
					</div>
				</div>
				<div class="footer__item">
				<h3 class="footer__ttl">Subscribe</h3>
					<p class="footer__txt">Subscribe to our newsletter and be the first to know about our updates</p>
					<Form/>
				</div>
			</div>
		</div>
		<div class="copyright">2017 Copyright. Policy.</div>
	</footer>
</template>
<style lang="scss">
	.footer{
		background:  url('~/assets/images/footer-bg.png') center center;
		background-size: cover;
		color: #FFFFFF;
		@media screen and (max-width: 768px) {
			background:  url('~/assets/images/footer-bg__sp.png');
		}
		&__inner{
			display: flex;
			padding: 104px 16px 100px;
			max-width: 1492px;
			margin: 0 auto;
			@media screen and (max-width: 991px) {
				display: block
			}
			@media screen and (max-width: 768px) {
				padding: 4rem 16px 6.2rem;
			}
		}
		&__logo{
			width: 16.3rem;
		}
		&__left{
			flex: 1;
			@media screen and (max-width: 991px) {
				text-align: center;
				margin-bottom: 70px;
			}
		}
		&__right{
			display: flex;
			@media screen and (max-width: 768px) {
				display: block;
			}
		}
		.form{
			margin-top: 12px;
			@media screen and (max-width: 768px) {
				margin-top: 1.8rem;
			}
			svg{
				fill: #fff
			}
			.form__input{
				background: none;
				border: 1px solid #FFFFFF;
				color: #fff;
				&::placeholder{
					color: #fff
				}
			}
		}
		&__ttl{
			font-weight: bold;
			font-size: 2.4rem;
			line-height: 1.25;
			margin-bottom: 40px;
			@media screen and (max-width: 768px) {
				margin-bottom: 1.8rem;
				margin-bottom: 2rem;
			}
		}
		&__item{
			margin-left: 40px;
			max-width: 410px;
			@media screen and (max-width: 991px) {
				max-width: 50%;
				&:first-child{
					margin-left: 0;
				}
			}
			@media screen and (max-width: 768px) {
				margin-left: 0;
				max-width: 100%;
				&:last-child{
					margin-top: 6.8rem;
				}
			}
		}
		&__info-img{
			margin-right: 0.8rem;
		}
		&__info{
			display: flex;
			&:last-child{
				margin-top: 40px;
				align-items: center;
				@media screen and (max-width: 768px) {
					margin-top: 2rem;
					align-items: center;
				}
			}
			.sp{
				display: none;
				@media screen and (max-width: 768px) {
					display:block;
					margin-top: 0!important;
					a{
						color: #fff;
						text-decoration: none;
					}
				}
			}
			.pc{
				@media screen and (max-width: 768px) {
					display:none;
				}
			}
			p{
				margin-bottom: 0;
				&~p{
					margin-top: 1.2rem;
				}
			}
		}
	}

	.copyright{
		text-align: center;
		font-size: 1.8rem;
		padding: 30px 16px 27px;
		line-height: 1.26;
		background: #000000;
		@media screen and (max-width: 768px) {
			padding: 3.2rem 16px;
		}
	}
</style>
