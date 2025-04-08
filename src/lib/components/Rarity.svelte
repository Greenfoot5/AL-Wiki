<script>
    const { rarity } = $props();
</script>

{#if rarity.toLowerCase().startsWith("l")}
    <span class="text-amber-500">Legendary</span>
{:else if rarity.toLowerCase().startsWith("e") || rarity.toLowerCase().startsWith("m")}
    <span class="text-indigo-400">Epic</span>
{:else if rarity.toLowerCase().startsWith("r")}
    <span class="text-blue-400">Rare</span>
{:else}
    <span class="text-base">Common</span>
{/if}
