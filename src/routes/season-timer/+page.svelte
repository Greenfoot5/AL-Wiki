<script>
    import Countdown from "$lib/components/Countdown.svelte";
    import Loader from "$lib/components/Loader.svelte";
    import Callout from "$lib/components/Callout.svelte";
    // Loader component removed as it likely relied on Skeleton classes.
    // If you need a spinner, use DaisyUI's built-in: <span class="loading loading-spinner loading-lg"></span>

    const now = new Date();
    // Calculate the first day of the next month
    const current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
</script>

<svelte:head>
    <title>Season Countdown</title>
    <meta name="description" content="Countdown timer to next season end" />
    <meta property="og:title" content="Aeon's Legends - Season Countdown" />
    <meta property="og:description" content="Countdown timer to next season end" />
    <meta property="og:url" content="https://al.alchemix.dev/season-timer" />
</svelte:head>

<div class="md:hidden">
    <Callout>It is known this doesn't display right on mobile, it's on the to do list.</Callout>
</div>

<!-- DaisyUI Hero Component for Centered Layout -->
<div class="hero min-h-screen bg-base-200">
    <div class="hero-content">
        <div class="max-w-md">
            <!-- Countdown Component -->
            <div class="flex flex-row">
                <Loader selected="triangle" --duration="3s"></Loader>
                <Countdown date={current} />
                <Loader selected="triangle" --duration="3s"></Loader>
            </div>
        </div>
    </div>
</div>

