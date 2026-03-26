<script lang="ts">
    import { onMount } from 'svelte';// the compiled mdsvex component

    // Store headings after the component mounts
    let headings: { id: string; text: string; level: number }[] = [];

    onMount(() => {
        // After the markdown is rendered, query the DOM for headings
        const nodes = document.querySelectorAll('article h2, article h3');
        headings = Array.from(nodes).map(node => ({
            id: node.id,
            text: node.textContent ?? '',
            level: node.tagName === 'H2' ? 2 : 3
        }));
    });
</script>

{#if headings.length}
    <nav class="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <h3 class="font-semibold mb-2">Contents</h3>
        <ul class="space-y-1">
            {#each headings as { id, text, level }}
                <li class="ml-{(level - 2) * 4}">
                    <a href={'#' + id} class="text-sm hover:underline">
                        {text}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
{/if}
