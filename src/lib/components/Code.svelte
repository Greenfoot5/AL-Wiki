<script>
    import Rarity from "$lib/components/Rarity.svelte";

    let { code } = $props();
</script>

<div class="card bg-base-100 border border-base-300 shadow-sm mb-4">
    <div class="card-body p-4">
        <!-- Code Header -->
        <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="badge badge-primary badge-outline font-mono text-base">{code.code}</span>

            {#if code.hasOwnProperty("expire")}
                <span class="text-sm text-base-content/60">
                    - Expired: <span class="font-mono">{code.expire.getUTCDate()}/{code.expire.getUTCMonth() + 1}/{code.expire.getUTCFullYear()}</span>
                </span>
            {:else if code.hasOwnProperty("available")}
                <span class="text-sm text-base-content/60">
                    - Available from: <span class="font-mono">{code.available.getUTCDate()}/{code.available.getUTCMonth() + 1}/{code.available.getUTCFullYear()}</span>
                </span>
            {/if}
        </div>

        {#if code.hasOwnProperty("note")}
            <p class="text-sm text-base-content/60 italic mt-1">{code.note}</p>
        {/if}

        <!-- Rewards Section -->
        <div class="mt-4 space-y-2">
            {#if code.hasOwnProperty("title")}
                <p class="font-semibold text-base-content">Title: {code.title}</p>
            {/if}

            {#if code.gold}
                <p class="text-sm"><span class="font-semibold">Gold:</span> {code.gold.toLocaleString()}</p>
            {/if}

            {#if code.diamonds}
                <p class="text-sm"><span class="font-semibold">Diamonds:</span> {code.diamonds.toLocaleString()}</p>
            {/if}

            {#if code.tokens}
                <p class="text-sm"><span class="font-semibold">Battle Tokens:</span> {code.tokens}</p>
            {/if}

            {#if code.synergy_stones}
                <p class="text-sm"><span class="font-semibold">Synergy Stones:</span> {code.synergy_stones}</p>
            {/if}

            {#if code.items}
                <h5 class="font-bold text-base mt-4 mb-2">Items:</h5>
                <ul class="list-disc list-inside text-sm space-y-1">
                    {#each code.items as item}
                        <li class="flex flex-wrap items-center gap-1">
                            <Rarity rarity={item.rarity} />

                            {#if item.slot}
                                <span class="font-medium">{item.slot}</span>
                            {:else}
                                <span class="font-medium">Item</span>
                            {/if}

                            {#if item.name}
                                - {item.name}
                            {:else if item.count > 1}
                                × {item.count}
                            {/if}

                            {#if item.cosmetic}
                                <span class="text-xs text-base-content/60 italic ml-2">(Cosmetic: {item.cosmetic})</span>
                            {/if}
                        </li>
                    {/each}
                </ul>
            {/if}

            {#if code.materials}
                <h5 class="font-bold text-base mt-4 mb-2">Materials:</h5>
                <ul class="list-disc list-inside text-sm space-y-1">
                    {#each code.materials as material}
                        <li class="flex flex-wrap items-center gap-1">
                            <Rarity rarity={material.rarity} />

                            {#if material.name}
                                <span class="font-medium">{material.name}</span>
                            {/if}

                            {#if material.count > 1}
                                <span class="text-base-content/70">× {material.count}</span>
                            {/if}
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
</div>
