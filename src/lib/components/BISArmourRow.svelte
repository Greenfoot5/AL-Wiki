<script>
    import { ArrowBigRightDash } from "@lucide/svelte";

    let { item } = $props();
</script>

<td class="text-center">{@render row(item.armour)}</td>
<td class="text-center">{@render row(item.magic)}</td>
<td class="text-center">{@render row(item.str)}</td>
<td class="text-center">{@render row(item.dex)}</td>
<td class="text-center">{@render row(item.int)}</td>
<td class="text-center">{@render row(item.vit)}</td>

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
