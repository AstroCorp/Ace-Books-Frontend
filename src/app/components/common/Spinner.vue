<script setup lang="ts">
const props = defineProps<{
	color: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
}>();
</script>

<template>
	<div class="spinner flex justify-center items-center w-full h-full">
		<div
			v-for="value in 3"
			class="w-2 h-2 inline-block rounded-full"
			:class="{
				[`bounce${value}`]: true,
				'mx-1': value === 2,
				'bg-acebooks-green-50': props.color === 50,
				'bg-acebooks-green-100': props.color === 100,
				'bg-acebooks-green-200': props.color === 200,
				'bg-acebooks-green-300': props.color === 300,
				'bg-acebooks-green-400': props.color === 400,
				'bg-acebooks-green-500': props.color === 500,
				'bg-acebooks-green-600': props.color === 600,
				'bg-acebooks-green-700': props.color === 700,
				'bg-acebooks-green-800': props.color === 800,
				'bg-acebooks-green-900': props.color === 900,
				'bg-acebooks-green-950': props.color === 950,
			}"
		></div>
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
