<script>
    const { rarity } = $props();
</script>

{#if rarity.toLowerCase().startsWith("legendary")}
    <span class="text-amber-500">Legendary</span>
{:else if rarity.toLowerCase().startsWith("epic") || rarity.toLowerCase().startsWith("mythic")}
    <span class="text-indigo-400">Epic</span>
{:else if rarity.toLowerCase().startsWith("rare")}
    <span class="text-blue-400">Rare</span>
{:else if rarity.toLowerCase().startsWith("common")}
    <span>Common</span>
{:else}
    <span>{rarity}</span>
{/if}

