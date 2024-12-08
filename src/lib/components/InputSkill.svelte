<script>
    export let id;
    export let data;
    export let placeholder = "Input";
</script>

<div class="input">
    <input id="{id}" type="number" min="1" bind:value={$data}/>
    <label for="{id}">{placeholder}</label>
</div>

<style lang="scss">
    @use '$lib/assets/scss/vars';

    .input {
        position: relative;

        border-radius: 0.375em;
        border-color: var(--nord-10);
        border-width: 1em;
        box-shadow: 0 0 0 0.2em var(--nord-muted);

        :focus {
            border-radius: 0.375em;
            border-color: var(--nord-overlay);
            border-width: 1em;
            box-shadow: 0 0 0 0.3em var(--nord-overlay);
        }

        input {
            height: 2.2em;
            background-color: transparent;
            background-clip: padding-box;
            color: var(--nord-text);
            border: none;
            font-size: 1rem;
            appearance: none;
            padding: 0.7em;

            @media(max-width: vars.$smMax) {
              width: 6em;
            }
        }

        label {
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-115%) scale(0.75);
            color: var(--nord-subtle);
            background-color: var(--nord-base);
            padding: 0.2em;
        }
    }

    input:invalid {
        color: var(--nord-11);
    }
</style>
