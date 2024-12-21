<div class="callout">
    <slot />
</div>

<style lang="scss">

    @use '$lib/assets/scss/_vars.scss';
    .callout {
        background: var(--nord-overlay);
        padding: 0.5rem 1rem;
        width: calc(100% - 2em);
        max-width: unset;
        margin: 1rem 0 2rem 0;
        font-style: italic;

        //border-width: 10px;
        border: 0 solid;
        border-left-width: 5px;
        border-color: var(--nord-frost-0);
        border-radius: 0.125rem;

        @media (min-width: vars.$mdMin) {
            width: calc(100% - 4rem);
            margin: 1rem 0 1rem 0;
            padding: 0.75rem 1rem;
        }
    }
</style>
