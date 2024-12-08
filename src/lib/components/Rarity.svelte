<script>
    const { rarity } = $props();
</script>

{#if rarity.toLowerCase().startsWith("l")}
    <span style="color: var(--nord-orange)">Legendary</span>
{:else if rarity.toLowerCase().startsWith("e") || rarity.toLowerCase().startsWith("m")}
    <span style="color: var(--nord-purple)">Epic</span>
{:else if rarity.toLowerCase().startsWith("r")}
    <span style="color: var(--nord-frost-3)">Rare</span>
{:else}
    <span style="color: var(--nord-text)">Common</span>
{/if}
