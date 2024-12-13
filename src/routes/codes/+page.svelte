<script>
    import Code from "$lib/components/Code.svelte";

    let { data } = $props();
    let future = data.future;
    let active = data.active;
    let expired = data.expired;
</script>

<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>Redeem Codes</title>
    <meta data-key="description" name="description" content="A list of all known past, present and future redemption codes">
    <meta property="og:title" content="Aeon's Legends - Redeem Codes" />
    <meta property="og:description" content="A list of all known past, present and future redemption codes" />
    <meta property="og:url" content="https://al.alchemix.dev/codes" />
</svelte:head>

<div class="title">
    <h1>Aeon's Legends Codes</h1>
    <p>You can enter codes into the input box in the settings menu to gain the various rewards</p>
</div>
<div class="body">
    <h2>Future Codes</h2>
    <p class="note">Please note that codes may change on release, some values added for reference</p>
    {#each future as code}
        <Code code={code} />
    {/each}

    <h2>Active Codes</h2>
    {#each active as code}
        <Code code={code} />
    {/each}

    <h2>Expired</h2>
    {#each expired as code}
        <Code code={code} />
    {/each}

</div>

<style lang="scss">
    @use "$lib/assets/scss/_vars.scss";

    .note {
        color: var(--nord-muted);
        font-size: 0.9rem;
        margin-top: 0.4em;
        margin-left: 0.5em;
        margin-bottom: 1em;

        @media (max-width: vars.$smMax) {
            font-size: 0.8rem;
        }
    }

    .body {
        padding-left: 2em;
        padding-bottom: 2em;
    }

    .title {
        padding-left: 1em;
        padding-top: 0.5em;
    }

    h2 {
        padding-top: 1em;
    }

    p {
        line-height: 0.75em;
    }
</style>
