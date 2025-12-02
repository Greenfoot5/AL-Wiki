<script>
    const { date } = $props();
    // svelte-ignore state_referenced_locally
    let countdown = $state("[Countdown]");

    function updateCountdown() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = date - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(x);
            countdown = "EXPIRED";
        }
        countdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }

    // Update every 1 second
    const x = setInterval(updateCountdown, 1000);
    updateCountdown()
</script>

<h1 class="h1">{countdown}</h1>
