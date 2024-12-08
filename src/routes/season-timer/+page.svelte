<script>
    import Countdown from "$lib/components/Countdown.svelte";
    import Loader from "$lib/components/Loader.svelte";
</script>

<div class="container">
    <div class="content">
        <Loader selected="triangle" --duration="3s"></Loader>
        <Countdown date={new Date("Jan 1, 2025 00:00:00").getTime()} />
        <Loader selected="triangle" --duration="3s"></Loader>
    </div>
</div>

<style>
    .container {
        text-align: center;
        height: 100dvh;
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
