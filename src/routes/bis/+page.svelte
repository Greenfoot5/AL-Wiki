<script>
    import Callout from "$lib/components/Callout.svelte";
    import PreviousTiers from "$lib/components/PreviousTiers.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import BISAccordion from "$lib/components/BISAccordion.svelte";

    let { data } = $props();

    let opened = $state([]);
    let weapons = $state([]);
</script>


<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>Best in Slot</title>
    <meta data-key="description" name="description" content="A list of the best stat rolls for each T4 item drop in the game.">
    <meta property="og:title" content="Aeon's Legends - Best in Slot" />
    <meta property="og:description" content="A list of the best stat rolls for each T4 item drop in the game." />
    <meta property="og:url" content="https://al.alchemix.dev/bis" />
</svelte:head>

<div class="body">
    <PageTitle title="Best In Slot">
        This is a list of the best stat rolls for each T4 item drop in the game.
        Unknown stats are replaced with <span class="text-surface-600-400">???</span> and stats with <span class="text-warning-600-400">?</span> after require confirmation.
        Please let Greenfoot5 know either in-game or via Discord if you've got any missing data, or if you feel some data is wrong1
    </PageTitle>
    <p>Items can be upgraded up to 10 times. Each stat lists first the value without any upgrades, then the value at max upgrade.</p>

    <PreviousTiers tier="t4" />

    <Callout variant="error">Many values are inaccurate or missing as the season has just released.</Callout>

    <BISAccordion data={data.t4} />
</div>

<style lang="scss">
    .body {
        margin: 2em;
    }
</style>
