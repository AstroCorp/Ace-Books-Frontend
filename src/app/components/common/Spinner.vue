<template>
	<div class="spinner flex justify-center items-center w-full h-full">
		<div class="bounce1 bg-acebooks-green-100 w-2 h-2 inline-block rounded-full"></div>
		<div class="bounce2 bg-acebooks-green-100 w-2 h-2 inline-block rounded-full mx-1"></div>
		<div class="bounce3 bg-acebooks-green-100 w-2 h-2 inline-block rounded-full"></div>
	</div>
</template>

<style scoped>
.spinner > div {
	-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
	-webkit-animation-delay: -0.32s;
	animation-delay: -0.32s;
}

.spinner .bounce2 {
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
	0%,
	80%,
	100% {
		-webkit-transform: scale(0)
	}

	40% {
		-webkit-transform: scale(1.0)
	}
}

@keyframes sk-bouncedelay {
	0%,
	80%,
	100% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}

	40% {
		-webkit-transform: scale(1.0);
		transform: scale(1.0);
	}
}
</style>
