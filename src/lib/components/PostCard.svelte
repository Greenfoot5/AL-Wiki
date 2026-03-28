<script lang="ts">
    import { textToBadge } from '$lib/tagColors';

    let { slug, thumbnail, title, date, updated, excerpt, tags } = $props();

    function isNew(dateStr: string): boolean {
        const postDate = new Date(dateStr);
        const now = new Date();

        // Strip the time portion – we only care about the day
        const postDay = new Date(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());
        const today   = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const diffDays = (today.getTime() - postDay.getTime()) / (1000 * 60 * 60 * 24);

        // diffDays === 0 → today, === 1 → yesterday
        return diffDays === 0 || diffDays === 1;
    }
</script>

<a href={`/news/${slug}#top`} class="card bg-base-100 shadow-xl hover:shadow-2xl transition hover:bg-neutral border-2
border-base-200 hover:border-base-300 post-indicator hover:text-neutral-content {thumbnail ? 'row-span-2' : ''}">
    {#if isNew(date)}
        <span class="indicator-item badge badge-primary badge-sm whitespace-nowrap indicator-start ml-3">
            New
        </span>
    {/if}
    {#if isNew(updated)}
        <span class="indicator-item badge badge-secondary badge-sm whitespace-nowrap indicator-start ml-6">
            Updated
        </span>
    {/if}
    {#if thumbnail}
        <figure class="h-48 overflow-hidden">
            <img src={thumbnail} alt={title} class="object-cover w-full h-full"/>
        </figure>
    {/if}
    <div class="card-body">
        <h2 class="card-title text-lg line-clamp-2">{title}</h2>
        <p class="text-xs opacity-60">{new Date(date).toLocaleDateString()}</p>
        <p class="text-sm opacity-80 clamp-3 line-clamp-4">{excerpt}</p>

        {#if tags?.length}
            <div class="mt-2 flex flex-wrap gap-1">
                {#each tags as tag}
                    <span class="badge badge-outline badge-sm {textToBadge(tag)}">{tag}</span>
                {/each}
            </div>
        {/if}
    </div>
</a>

<style>
    .post-indicator {
        :where(.indicator-item) {
            z-index: 1;
            white-space: nowrap;
            top: var(--indicator-t,0);
            bottom: var(--indicator-b,auto);
            left: var(--indicator-s,auto);
            right: var(--indicator-e,0);
            translate: var(--indicator-x,50%)var(--indicator-y,-50%);
            position: absolute;
        }
    }

    .clamp-3 {
        max-height: calc(1.3rem * 4);
    }
</style>
