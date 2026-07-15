<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-row justify-end">
			<div class="hidden sm:block min-h-svh flex-1 relative">
				<NuxtImg src="/images/bg.webp" placeholder preload loading="lazy" class="absolute top-0 left-0 -z-10 w-full h-full object-cover" />
			</div>

			<!--
				El grid tiene tres filas:
				1. minmax(0, 1fr): espacio flexible encima del formulario.
				2. auto: el formulario ocupa solo la altura que necesita.
				3. minmax(0, 1fr): espacio flexible debajo del formulario.
				Como la primera y la tercera fila crecen igual, el formulario permanece centrado.
				FooterSlim se coloca al final de la tercera fila con self-end, sin sumar altura a la fila central.
			-->
			<main class="grid min-h-svh w-full grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] bg-acebooks-background sm:w-1/2 md:w-2/5 xl:w-2/6">
				<div class="row-start-2 flex flex-row items-center lg:px-8">
					<div class="w-full px-6 py-4">
						<NuxtLinkLocale to="/" class="flex flex-col items-center mb-8">
							<SvgIcon name="acebooks:logo" mode="svg" class="w-1/3 h-full fill-current text-acebooks-text" />
							<p class="mt-3 logo text-acebooks-text">Ace Books</p>
						</NuxtLinkLocale>

						<slot />
					</div>
				</div>

				<div class="row-start-3 self-end px-6 pb-4 lg:px-8">
					<FooterSlim />
				</div>
			</main>
		</div>
	</div>
</template>
