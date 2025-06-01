<script>
    const { title, subtitle } = $props();
</script>

<div class="text-center">
    <h1 class="h1">{title}</h1>
    {#if subtitle}
        <p class="preset-typo-subtitle">
            {subtitle}
        </p>
    {/if}
</div>
