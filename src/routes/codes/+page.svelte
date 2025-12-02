<script>
    import Code from "$lib/components/Code.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";

    let { data } = $props();
    // svelte-ignore state_referenced_locally
    let future = data.future;
    // svelte-ignore state_referenced_locally
    let active = data.active;
    // svelte-ignore state_referenced_locally
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

<PageTitle title="Aeon's Legends Codes">
    You can enter codes into the input box in the settings menu to gain the various rewards
</PageTitle>
<div class="body">
<!--    <h2 class="h2">Future Codes</h2>-->
<!--    <p class="note opacity-60">Please note that codes may change on release, some values added for reference</p>-->
<!--    {#each future as code}-->
<!--        <Code code={code} />-->
<!--    {/each}-->

    <h2 class="h2">Active Codes</h2>
    {#each active as code}
        <Code code={code} />
    {/each}

    <h2 class="h2">Expired</h2>
    {#each expired as code}
        <Code code={code} />
    {/each}

</div>

<style lang="scss">
    @use "$lib/assets/scss/_vars.scss";

    .body {
        padding-left: 2em;
        padding-bottom: 2em;
    }

    h2 {
        padding-top: 1em;
    }
</style>
