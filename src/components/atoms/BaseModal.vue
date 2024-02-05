<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const dialog = ref<HTMLDialogElement | null>(null)

onMounted(() => {
    dialog.value?.showModal()
})

onUnmounted(() => {
    dialog.value?.close()
})
</script>

<template>
    <Teleport to="body">
        <dialog ref="dialog" class="base-modal">
            <slot></slot>
        </dialog>
    </Teleport>
</template>
