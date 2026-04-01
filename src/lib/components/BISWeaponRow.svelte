<script>
    import { ArrowBigRightDash } from "@lucide/svelte";

    let { item } = $props();
</script>

<td class="text-center">{@render damage(item.damage)}</td>
<td class="text-center">{@render row(item.speed)}</td>
<td class="text-center">{@render row(item.primary)}</td>
<td class="text-center">{@render row(item.secondary)}</td>
<td class="text-center">{@render row(item.normal)}</td>

{#snippet row(stat)}
    {#if stat.length === 1 || stat[0] === stat[1]}
        {@render value(stat[0])}
    {:else}
        {@render value(stat[0])} <ArrowBigRightDash class="inline mx-1" size={16} /> {@render value(stat[1])}
    {/if}
{/snippet}

{#snippet value(data)}
    {#if data === "???"}
        <span class="text-base-content/40 font-mono">???</span>
    {:else if data.toString().includes("?")}
        <span class="text-secondary font-mono">{data}</span>
    {:else}
        <span class="font-mono">{data}</span>
    {/if}
{/snippet}

{#snippet damage(stat)}
    {#if stat.length === 1 || (stat[0][0] === stat[1][0] && stat[0][1] === stat[1][1])}
        {@render pair(stat[0])}
    {:else}
        {@render pair(stat[0])} <ArrowBigRightDash class="inline mx-1" size={16} /> {@render pair(stat[1])}
    {/if}
{/snippet}

{#snippet pair(data)}
    {#if data === "???"}
        <span class="text-base-content/40 font-mono">???</span>
    {:else}
        {@render value(data[0])} - {@render value(data[1])}
    {/if}
{/snippet}
