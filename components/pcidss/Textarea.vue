<!-- <script setup>
    import { computed, ref, onMounted, watch, defineEmits } from 'vue';
    import { Ckeditor } from '@ckeditor/ckeditor5-vue';
    import { BalloonEditor, AutoLink, Autosave, Bold, Essentials, Italic, Link, Paragraph, Underline } from 'ckeditor5';
    import 'ckeditor5/ckeditor5.css';

    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        inputValue: {
            type: String,
            required: false,
        },
        rows: {
            type: Number,
            default: 4,
        },
    });

    const emit = defineEmits();

    const placeholder = ref('   ');
    const textareaRef = ref(null);

    const adjustHeight = () => {
        const textarea = textareaRef.value;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    onMounted(() => {
        adjustHeight();
    });

    watch(() => props.inputValue, adjustHeight);

    const isLayoutReady = ref(false);
    const content = ref('Hello....');
    const editor = BalloonEditor;

    const config = computed(() => {
        if (!isLayoutReady.value) {
            return null;
        }

        return {
            toolbar: {
                items: ['bold', 'italic', 'underline'],
                shouldNotGroupWhenFull: true,
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
                            download: 'file',
                        },
                    },
                },
            },
            placeholder: '   ',
        };
    });

    onMounted(() => {
        isLayoutReady.value = true;
    });

    const localValue = ref(props.inputValue || '');

    watch(
        () => props.inputValue,
        (newValue) => {
            localValue.value = newValue;
        }
    );

    const handleChange = (newValue) => {
        localValue.value = newValue;
        emit('update:inputValue', newValue);
    };
</script>

<template>
    <ckeditor
        v-if="editor && config"
        :modelValue="localValue"
        @update:modelValue="handleChange"
        :editor="editor"
        :config="config"
    />
    <input type="hidden" :name="name" :value="localValue" />
</template> -->


<script setup>
    import { computed, ref, onMounted, watch, defineEmits } from 'vue';
    import { Ckeditor } from '@ckeditor/ckeditor5-vue';
    import { BalloonEditor, AutoLink, Autosave, Bold, Essentials, Italic, Link, Paragraph, Underline, FontSize } from 'ckeditor5';
    import 'ckeditor5/ckeditor5.css';

    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        inputValue: {
            type: String,
            required: false,
        },
        rows: {
            type: Number,
            default: 4,
        },
    });

    const emit = defineEmits();

    const placeholder = ref('   ');
    const textareaRef = ref(null);

    const adjustEditorHeight = (editor) => {
        const editorElement = editor.ui.view.editable.element;
        editorElement.style.height = 'auto';  // Reset height
        editorElement.style.height = `${editorElement.scrollHeight}px`;  // Adjust to scrollHeight
    };

    // Initialize config with CKEditor setup
    const isLayoutReady = ref(false);
    const content = ref('Hello....');
    const editor = BalloonEditor;

    const config = computed(() => {
        if (!isLayoutReady.value) {
            return null;
        }

        return {
            toolbar: {
                items: ['bold', 'italic', 'underline','fontSize'],
                shouldNotGroupWhenFull: true,
            },
            plugins: [AutoLink, Autosave, Bold, Essentials, Italic, Link, Paragraph, Underline,FontSize,],
            initialData: content.value,
            link: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
                decorators: {
                    toggleDownloadable: {
                        mode: 'manual',
                        label: 'Downloadable',
                        attributes: {
                            download: 'file',
                        },
                    },
                },
            },
            placeholder: '   ',
        };
    });

    onMounted(() => {
        isLayoutReady.value = true;
    });

    const localValue = ref(props.inputValue || '');

    watch(
        () => props.inputValue,
        (newValue) => {
            localValue.value = newValue;
        }
    );

    const handleChange = (newValue) => {
        localValue.value = newValue;
        emit('update:inputValue', newValue);
    };

    const handleEditorReady = (editorInstance) => {
        // Adjust height when editor is ready
        adjustEditorHeight(editorInstance);

        // Watch for content changes to dynamically adjust height
        editorInstance.model.document.on('change:data', () => {
            adjustEditorHeight(editorInstance);
        });
    };
</script>

<template>
    <ckeditor
        v-if="editor && config"
        :modelValue="localValue"
        @update:modelValue="handleChange"
        :editor="editor"
        :config="config"
        @ready="handleEditorReady"
    />
    <input type="hidden" :name="name" :value="localValue" />
</template>
