<script setup lang="ts">
defineProps<{
	value: string;
}>();
</script>

<template>
	<MDC v-slot="{ body, data }" :value="value">
		<MDCRenderer
			:body="body"
			:data="data"
			:components="{
				p: h('p', { class: 'pb-2 mb-1 font-thin' }, h('slot')),
				h1: h('h1', { class: 'pb-2 pt-4 text-3xl font-medium' }, h('slot')),
				h2: h('h2', { class: 'pb-2 pt-4 text-2xl font-medium' }, h('slot')),
				h3: h('h3', { class: 'pb-2 pt-4 text-xl font-medium' }, h('slot')),
				ul: h('ul', { class: 'list-outside list-disc font-thin ml-5 mb-2' }, h('slot')),
				li: h('li', { class: 'ml-5' }, h('slot')),
				table: h('table', { class: 'mt-3 w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-md border border-gray-300 text-left dark:border-gray-700' }, h('slot')),
				thead: h('thead', { class: 'bg-acebooks-green-200 dark:bg-acebooks-green-700' }, h('slot')),
				tbody: h('tbody', {}, h('slot')),
				tr: h('tr', { class: 'last:[&>td]:border-b-0' }, h('slot')),
				th: h('th', { class: 'border-r border-b border-acebooks-green-200 py-2 px-3 last:border-r-0 dark:border-acebooks-green-700' }, h('slot')),
				td: h('td', { class: 'border-r border-b border-acebooks-green-200 py-2 px-3 last:border-r-0 dark:border-acebooks-green-700' }, h('slot')),
				a: h('a', { class: 'text-blue-600 underline', target: '_blank' }, h('slot')),
				strong: h('strong', {}, h('slot')),
			}"
		/>
	</MDC>
</template>
