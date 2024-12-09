<script>
    let { item } = $props();
</script>

<td>{@render damage(item.damage)}</td>
<td>{@render row(item.speed)}</td>
<td>{@render row(item.str)}</td>
<td>{@render row(item.dex)}</td>
<td>{@render row(item.int)}</td>
<td>{@render row(item.vit)}</td>

{#snippet row(stat)}
    {#if stat[0] === stat[1]}
        {@render value(stat[0])}
    {:else}
        {@render value(stat[0])} ➠ {@render value(stat[1])}
    {/if}
{/snippet}

{#snippet value(data)}
    {#if data === "???"}
        <span style="color: var(--nord-purple);">???</span>
    {:else if data.toString().includes("?")}
        <span style="color: var(--nord-yellow);">{data}</span>
    {:else}
        {data}
    {/if}
{/snippet}

{#snippet damage(stat)}
    {#if stat[0] === stat[1]}
        {@render pair(stat[0])}
    {:else}
        {@render pair(stat[0])} ➠ {@render pair(stat[1])}
    {/if}
{/snippet}

{#snippet pair(data)}
    {#if data === "???"}
        <span style="color: var(--nord-purple);">???</span>
    {:else}
        {@render value(data[0])} - {@render value(data[1])}
    {/if}
{/snippet}
