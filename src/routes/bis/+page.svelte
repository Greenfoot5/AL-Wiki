<script>
    import BISArmourTable from "$lib/components/BISArmourTable.svelte";
    import BISWeaponTable from "$lib/components/BISWeaponTable.svelte";
    import Callout from "$lib/components/Callout.svelte";

    let { data } = $props();
</script>


<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>Best in Slot</title>
    <meta data-key="description" name="description" content="A list of the best stat rolls for each T3 item drop in the game.">
    <meta property="og:title" content="Aeon's Legends - Best in Slot" />
    <meta property="og:description" content="A list of the best stat rolls for each T3 item drop in the game." />
    <meta property="og:url" content="https://al.alchemix.dev/bis" />
</svelte:head>

<div style="margin: 1em 2em;"><a href="/">Home</a></div>

<div class="body">
    <h1>Best in slot</h1>
    <p>This is a list of the best stat rolls for each T3.5 item drop in the game.
        Unknown stats are replaced with <code>???</code> and stats with <code>?</code> after require confirmation.
        Please let Greenfoot5 know either in-game or via Discord if you've got any missing data, or if you feel some data is wrong1
    </p>
    <p>Items can be upgraded up to 10 times. Each stat lists first the value without any upgrades, then the value at max upgrade.</p>

    <Callout variant="warning">Many values are now uncertain thanks to a recent update, <a href="/updates/1.3">version 1.3.0</a>, where base stats and max stats for many items were changed.</Callout>

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
        <summary><h2>Hands</h2></summary>
        <BISArmourTable item={data.gloves.heavy} caption="Heavy" />
        <div class="hr"></div>
        <BISArmourTable item={data.gloves.medium} caption="Medium" />
        <div class="hr"></div>
        <BISArmourTable item={data.gloves.light} caption="Light" />
    </details>

    <details>
        <summary><h2>Feet</h2></summary>
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
        <summary><h2>Weapon</h2></summary>
<!--        <p>All values have been rounded to 2 decimal places. Only whole numbers are used in-game</p>-->
        <Callout>When picking a weapon bear in mind if the scaling stats match. On each there's a primary & secondary scaling factor to your damage based on str/dex/int/vit. These can significantly affect your damage if you get them right/wrong.</Callout>
        <details style="margin: 1em 2em;">
            <summary><h3>Melee</h3></summary>
            <BISWeaponTable item={data.melee.sword} caption="Sword (one-handed)" />
            <div class="hr"></div>
            <BISWeaponTable item={data.melee.axe} caption="Axe (one-handed)" />
            <div class="hr"></div>
            <BISWeaponTable item={data.melee.greatsword} caption="GreatSword (two-handed)" />
            <div class="hr"></div>
            <BISWeaponTable item={data.melee.greataxe} caption="GreatAxe (two-handed)" />
        </details>

        <details style="margin: 1em 2em;">
            <summary><h3>Bow</h3></summary>
            <BISWeaponTable item={data.bow.bow} caption="Bow (two-handed)" />
        </details>

        <details style="margin: 1em 2em;">
            <summary><h3>Staff</h3></summary>
            <BISWeaponTable item={data.staff.staff} caption="Staff (two-handed)" />
        </details>

        <details style="margin: 1em 2em;">
            <summary><h3>Shield</h3></summary>
            <BISArmourTable item={data.shield} caption="Shield (off-hand only)"/>
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
