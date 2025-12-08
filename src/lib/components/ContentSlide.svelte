<script lang="ts">
    let { duration = 250, children }: {duration: Number, children: Function} = $props();
    import { Accordion } from "@skeletonlabs/skeleton-svelte";
    import { slide } from 'svelte/transition';
</script>

<Accordion.ItemContent>
    {#snippet element(attributes)}
        {#if !attributes.hidden}
            <div transition:slide={{ duration: duration }}>
                {@render children()}
            </div>
        {/if}
    {/snippet}
</Accordion.ItemContent>
