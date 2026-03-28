<script lang="ts">
    import { onMount } from 'svelte';
    import RelatedPosts from '$lib/components/RelatedPosts.svelte';
    import TocSidebar from '$lib/components/toc.svelte';
    import { textToBadge } from '$lib/tagColors';

    const { data } = $props();

    // Scroll to top when navigating to a new post
    onMount(() => window.scrollTo(0, 0));
</script>

<!-- -------------------------------------------------------------
     GLOBAL HEADER
-------------------------------------------------------------- -->
<svelte:head>
    <title>{data.meta.title}</title>
    <meta name="description" content={data.meta.excerpt} />
    <meta property="og:title" content="Aeon's Legends - {data.meta.title}" />
    <meta property="og:description" content={data.meta.excerpt} />
    <meta property="og:url" content="https://al.alchemix.dev/updates/{data.meta.slug}" />
</svelte:head>
<!-- -------------------------------------------------------------
     OPTIONAL HERO (full‑width background image)
-------------------------------------------------------------- -->
{#if data.meta.thumbnail}
    <section
            class="hero min-h-[30vh] bg-cover bg-center text-white"
            style="background-image: url('/{data.meta.thumbnail}')"
    >
        <div class="hero-overlay bg-black/40"></div>
        <div class="hero-content text-center">
            <h1 class="text-4xl md:text-5xl font-bold">{data.meta.title}</h1>
        </div>
    </section>
{:else}
    <!-- Simple title strip when no hero image -->
    <section class="bg-base-300 py-8">
        <div class="container mx-auto text-center">
            <h1 class="text-3xl md:text-4xl font-bold">{data.meta.title}</h1>
        </div>
    </section>
{/if}

<!-- -------------------------------------------------------------
     MAIN CONTENT AREA
-------------------------------------------------------------- -->
<main class="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8 bg-base-200">

    <!-- ==== LEFT SIDE: Article (takes most width) ==== -->
    <article class="lg:flex-1 flex flex-col">

        <!-- Meta line (date, author, reading time) -->
        <div class="flex flex-col sm:flex-row sm:items-center text-sm opacity-70 mb-4 pl-6">
            <span>Released: <time datetime={data.meta.date}>{new Date(data.meta.date).toLocaleDateString()}</time></span>
            {#if data.meta.updated && data.meta.updated > data.meta.date}
                <span class="mx-2 hidden sm:inline">·</span>
                <span>Updated: <time datetime={data.meta.updated}>{new Date(data.meta.updated).toLocaleDateString()}</time></span>
            {/if}
            {#if data.meta.readingTime}
                <span class="mx-2 hidden sm:inline">·</span>
                <span>{data.meta.readingTime.text}</span>
            {/if}
        </div>

        <!-- Tag list (deterministic colour badges) -->
        {#if data.meta.tags?.length}
            <div class="mb-6 flex flex-wrap gap-2 pl-6">
                {#each data.meta.tags as tag}
                    <span class="badge badge-outline badge-sm {textToBadge(tag)}">
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}

        <!-- Render the mdsvex component (the markdown body) -->
        <div class="all-prose lg:mr-8" style="max-width: 100%">
            <data.Content />
        </div>
    </article>

    <!-- ==== RIGHT SIDE: TOC (sticky on desktop) ==== -->
    <aside class="hidden lg:block w-1/4 shrink-0">
        <TocSidebar />
    </aside>
</main>

<!-- -------------------------------------------------------------
     RELATED POSTS SECTION
-------------------------------------------------------------- -->
<section class="bg-base-300 py-12">
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-center">Related Posts</h2>
        <RelatedPosts slug={data.meta.slug} />
    </div>
</section>
