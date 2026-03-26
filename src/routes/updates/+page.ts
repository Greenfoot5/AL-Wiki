import type { PageLoad } from './$types';
import {get_posts} from "$lib/posts";
let posts_per_page = 20;

export const load: PageLoad = async ({ fetch, url }) => {
    let posts: Post[] = (await get_posts()).posts;
    // 1️⃣ Grab the page number from the query string (defaults to 1)
    const page = Number(url.searchParams.get('page') ?? 1);

    // Filter posts
    const tagFilter = url.searchParams.get('tag');
    const filtered = tagFilter
        ? posts.filter((p: { tags: string[] }) =>
            p.tags?.includes(tagFilter),
        )
        : posts;

    // 4️⃣ Pagination maths
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
