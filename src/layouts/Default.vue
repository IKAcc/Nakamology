<template>
    <div class="layout">
        <slot/>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style lang="postcss" scoped>
.layout {
    @apply min-h-screen bg-nk-gray-500 text-white text-opacity-70 p-2;
}
</style>
