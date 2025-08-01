<script>
    import Callout from "$lib/components/Callout.svelte";
    import PreviousTiers from "$lib/components/PreviousTiers.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import BISAccordion from "$lib/components/BISAccordion.svelte";
    import { Tabs } from '@skeletonlabs/skeleton-svelte';

    let group = $state('t4');

    let { data } = $props();
</script>


<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>Best in Slot</title>
    <meta data-key="description" name="description" content="A collection of the best stat rolls (drop stats) for each item tier in the game.">
    <meta property="og:title" content="Aeon's Legends - Best in Slot" />
    <meta property="og:description" content="A collection of the best stat rolls (drop stats) for each item tier in the game." />
    <meta property="og:url" content="https://al.alchemix.dev/bis" />
</svelte:head>

<div class="body">
    <PageTitle title="Best In Slot">
        A list of the best stat rolls (drop stats) for each item tier in the game.
        Unknown stats are replaced with <span class="text-surface-600-400">???</span> and stats with <span class="text-warning-600-400">?</span> may not be the highest possible value.
        Please let Greenfoot5 know either in-game or via Discord if you've got any missing data, or if you feel some data is wrong!
    </PageTitle>
    <p>Items can be upgraded up to 10 times. Each stat lists first the value without any upgrades, then the value at max upgrade.</p>

    <Tabs value={group} onValueChange={(e) => (group = e.value)} fluid>
        {#snippet list()}
            <Tabs.Control value="t4"><h4 class="h4"><span class="chip preset-tonal-success mr-4 align-middle">NEW</span>Tier 4</h4></Tabs.Control>
            <Tabs.Control value="t3"><h4 class="h4">Tier 3</h4></Tabs.Control>
        {/snippet}
        {#snippet content()}
            <Tabs.Panel value="t4">
                <Callout variant="info">Many values are inaccurate or missing, please help us update them by sharing your stats!</Callout>
                <BISAccordion data={data.t4} />
            </Tabs.Panel>
            <Tabs.Panel value="t3">
                <Callout variant="warning">This page will no longer be actively updated as T4 has been released. Pull requests will still be reviewed.</Callout>
                <Callout variant="warning">Due to a change in the way weapons' data is stored, weapon secondary/normal values may be primary/secondary scaled instead (making them higher than possible).
                The original data has been kept, and is available <a class="anchor" href="https://github.com/Greenfoot5/AL-Wiki/blob/master/static/bis_t3.toml">on Github</a>.</Callout>
                <BISAccordion data={data.t3} />
            </Tabs.Panel>
        {/snippet}
    </Tabs>
</div>

<style lang="scss">
    .body {
        margin: 2em;
    }
</style>
