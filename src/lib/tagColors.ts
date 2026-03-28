// src/lib/utils/tagColors.ts
export const DAISY_COLORS = [
    'primary',
    'secondary',
    'accent',
    'info',
    'success',
    'warning',
    'error',
];

export const DAISY_BADGES = [
    'badge-primary',
    'badge-secondary',
    'badge-accent',
    'badge-info',
    'badge-success',
    'badge-warning',
    'badge-error',
];


export function textToColor(tag: string): string {
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
        hash = (hash << 5) - hash + tag.charCodeAt(i);
        hash |= 0;
    }
    const idx = Math.abs(hash) % DAISY_COLORS.length;
    return DAISY_COLORS[idx];
}

export function textToBadge(tag: string): string {
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
        hash = (hash << 5) - hash + tag.charCodeAt(i);
        hash |= 0;
    }
    const idx = Math.abs(hash) % DAISY_BADGES.length;
    return DAISY_BADGES[idx];
}
