<script setup lang="ts">
interface Props {
	value: string;
}

defineProps<Props>();
</script>

<template>
	<MDC v-slot="{ body, data }" :value="value">
		<MDCRenderer
			:body="body"
			:data="data"
			:components="{
				p: h('p', { class: 'pb-2' }, h('slot')),
				h1: h('h1', { class: 'pb-2 text-3xl font-semibold' }, h('slot')),
				h2: h('h2', { class: 'pb-2 pt-4 text-2xl font-semibold' }, h('slot')),
				h3: h('h3', { class: 'pb-2 text-xl font-semibold' }, h('slot')),
				h4: h('h4', { class: 'pb-2 text-lg font-semibold' }, h('slot')),
				h5: h('h5', { class: 'pb-2 text-base font-semibold' }, h('slot')),
				h6: h('h6', { class: 'pb-2 text-sm font-semibold' }, h('slot')),
				ul: h('ul', { class: 'list-outside list-disc' }, h('slot')),
				ol: h('ol', { class: 'list-outside list-decimal' }, h('slot')),
				li: h('li', { class: 'ml-5' }, h('slot')),
				blockquote: h('blockquote', {}, h('slot')),
				hr: h('hr', {}),
				pre: h('pre', { class: 'bg-gray-800 text-white p-4 rounded-md overflow-auto' }, h('slot')),
				code: h('code', { class: 'bg-gray-800 text-white p-1 rounded-md' }, h('slot')),
				table: h('table', { class: 'w-full table-fixed rounded-md overflow-hidden text-left mt-3' }, h('slot')),
				thead: h('thead', { class: 'bg-gray-300 bg-opacity-80 overflow-hidden' }, h('slot')),
				tbody: h('tbody', { class: 'bg-gray-200 overflow-hidden' }, h('slot')),
				tr: h('tr', {}, h('slot')),
				th: h('th', { class: 'py-2 px-3' }, h('slot')),
				td: h('td', { class: 'py-2 px-3 border-t border-gray-300' }, h('slot')),
				a: h('a', { class: 'text-blue-600 underline' }, h('slot')),
				img: h('img', { class: 'w-full' }),
				em: h('em', {}, h('slot')),
				strong: h('strong', {}, h('slot')),
			}"
		/>
	</MDC>
</template>
