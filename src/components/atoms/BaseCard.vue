<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style>
.card {
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--spacing-1);
    box-shadow: var(--shadow-1);
}
</style>
