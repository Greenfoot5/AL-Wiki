<script>
    const { title, children } = $props();
</script>

<div class="text-center pb-8">
    <h1 class="h1">{title}</h1>
    {#if children}
        <p class="preset-typo-subtitle">
            {@render children()}
        </p>
    {/if}
</div>
