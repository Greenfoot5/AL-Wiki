<script lang="ts">
    /** Load the three newest markdown posts from /posts */
    import { onMount } from 'svelte';
    import {get_posts} from "$lib/posts";
    let latest: Post[] = $state([]);

    onMount(async () => {
        let posts: { posts: Post[] } = await get_posts();
        latest = posts.posts.slice(0, 3);
    });
</script>

<h2 class="text-3xl font-bold text-center mb-8">Latest Updates</h2>

<div class="container mx-auto grid md:grid-cols-3 gap-6 px-4">
    {#each latest as { title, date, slug, description }}
        <a href={`/updates/${slug}`} class="card bg-base-100 shadow-md hover:shadow-xl transition">
            <div class="card-body">
                <h3 class="card-title">{title}</h3>
                <p class="text-sm opacity-70">{new Date(date).toLocaleDateString()}</p>
                <p class="line-clamp-3">{description ?? ''}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-accent">Read More</button>
                </div>
            </div>
        </a>
    {:else}
        <span class="col-start-2 place-self-center loading loading-infinity loading-xl text-accent"></span>
    {/each}
</div>
