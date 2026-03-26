<script lang="ts">
    import { onMount } from 'svelte';
    import {get_posts} from "$lib/posts";

    let posts: Post[] = $state([]);
    const { slug } = $props();

    // Simple relevance: same tag overlap
    let related: typeof posts = $state([]);

    onMount(async () => {
        let posts: Post[] = (await get_posts()).posts;
        const current = posts.find(p => p.slug === slug);
        console.log(current);
        if (!current) return;

        related = posts
            .filter(p => p.slug !== slug);
        console.log(related);
        related = related
            .filter(p => p.tags?.some(t => current.tags?.includes(t)));
        console.log(related);
        related = related
            .slice(0, 4); // limit to 4 cards
    });
</script>

{#if related.length}
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each related as { title, date, excerpt, thumbnail, slug, tags, updated }}
            <PostCard {title} {date} {updated} {excerpt} {slug} {tags} {thumbnail} />
        {/each}
    </div>
{:else}
    <p class="text-center opacity-60">No related posts found.</p>
{/if}
