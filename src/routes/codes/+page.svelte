<script>
    import Code from "$lib/components/Code.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Callout from "$lib/components/Callout.svelte";

    let { data } = $props();

    // Destructure data safely
    let future = data.future ?? [];
    let active = data.active ?? [];
    let expired = data.expired ?? [];
</script>

<svelte:head>
    <title>Redeem Codes</title>
    <meta name="description" content="A list of all known past, present and future redemption codes" />
    <meta property="og:title" content="Aeon's Legends - Redeem Codes" />
    <meta property="og:description" content="A list of all known past, present and future redemption codes" />
    <meta property="og:url" content="https://al.alchemix.dev/codes" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
    <PageTitle title="Aeon's Legends Codes">
        You can enter codes into the input box in the settings menu to gain the various rewards.
    </PageTitle>

    <!-- Future Codes Section (Commented out in original, kept structure for reference) -->
    {#if future.length > 0}
        <div class="mt-8">
            <h2 class="text-2xl font-bold mb-4 text-info">Future Codes</h2>
            <Callout variant="info" class="mb-4">
                Please note that codes may change on release; some values are added for reference.
            </Callout>
            {#each future as code}
                <Code code={code} />
            {/each}
        </div>
        <div class="divider my-6"></div>
    {/if}

    <!-- Active Codes Section -->
    <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4 text-secondary">Active Codes</h2>
        {#if active.length === 0}
            <Callout variant="warning">
                No active codes are currently available. Check back later!
            </Callout>
        {:else}
            {#each active as code}
                <Code code={code} />
            {/each}
        {/if}
    </div>


    <!-- Expired Codes Section -->
    <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4 text-warning">Expired Codes</h2>
        {#if expired.length === 0}
            <p class="text-base-content/60">No expired codes recorded yet.</p>
        {:else}
            {#each expired as code}
                <Code code={code} />
            {/each}
        {/if}
    </div>
</div>
