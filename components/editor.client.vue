<template>
	<div class="main-container">
		<div class="editor-container editor-container_balloon-editor" ref="editorContainerElement">
			<div class="editor-container__editor">
				<div ref="editorElement">
					<ckeditor v-if="editor && config" :modelValue="config.initialData" @input="onInput" v-model="content" :editor="editor" :config="config" />
				</div>
			</div>
			{{ content }}
		</div>
	</div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import { BalloonEditor, AutoLink, Autosave, Bold, Essentials, Italic, Link, Paragraph, Underline } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

const {initVal}  = defineProps({
    initVal:String
})

const isLayoutReady = ref(false);
const content = ref(initVal);
const editor = BalloonEditor;
const emit = defineEmits(['input'])

const onInput = (value) => {
    emit('input', value)
}



const config = computed(() => {
	if (!isLayoutReady.value) {
		return null;
	}

	return {
		toolbar: {
			items: ['bold', 'italic' , 'underline'],
			shouldNotGroupWhenFull: true
		},
		plugins: [AutoLink, Autosave, Bold, Essentials, Italic, Link, Paragraph, Underline],
		initialData: content.value,
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		placeholder: 'Type or paste your content here!'
	};
});

onMounted(() => {
	isLayoutReady.value = true;
});
</script>
