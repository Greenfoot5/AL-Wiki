<script>
    import Rarity from "$lib/components/Rarity.svelte";
    import BISArmourRow from "$lib/components/BISArmourRow.svelte";
    import BISArmourTable from "$lib/components/BISArmourTable.svelte";

    let { data } = $props();
</script>

<div class="body">
    <h1>Best in slot</h1>
    <p>This is a list of the best stat rolls for each T3 items in the game.
        Some stats are unknown, marked with <code>???</code>.
        Some stats are guesses and need confirmation, these have <code>?</code> after the value.
        Please let Greenfoot5 know either in-game or via Discord if you've got any missing data or have items with higher values than what's listed here!
    </p>
    <p>T3 items can be upgraded up to 10 times. Each stat lists first the value without any upgrades, then the value at max upgrade.</p>

    <details>
        <summary><h2>Head</h2></summary>
        <BISArmourTable item={data.head.heavy} caption="Heavy" />
        <div class="hr"></div>
        <BISArmourTable item={data.head.medium} caption="Medium" />
        <div class="hr"></div>
        <BISArmourTable item={data.head.light} caption="Light" />
    </details>

    <details>
        <summary><h2>Shoulders</h2></summary>
        <BISArmourTable item={data.shoulders.heavy} caption="Heavy" />
        <div class="hr"></div>
        <BISArmourTable item={data.shoulders.medium} caption="Medium" />
        <div class="hr"></div>
        <BISArmourTable item={data.shoulders.light} caption="Light" />
    </details>

    <details>
        <summary><h2>Chest</h2></summary>
        <BISArmourTable item={data.chest.heavy} caption="Heavy" />
        <div class="hr"></div>
        <BISArmourTable item={data.chest.medium} caption="Medium" />
        <div class="hr"></div>
        <BISArmourTable item={data.chest.light} caption="Light" />
    </details>

    <details>
        <summary><h2>Legs</h2></summary>
        <BISArmourTable item={data.legs.heavy} caption="Heavy" />
        <div class="hr"></div>
        <BISArmourTable item={data.legs.medium} caption="Medium" />
        <div class="hr"></div>
        <BISArmourTable item={data.legs.light} caption="Light" />
    </details>

    <details>
        <summary><h2>Gloves</h2></summary>
        <BISArmourTable item={data.gloves.heavy} caption="Heavy" />
        <div class="hr"></div>
        <BISArmourTable item={data.gloves.medium} caption="Medium" />
        <div class="hr"></div>
        <BISArmourTable item={data.gloves.light} caption="Light" />
    </details>

    <details>
        <summary><h2>Shoes</h2></summary>
        <BISArmourTable item={data.shoes.heavy} caption="Heavy" />
        <div class="hr"></div>
        <BISArmourTable item={data.shoes.medium} caption="Medium" />
        <div class="hr"></div>
        <BISArmourTable item={data.shoes.light} caption="Light" />
    </details>

    <details>
        <summary><h2>Cloak</h2></summary>
        <BISArmourTable item={data.cloak} />
    </details>

    <details>
        <summary><h2>Hand</h2></summary>
        <details style="margin: 1em 2em;">
            <summary><h3>Melee</h3></summary>

        </details>

        <details style="margin: 1em 2em;">
            <summary><h3>Staff</h3></summary>

        </details>

        <details style="margin: 1em 2em;">
            <summary><h3>Bow</h3></summary>

        </details>

        <details style="margin: 1em 2em;">
            <summary><h3>Shield</h3></summary>

        </details>
    </details>
</div>

<style lang="scss">
    .body {
        margin: 2em;
    }

    :is(h2, h3) {
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

    .hr {
        content: '';
        height: 0.1em;
        background: var(--nord-frost-1);
        width: 8em;
        justify-content: center;
        margin: 1em auto;
        bottom: 0;
    }
</style>
