<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
import { useHead } from 'nuxt/app'

useHead({
  title: 'Document Modifier',
  meta: [
    { property: 'og:title', content: 'Document Modifier' },
    { property: 'og:description', content: 'A user-friendly tool that allows you to easily update and modify DOCX documents by filling out simple input fields. Seamlessly integrate changes and download the updated file instantly.' },
    { property: 'og:image', content: '/backend/assets/images/logo.png' },
    { name: 'description', content: 'A user-friendly tool that allows you to easily update and modify DOCX documents by filling out simple input fields. Seamlessly integrate changes and download the updated file instantly.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Document Modifier' },
    { name: 'twitter:description', content: 'A user-friendly tool that allows you to easily update and modify DOCX documents by filling out simple input fields. Seamlessly integrate changes and download the updated file instantly.' },
    { name: 'twitter:image', content: '/backend/assets/images/logo_sm.png' },
    { name: 'twitter:site', content: '@DocxModify' },
    { name: 'csrf-token', content: '{{ csrf_token() }}' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/assets/images/logo_sm.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/images/logo_sm.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/images/logo_sm.png' }
  ]
})
</script>
