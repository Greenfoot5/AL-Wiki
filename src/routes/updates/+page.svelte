<script lang="ts">
    import TagCloud from '$lib/components/TagCloud.svelte';
    import PostCard from '$lib/components/PostCard.svelte';
    import {get_posts} from "$lib/posts";
    import {onMount} from "svelte";

    let data = {
        posts: new Array<Post>(),
        all: new Array<Post>(),
        page: 0,
        totalPages: 0,
        total: 0
    };
    const posts_per_page = 20;

    const loadPosts = async () => {
        let posts: Post[] = (await get_posts()).posts;
        console.log(posts);
        // Grab the page number from the query string (defaults to 1)
        const searchParams = new URLSearchParams(window.location.search);
        const page = Number(searchParams.get('page') ?? 1);

        // Filter posts
        const tagFilter = searchParams.get('tag');
        const filtered = tagFilter
            ? posts.filter((p: { tags: string[] }) =>
                p.tags?.includes(tagFilter),
            )
            : posts;

        // Pagination maths
        const total = filtered.length;
        const totalPages = Math.ceil(total / posts_per_page);
        const start = (page - 1) * posts_per_page;
        const end = start + posts_per_page;
        const paginated = filtered.slice(start, end);

        return {
            posts: paginated,
            all: filtered,
            page,
            totalPages,
            total,
        };
    };

    let promise = new Promise(() => {});

    onMount(() => {
        promise = (async () => {
            data = await loadPosts();
        })();
    });

</script>

<svelte:head>
    <title>Updates</title>
    <meta name="description" content="View the latest updates for Aeon's Legends" />
    <meta property="og:title" content="Aeon's Legends - Updates" />
    <meta property="og:description" content="View the latest updates for Aeon's Legends" />
    <meta property="og:url" content="https://al.alchemix.dev/updates" />
</svelte:head>

<!-- -------------------------------------------------------------
     HERO / INTRO SECTION (optional – you can delete if you want)
-------------------------------------------------------------- -->
<section class="hero bg-base-200 py-12">
    <div class="hero-content text-center">
        <div class="max-w-2xl">
            <h1 class="text-4xl font-bold mb-4">Latest News</h1>
            <p class="text-lg opacity-80">
                Stay up‑to‑date with game news, updates and more!
            </p>
        </div>
    </div>
</section>

<!-- -------------------------------------------------------------
     MAIN CONTENT – two‑column layout (sidebar hidden on mobile)
-------------------------------------------------------------- -->
<div class="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">

    <!-- ==== LEFT COLUMN: Blog post cards ==== -->
    <section class="md:col-span-3">

        <!-- Post grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min grid-flow-dense">
            {#each data.posts as { title, date, excerpt, thumbnail, updated, slug, tags }}
                <PostCard {title} {date} {excerpt} {slug} {tags} {thumbnail} {updated} />
            {/each}
        </div>

        <!-- ==================== PAGINATION ==================== -->
        {#if data.totalPages > 1}
            <div class="join justify-center mt-10">
                <!-- Previous -->
                <a
                        class="join-item btn btn-sm {data.page === 1 ? 'btn-disabled' : ''}"
                        href="?page={data.page - 1}"
                        aria-label="Previous page"
                >
                    « Prev
                </a>

                <!-- Page numbers (show max 5 around current) -->
                {#each Array(data.totalPages) as _, i (i)}
                    {#if Math.abs(i + 1 - data.page) <= 2 || i === 0 || i === data.totalPages - 1}
                        <a
                                class="join-item btn btn-sm {data.page === i + 1 ? 'btn-active' : ''}"
                                href="?page={i + 1}"
                        >{i + 1}</a>
                    {:else if i === data.page - 3 || i === data.page + 1}
                        <span class="join-item btn btn-sm btn-disabled">…</span>
                    {/if}
                {/each}

                <!-- Next -->
                <a
                        class="join-item btn btn-sm {data.page === data.totalPages ? 'btn-disabled' : ''}"
                        href="?page={data.page + 1}"
                        aria-label="Next page"
                >
                    Next »
                </a>
            </div>
        {/if}
    </section>

    <!-- ==== RIGHT COLUMN: Sidebar (desktop only) ==== -->
    <aside class="hidden md:block md:col-span-1">
        <!-- Recent posts (reuse the same data, just take the first 5) -->
        <div class="card bg-base-100 shadow-md mb-4 pr-4">
            <div class="card-body">
                <h3 class="card-title mb-3">Recent Posts</h3>
                <ul class="menu menu-compact">
                    {#each data.all.slice(0,5) as { title, slug }}
                        <li class="truncate"><a href={`/news/${slug}`}>{title}</a></li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Tag cloud (collect tags from all posts) -->
        <TagCloud posts={data.posts}/>
    </aside>
</div>

<!-- -------------------------------------------------------------
     TAG CLOUD COMPONENT (placed at bottom of file for clarity)
-------------------------------------------------------------- -->
