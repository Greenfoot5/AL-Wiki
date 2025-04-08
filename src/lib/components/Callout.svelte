<script lang="ts">
    let { variant, children }: {variant: string, children: Function} = $props();

    let css_class: string = $state("callout");
    if (variant?.toLowerCase().startsWith("i"))
        css_class += " preset-tonal-tertiary";
    else if (variant?.toLowerCase().startsWith("w"))
        css_class += " preset-tonal-warning";
    else if (variant?.toLowerCase().startsWith("e"))
        css_class += " preset-tonal-error";
    else if (variant?.toLowerCase().startsWith("s"))
        css_class += " preset-tonal-success";
</script>

<div class="bg-surface-500/10 preset-tonal-primary {css_class}">
    {#if variant?.toLowerCase().startsWith("i")}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

    {:else if (variant?.toLowerCase().startsWith("w"))}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>

    {:else if (variant?.toLowerCase().startsWith("e"))}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
        </svg>

    {:else if (variant?.toLowerCase().startsWith("s"))}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    {/if}

    {@render children()}
</div>

<style lang="scss">
    @use '$lib/assets/scss/_vars.scss';

    .callout {
        padding: 0.5rem 1rem;
        width: calc(100% - 2em);
        max-width: unset;
        margin: 1rem 0 2rem 0;
        font-style: italic;

        //border-width: 10px;
        border: 0 solid;
        border-left-width: 5px;
        border-radius: 0.125rem;

        @media (min-width: vars.$mdMin) {
            width: calc(100% - 4rem);
            margin: 1rem 0 1rem 0;
            padding: 0.75rem 1rem;
        }

        svg {
            width: 1.5rem;
            height: 1.5rem;
            //margin-bottom: 0.25em;
            display: inline;
        }
    }
</style>
