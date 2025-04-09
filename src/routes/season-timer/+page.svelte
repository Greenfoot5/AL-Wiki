<script>
    import Countdown from "$lib/components/Countdown.svelte";
    import Loader from "$lib/components/Loader.svelte";

    const now = new Date();
    const current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
</script>
<div class="container">
    <div class="content">
        <Loader selected="triangle" --duration="3s"></Loader>
        <Countdown date={current} />
        <Loader selected="triangle" --duration="3s"></Loader>
    </div>
</div>

<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>Redeem Codes</title>
    <meta data-key="description" name="description" content="Countdown timer to next season end">
    <meta property="og:title" content="Aeon's Legends - Season Countdown" />
    <meta property="og:description" content="Countdown timer to next season end" />
    <meta property="og:url" content="https://al.alchemix.dev/season-timer" />
</svelte:head>

<style>
    .container {
        text-align: center;
        height: 80dvh;
        width: 100%;
        justify-content: center;
        align-content: center;
        max-width: 100%;
    }

    .content {
        display: flex;
        justify-content: center;
        align-content: center;
    }
</style>
