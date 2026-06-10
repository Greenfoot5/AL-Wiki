<script>
    import Callout from "$lib/components/Callout.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import BISAccordion from "$lib/components/BISAccordion.svelte";
    import {siteTitle} from "$lib/config.js";

    let { data } = $props();
</script>

<svelte:head>
    <title>Best in Slot</title>
    <meta name="description" content="A collection of the best stat rolls (drop stats) for each item tier in the game." />
    <meta property="og:title" content="Aeon's Legends - Best in Slot" />
    <meta property="og:description" content="A collection of the best stat rolls (drop stats) for each item tier in the game." />
    <meta property="og:url" content="https://al.alchemix.dev/bis" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
    <PageTitle title="Best In Slot">
        A list of the best stat rolls (drop stats) for each item tier in the game.
        Unknown stats are replaced with <span class="text-base-content/50">???</span> and stats with <span class="text-secondary">?</span> may not be the highest possible value.
        Please let Greenfoot5 know either in-game or via Discord if you've got any missing data, or if you feel some data is wrong!
    </PageTitle>

    <p class="text-base-content mb-8">
        Items can be upgraded up to 10 times. Each stat lists first the value without any upgrades, then the value at max upgrade.
    </p>

    <!-- DaisyUI Tabs -->
    <div class="tabs tabs-border tabs-lg mb-8">
        <!-- Tab 6 -->
        <label class="tab">
            <input type="radio" name="bis" checked="checked" />
            <span class="badge badge-success badge-outline mr-2">NEW</span>
            Tier 6
        </label>
        <div id="t6" class="tab-content">
<!--            <Callout variant="info">-->
<!--                These values have been generated and are marked as unconfirmed until we verify they are all correct. Please share your gear stats!-->
<!--            </Callout>-->
            <div class="mt-4">
                <BISAccordion data={data.t6} />
            </div>
        </div>

        <!-- Tab 5 -->
        <label class="tab">
            <input type="radio" name="bis" />
            Tier 5
        </label>
        <div id="t5" class="tab-content">
            <Callout variant="warning">
                This page will no longer be actively updated as T6 has been released. Pull requests will still be reviewed.
            </Callout>
            <div class="mt-4">
                <BISAccordion data={data.t5} />
            </div>
        </div>

        <label class="tab">
            <input type="radio" name="bis" />
            Tier 4
        </label>
        <div id="t5" class="tab-content">
            <Callout variant="warning">
                This page will no longer be actively updated as T5 has been released. Pull requests will still be reviewed.
            </Callout>
            <div class="mt-4">
                <BISAccordion data={data.t4} />
            </div>
        </div>

        <label class="tab">
            <input type="radio" name="bis" />
            Tier 3
        </label>
        <div id="t5" class="tab-content">
            <Callout variant="warning">
                This page will no longer be actively updated as T4 has been released. Pull requests will still be reviewed.
            </Callout>
            <Callout variant="warning" class="mt-4">
                Due to a change in the way weapons' data is stored, weapon secondary/normal values may be primary/secondary scaled instead (making them higher than possible).
                The original data has been kept, and is available <a class="link link-primary" href="https://github.com/Greenfoot5/AL-Wiki/blob/master/static/bis_t3.toml">on Github</a>.
            </Callout>
            <div class="mt-4">
                <BISAccordion data={data.t3} />
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    /* Optional: Ensure smooth transitions if you add them later */
    .tab-content {
        animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>
