<script setup lang="ts">
const headers = useRequestHeaders([
	'x-vercel-ip-timezone',
	'x-vercel-ip-latitude',
]);
const timezone = headers['x-vercel-ip-timezone'] ?? 'UTC';
const latitude = parseFloat(headers['x-vercel-ip-latitude'] ?? '0');

const backgroundUrl = computed(() => {
	return `/images/backgrounds/${getBackground(timezone, latitude)}.webp`;
});

const getDateInTimezone = (timezone: string) => {
	try {
		const parts = new Intl.DateTimeFormat('en-US', {
			timeZone: timezone,
			month: 'numeric',
			day: 'numeric',
		}).formatToParts(new Date());

		return {
			month: Number(parts.find(part => part.type === 'month')?.value),
			day: Number(parts.find(part => part.type === 'day')?.value),
		};
	} catch {
		// Si algo falla devolvemos una fecha del fondo 2 de primavera
		return {
			month: 6,
			day: 1,
		};
	}
}

const getBackground = (timezone: string, latitude: number) => {
	const { month, day } = getDateInTimezone(timezone);
	const south = latitude < 0;

	// Fondo 1 para primavera (del 20 de marzo al 4 de mayo)
	if ((month === 3 && day >= 20) || month === 4 || (month === 5 && day <= 4)) {
		return south ? 'bg_autumn' : 'bg_spring_bloom';
	}

	// Fondo 2 para primavera (del 5 de mayo al 20 de junio)
	if ((month === 5 && day >= 5) || month === 6 || (month === 7 && day <= 20)) {
		return south ? 'bg_autumn_rain' : 'bg_spring';
	}

	// Fondo 1 para verano (del 21 de junio al 6 de agosto)
	if ((month === 6 && day >= 21) || month === 7 || (month === 8 && day <= 6)) {
		return south ? 'bg_winter' : 'bg_summer';
	}

	// Fondo 2 para verano (del 7 de agosto al 21 de septiembre)
	if ((month === 8 && day >= 7) || month === 9 || (month === 9 && day <= 21)) {
		return south ? 'bg_winter_snowing' : 'bg_summer_wither';
	}

	// Fondo 1 para otoño (del 22 de septiembre al 6 de noviembre)
	if ((month === 9 && day >= 22) || month === 10 || (month === 11 && day <= 6)) {
		return south ? 'bg_spring_bloom' : 'bg_autumn';
	}

	// Fondo 2 para otoño (del 7 de noviembre al 20 de diciembre)
	if ((month === 11 && day >= 7) || month === 12 || (month === 12 && day <= 20)) {
		return south ? 'bg_spring' : 'bg_autumn_rain';
	}

	// Fondo 1 para invierno (del 21 de diciembre al 4 de febrero)
	if ((month === 12 && day >= 21) || month === 1 || (month === 2 && day <= 4)) {
		return south ? 'bg_summer' : 'bg_winter';
	}

	// Fondo 2 para invierno (del 5 de febrero al 19 de marzo)
	return south ? 'bg_summer_wither' : 'bg_winter_snowing';
}
</script>

<template>
	<NuxtImg :src="backgroundUrl" placeholder preload loading="lazy" />
</template>
