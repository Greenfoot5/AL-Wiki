<script>
    import Rarity from "$lib/components/Rarity.svelte";
</script>

<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>FAQs</title>
    <meta data-key="description" name="description" content="Frequently Asked Questions">
    <meta property="og:title" content="Aeon's Legends - FAQs" />
    <meta property="og:description" content="Frequently Asked Questions" />
    <meta property="og:url" content="https://al.alchemix.dev/faq" />
</svelte:head>

<div style="margin: 1em 2em;"><a href="/">Home</a></div>

<div class="body">
    <h1>FAQs</h1>
    <p>
        Some questions that get frequently asked or other info that should be shared
    </p>

    <details id="codes">
        <summary><h2>Any codes?</h2></summary>
        <a href="/codes">Check out the codes page on the site</a>
    </details>

    <details id="passive-armour">
        <summary><h2>Passive skill doesn't grant any bonus?</h2></summary>
        Some skills grant bonuses based on what type of armour you use.
        For example, Heavy Metal grants bonus vitality based on your equipped heavy armour.
        Double check you've got the right armour equipped if you're not getting any bonus!
    </details>

    <details id="polite">
        <summary><h2>How does politeness score work?</h2></summary>
        Whenever you send a message, and AI will analyse your message, it's context and previous messages you've sent to work out if it's "polite".
        The exact workings of this haven't been investigated, but chatting and engaging with others in global or guild chat will generally raise the score.
        Typically you can easily keep it above rare bonus and mostly above the epic bonus. Legendary however can be a little random currently however.
    </details>

    <details id="drop-difficulty">
        <summary><h2>What affects my drops when challenging harder expeditions?</h2></summary>
        Each map will drop a different tier of gear (i.e. the 2nd map drops T2 gear). <br />
        When increasing the stage number, e.g. 1-3 to 1-4, the xp & gold drops will increase. <br />
        When increasing the difficulty, i.e. from <span style="color: var(--nord-frost-2)">normal (blue)</span> ➠ <span style="color: var(--nord-yellow)">hard (yellow)</span> ➠ <span style="color: var(--nord-red)">torment (red)</span>, drop rates for <Rarity rarity="rare"/>/<Rarity rarity="epic"/>/<Rarity rarity="legendary"/> gear increases as well as xp & gold rewards.
    </details>

    <details id="synergies">
        <summary><h2>Synergies</h2></summary>
        Synergies work by granting buffs based on who is in your party.
        For example, gaining the priest synergy at level 1 with a priest in your team grants +2% bonus healing.
        <br /><u>Resetting synergies will NOT grant you your stones back.</u>
        <br /> <br />
        The maximum amount of stones a FTP (free to play) can earn during a season is enough to max out 2 synergies. Spend your stones wisely!
    </details>
</div>

<style lang="scss">
    .body {
        margin: 2em;
    }

    :is(h2) {
        display: inline;
    }

    details {
        margin: 1em 0;
        overflow-x: auto;
    }

    summary {
        margin: 1rem 0;
        line-height: 1.1;
        font-family: var(--accentFont), serif;
        font-weight: bold;
        font-size: 1.8rem;
        color: var(--nord-highlight);
    }
</style>
