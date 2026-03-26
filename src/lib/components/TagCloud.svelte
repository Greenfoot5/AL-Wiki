<script lang="ts">
    import { textToBadge } from '$lib/tagColors';

    /** The component expects an array of posts */
    let { posts } = $props();

    /** ---------------------------------------------------------
     *  Build a frequency map: { tagName: count }
     * ---------------------------------------------------------- */
    const tagFreq: Record<string, number> = {};

    for (const p of posts) {
        if (!p.tags) continue;
        for (const t of p.tags) {
            tagFreq[t] = (tagFreq[t] ?? 0) + 1;
        }
    }

    /** Convert to a sorted array (most used first) */
    const sortedTags = Object.entries(tagFreq).sort((a, b) => b[1] - a[1]);
</script>

<!-- -----------------------------------------------------------
     UI – DaisyUI “card” containing the cloud of badges
------------------------------------------------------------ -->
<div class="card bg-base-100 shadow-md">
    <div class="card-body">
        <h3 class="card-title mb-3">Tags</h3>

        {#if sortedTags.length === 0}
            <p class="text-sm opacity-70">No tags yet.</p>
        {:else}
            <div class="flex flex-wrap gap-2">
                {#each sortedTags as [tag, count]}
                    <a
                            href={`?tag=${encodeURIComponent(tag)}`}
                            class="badge badge-outline {textToBadge(tag)}"
                            title={`${count} post${count > 1 ? 's' : ''}`}
                    >
                        {tag}
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    /* Optional: make the badge a little larger on hover for a subtle effect */
    .badge:hover {
        transform: scale(1.05);
        transition: transform 0.15s ease;
    }
</style>
