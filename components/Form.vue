<template>
	<form class="form" action="">
		<div class="form__input-group">
			<input class="form__input" type="text" placeholder="Enter your email">
			<button class="form__btn">
				<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.43 18.8201C14.24 18.8201 14.05 18.7501 13.9 18.6001C13.61 18.3101 13.61 17.8301 13.9 17.5401L19.44 12.0001L13.9 6.46012C13.61 6.17012 13.61 5.69012 13.9 5.40012C14.19 5.11012 14.67 5.11012 14.96 5.40012L21.03 11.4701C21.32 11.7601 21.32 12.2401 21.03 12.5301L14.96 18.6001C14.81 18.7501 14.62 18.8201 14.43 18.8201Z"/>
					<path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"/>
				</svg>
			</button>
		</div>
	</form>
</template>
<style lang="scss">
.form{
	&__input-group{
		width: 100%;
		border-radius: 0.8rem;
		position: relative;
		svg{
			fill: #000;
		}
	}
	&__input{
		width: 100%;
		padding: 1.8rem 1.4rem;
		border-radius: 0.8rem;
		&:focus{
			outline-color: #079BEE
		}
		&::placeholder{
			color: #545454;
			font-size: 1.4rem;
		}
	}
	&__btn{
		position: absolute;
		right: 1.4rem;
		width: 2.4rem;
		height: 2.4rem;
		padding: 0;
		cursor: pointer;
		top: 50%;
		background: none;
		border: none;
		text-align: center;
		transform: translateY(-50%);
		&:hover{
			opacity: 0.6;
		}
	}

}

</style>
