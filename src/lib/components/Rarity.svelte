<script>
    const { rarity } = $props();
</script>

{#if rarity.toLowerCase().startsWith("l")}
    <span class="badge text-amber-500">Legendary</span>
{:else if rarity.toLowerCase().startsWith("e") || rarity.toLowerCase().startsWith("m")}
    <span class="badge text-indigo-400">Epic</span>
{:else if rarity.toLowerCase().startsWith("r")}
    <span class="badge text-blue-400">Rare</span>
{:else}
    <span class="text-base">Common</span>
{/if}

