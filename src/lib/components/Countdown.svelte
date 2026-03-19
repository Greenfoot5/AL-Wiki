<script>
    import { onMount, onDestroy } from 'svelte';

    const { date } = $props();

    let days = $state(0);
    let hours = $state(0);
    let minutes = $state(0);
    let seconds = $state(0);
    let expired = $state(false);

    let intervalId;

    function updateCountdown() {
        const now = new Date().getTime();
        const targetDate = date instanceof Date ? date.getTime() : new Date(date).getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(intervalId);
            expired = true;
            days = hours = minutes = seconds = 0;
            return;
        }

        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    onMount(() => {
        updateCountdown();
        intervalId = setInterval(updateCountdown, 1000);
    });

    onDestroy(() => {
        if (intervalId) clearInterval(intervalId);
    });
</script>

{#if expired}
    <div class="text-4xl font-bold text-error">Season Started!</div>
{:else}
    <div class="grid auto-cols-max grid-flow-col gap-2 text-center">
        <!-- Days -->
        <div class="flex flex-col">
            <span class="countdown font-mono">
                <span style="--value:{days};" aria-live="polite" aria-label="{days}" class="text-4xl md:text-6xl lg:text-7xl">{days}</span>
            </span>
            <span class="text-xs md:text-sm mt-1 text-base-content/60">days</span>
        </div>

        <!-- Hours -->
        <div class="flex flex-col">
            <span class="countdown font-mono">
                <span style="--value:{hours};" aria-live="polite" aria-label="{hours}" class="text-4xl md:text-6xl lg:text-7xl">{hours}</span>
            </span>
            <span class="text-xs md:text-sm mt-1 text-base-content/60">hours</span>
        </div>

        <!-- Minutes -->
        <div class="flex flex-col">
            <span class="countdown font-mono">
                <span style="--value:{minutes};" aria-live="polite" aria-label="{minutes}" class="text-4xl md:text-6xl lg:text-7xl">{minutes}</span>
            </span>
            <span class="text-xs md:text-sm mt-1 text-base-content/60">min</span>
        </div>

        <!-- Seconds -->
        <div class="flex flex-col">
            <span class="countdown font-mono">
                <span style="--value:{seconds};" aria-live="polite" aria-label="{seconds}" class="text-4xl md:text-6xl lg:text-7xl">{seconds}</span>
            </span>
            <span class="text-xs md:text-sm mt-1 text-base-content/60">sec</span>
        </div>
    </div>
{/if}
