<script>
    import Rarity from "$lib/components/Rarity.svelte";

    let { code } = $props();
</script>

<code>{code.code}</code>
{#if code.hasOwnProperty("expire")}
    - Expired: <code>{code.expire.getUTCDate()}/{code.expire.getUTCMonth()}/{code.expire.getUTCFullYear()}</code>
{:else if code.hasOwnProperty("available")}
    - Available From: <code>{code.available.getUTCDate()}/{code.available.getUTCMonth() + 1}/{code.available.getUTCFullYear()}</code>
{/if}
{#if code.hasOwnProperty("note")}
    <p class="note">{code.note}</p>
{/if}
<div class="code-content">
    {#if code.hasOwnProperty("title")}
        <p>Title: {code.title}</p>
    {/if}
    <p style="color: var(--nord-yellow)">Gold: {code.gold.toLocaleString()}</p>
    <p style="color: var(--nord-frost-2)">Diamonds: {code.diamonds.toLocaleString()}</p>
    {#if code.hasOwnProperty("tokens")}
        <p>Battle Tokens: {code.tokens}</p>
    {/if}
    {#if code.hasOwnProperty("synergy_stones")}
        <p style="color: var(--nord-frost-0)">Synergy Stones: {code.synergy_stones}</p>
    {/if}
    {#if code.hasOwnProperty("items")}
        <h5>Items:</h5>
        <ul>
            {#each code.items as item}
                <li>
                    <Rarity rarity={item.rarity} />

                    {#if item.hasOwnProperty("slot")}
                        {item.slot}
                    {:else}
                        Item
                    {/if}

                    {#if item.hasOwnProperty("name")}
                        - {item.name}
                    {:else if item.count > 1}
                        × {item.count}
                    {/if}

                    {#if item.hasOwnProperty("cosmetic")}
                        <p class="note">Cosmetic: {item.cosmetic}</p>
                    {/if}
                </li>
            {/each}
        </ul>
    {/if}
    {#if code.hasOwnProperty("materials")}
        <h5>Materials:</h5>
        <ul>
            {#each code.materials as material}
                <li>
                    <Rarity rarity={material.rarity} />

                    {#if material.hasOwnProperty("name")}
                        {material.name}
                    {/if}
                    {#if material.count > 1}
                        × {material.count}
                    {/if}
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style lang="scss">
    @use "$lib/assets/scss/_vars.scss";

    h5 {
        margin-bottom: 0.2em;
    }

    .code-content {
        width: auto;
        position: relative;
        overflow: hidden;
        margin-bottom: 1em;

        &::after {
            content: '';
            height: 0.05em;
            background: var(--nord-frost-0);
            width: 8em;
            position: absolute;
            bottom: 0;
            margin-top: 0.2em;
        }
    }

    ul {
        margin-top: 0;
    }

    p {
        line-height: 0.75em;
        margin-top: 0.2em;
        margin-bottom: 1em;
    }

    .note {
        color: var(--nord-muted);
        font-size: 0.9rem;
        margin-top: 0.4em;
        margin-left: 0.5em;
        margin-bottom: 1em;

        @media (max-width: vars.$smMax) {
            font-size: 0.8rem;
        }
    }
</style>
