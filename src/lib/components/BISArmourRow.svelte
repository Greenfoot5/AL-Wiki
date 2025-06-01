<script>
    import { ArrowBigRightDash } from "@lucide/svelte";

    let { item } = $props();
</script>

<td>{@render row(item.armour)}</td>
<td>{@render row(item.magic)}</td>
<td>{@render row(item.str)}</td>
<td>{@render row(item.dex)}</td>
<td>{@render row(item.int)}</td>
<td>{@render row(item.vit)}</td>

{#snippet row(stat)}
    {#if stat.size === 1 || stat[0] === stat[1]}
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
