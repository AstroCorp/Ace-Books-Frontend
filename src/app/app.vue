<template>
	<UApp>
		<NuxtLayout>
			<NuxtLoadingIndicator
				:height="4"
				color="var(--color-acebooks-success-background)"
				error-color="var(--color-acebooks-error-background)"
			/>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
