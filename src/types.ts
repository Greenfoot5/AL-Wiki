declare interface Post {
    date: string;
    updated: string;
    title: string;
    tags: string[];
    readingTime: {
        text: string;
        minutes: number;
        time: number;
        words: number;
    };
    reading_time_text: string;
    excerpt: string;
    thumbnail: string | null;
    slug: string | null;
    path: string;
}
