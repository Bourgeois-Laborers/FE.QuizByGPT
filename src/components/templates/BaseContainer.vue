<template>
    <div class="component-container">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.component-container {
    width: 100%;
    margin: 0 auto;
    padding: var(--spacing-4);
}

@media (min-width: 576px) {
    .component-container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .component-container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .component-container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .component-container {
        max-width: 1140px;
    }
}

@media (min-width: 1400px) {
    .component-container {
        max-width: 1320px;
    }
}
</style>
