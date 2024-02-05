<script setup lang="ts">
import { ref } from 'vue'
import { BaseModal, BaseLabel, BaseInput, BaseButton } from '@/components/atoms'

const emit = defineEmits<{
    (e: 'submit', name: string): void
}>()

const name = ref('')

const onSubmit = () => {
    emit('submit', name.value.trim())
}
</script>

<template>
    <BaseModal>
        <form class="name-form" @submit.prevent="onSubmit">
            <BaseLabel for="name" class="mb-1">{{ $t('app.home.name.label') }}</BaseLabel>
            <BaseInput
                v-model="name"
                id="name"
                type="text"
                inputmode="text"
                autofocus
                required
                minlength="3"
                maxlength="20"
                :placeholder="$t('app.home.name.placeholder')"
                class="mb-4"
            />
            <BaseButton type="submit">{{ $t('app.home.name.submit') }}</BaseButton>
        </form>
    </BaseModal>
</template>

<style lang="scss">
.name-form {
    display: flex;
    flex-direction: column;
}
</style>
