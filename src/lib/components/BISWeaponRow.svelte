<script>
    import {ArrowBigRightDash} from "@lucide/svelte";

    let { item } = $props();
    console.log(item);
</script>

<td>{@render damage(item.damage)}</td>
<td>{@render row(item.speed)}</td>
<td>{@render row(item.primary)}</td>
<td>{@render row(item.secondary)}</td>
<td>{@render row(item.normal)}</td>

{#snippet row(stat)}
    {#if stat.length === 1 || stat[0] === stat[1]}
        {@render value(stat[0])}
    {:else}
        {@render value(stat[0])} <ArrowBigRightDash class="inline" size={20}/> {@render value(stat[1])}
    {/if}
{/snippet}

{#snippet value(data)}
    {#if data === "???"}
        <span class="text-surface-600-400">???</span>
    {:else if data.toString().includes("?")}
        <span class="text-warning-600-400">{data}</span>
    {:else}
        {data}
    {/if}
{/snippet}

{#snippet damage(stat)}
    {#if stat.length === 1 || (stat[0][0] === stat[1][0] && stat[0][1] === stat[1][1])}
        {@render pair(stat[0])}
    {:else}
        {@render pair(stat[0])} <ArrowBigRightDash class="inline" size={20}/> {@render pair(stat[1])}
    {/if}
{/snippet}

{#snippet pair(data)}
    {#if data === "???"}
        <span class="text-surface-600-400">>???</span>
    {:else}
        {@render value(data[0])} - {@render value(data[1])}
    {/if}
{/snippet}
