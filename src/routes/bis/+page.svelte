<script>
    import { Accordion } from '@skeletonlabs/skeleton-svelte';

    import BISArmourTable from "$lib/components/BISArmourTable.svelte";
    import BISWeaponTable from "$lib/components/BISWeaponTable.svelte";
    import Callout from "$lib/components/Callout.svelte";
    import PreviousTiers from "$lib/components/PreviousTiers.svelte";
    import { HardHat, Sword, BowArrow, Wand, Shield, Hand, Footprints, Shirt, Swords, Bone, Anvil, Brush } from '@lucide/svelte';

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
    <div class="title text-center">
        <h1 class="h1">Best In Slot</h1>
        <p class="preset-typo-subtitle pb-8">
            This is a list of the best stat rolls for each T4 item drop in the game.
            Unknown stats are replaced with <span class="text-surface-600-400">???</span> and stats with <span class="text-warning-600-400">?</span> after require confirmation.
            Please let Greenfoot5 know either in-game or via Discord if you've got any missing data, or if you feel some data is wrong1
        </p>
    </div>
    <p>Items can be upgraded up to 10 times. Each stat lists first the value without any upgrades, then the value at max upgrade.</p>

    <PreviousTiers tier="t4" />

    <Callout variant="error">Many values are inaccurate or missing as the season has just released.</Callout>

    <Accordion {opened} onValueChange={(e) => (value = e.value)} multiple>
        <Accordion.Item value="head">
            {#snippet lead()}<HardHat class="h2" size={36} strokeWidth={2.5} />{/snippet}
            {#snippet control()}<h2 class="h2">Head</h2>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <BISArmourTable item={data.head.heavy} caption="Heavy" />
                <hr class="hr short" />
                <BISArmourTable item={data.head.medium} caption="Medium" />
                <hr class="hr short" />
                <BISArmourTable item={data.head.light} caption="Light" />
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="shoulders">
            {#snippet lead()}<Anvil class="h2" size={36} strokeWidth={2.5} />{/snippet}
            {#snippet control()}<h2 class="h2">Shoulders</h2>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <BISArmourTable item={data.shoulders.heavy} caption="Heavy" />
                <hr class="hr short">
                <BISArmourTable item={data.shoulders.medium} caption="Medium" />
                <hr class="hr short">
                <BISArmourTable item={data.shoulders.light} caption="Light" />
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="chest">
            {#snippet lead()}<Shirt class="h2" size={36} strokeWidth={2.5} />{/snippet}
            {#snippet control()}<h2 class="h2">Chest</h2>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <BISArmourTable item={data.chest.heavy} caption="Heavy" />
                <hr class="hr short">
                <BISArmourTable item={data.chest.medium} caption="Medium" />
                <hr class="hr short">
                <BISArmourTable item={data.chest.light} caption="Light" />
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="legs">
            {#snippet lead()}<Bone class="h2" size={36} strokeWidth={2.5} />{/snippet}
            {#snippet control()}<h2 class="h2">Legs</h2>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <BISArmourTable item={data.legs.heavy} caption="Heavy" />
                <hr class="hr short">
                <BISArmourTable item={data.legs.medium} caption="Medium" />
                <hr class="hr short">
                <BISArmourTable item={data.legs.light} caption="Light" />
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="hands">
            {#snippet lead()}<Hand class="h2" size={36} strokeWidth={2.5} />{/snippet}
            {#snippet control()}<h2 class="h2">Hands</h2>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <BISArmourTable item={data.gloves.heavy} caption="Heavy" />
                <hr class="hr short">
                <BISArmourTable item={data.gloves.medium} caption="Medium" />
                <hr class="hr short">
                <BISArmourTable item={data.gloves.light} caption="Light" />
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="feet">
            {#snippet lead()}<Footprints class="h2" size={36} strokeWidth={2.5} />{/snippet}
            {#snippet control()}<h2 class="h2">Feet</h2>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <BISArmourTable item={data.feet.heavy} caption="Heavy" />
                <hr class="hr short">
                <BISArmourTable item={data.feet.medium} caption="Medium" />
                <hr class="hr short">
                <BISArmourTable item={data.feet.light} caption="Light" />
            {/snippet}
        </Accordion.Item>

        <hr class="hr" />
        <Accordion.Item value="cloak">
            {#snippet lead()}<Brush class="h2" size={36} strokeWidth={2.5} />{/snippet}
            {#snippet control()}<h2 class="h2">Cloak</h2>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <BISArmourTable item={data.cloak} />
            {/snippet}
        </Accordion.Item>

        <hr class="hr" />
        <Accordion.Item value="weapons">
            {#snippet lead()}<Swords class="h2" size={36} strokeWidth={2.5} />{/snippet}
            {#snippet control()}<h2 class="h2">Weapons</h2>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <Accordion {opened} onValueChange={(e) => (value = e.value)} multiple>
                    <Accordion.Item value="Melee">
                        {#snippet lead()}<Sword class="h4" size={24} strokeWidth={2.5} />{/snippet}
                        {#snippet control()}<h4 class="h4">Melee</h4>{/snippet}
                        <!-- Panel -->
                        {#snippet panel()}
                            <BISWeaponTable item={data.melee.sword} caption="Sword (one-handed)" />
                            <hr class="hr short">
                            <BISWeaponTable item={data.melee.axe} caption="Axe (one-handed)" />
                            <hr class="hr short">
                            <BISWeaponTable item={data.melee.greatsword} caption="GreatSword (two-handed)" />
                            <hr class="hr short">
                            <BISWeaponTable item={data.melee.greataxe} caption="GreatAxe (two-handed)" />
                        {/snippet}
                    </Accordion.Item>
                    <hr class="hr" />
                    <Accordion.Item value="Bow">
                        {#snippet lead()}<BowArrow class="h4" size={24} strokeWidth={2.5} />{/snippet}
                        {#snippet control()}<h2 class="h4">Bow</h2>{/snippet}
                        <!-- Panel -->
                        {#snippet panel()}
                            <BISWeaponTable item={data.bow.bow} caption="Bow (two-handed)" />
                        {/snippet}
                    </Accordion.Item>
                    <hr class="hr" />
                    <Accordion.Item value="Staff">
                        {#snippet lead()}<Wand class="h4" size={24} strokeWidth={2.5} />{/snippet}
                        {#snippet control()}<h2 class="h4">Staff</h2>{/snippet}
                        <!-- Panel -->
                        {#snippet panel()}
                            <BISWeaponTable item={data.staff.staff} caption="Staff (two-handed)" />
                        {/snippet}
                    </Accordion.Item>
                    <hr class="hr" />
                    <Accordion.Item value="Shield">
                        {#snippet lead()}<Shield class="h4" size={24} strokeWidth={2.5} />{/snippet}
                        {#snippet control()}<h2 class="h4">Shield</h2>{/snippet}
                        <!-- Panel -->
                        {#snippet panel()}
                            <BISWeaponTable item={data.shield} caption="Shield (off-hand only)" />
                        {/snippet}
                    </Accordion.Item>
                </Accordion>
            {/snippet}
        </Accordion.Item>
    </Accordion>
</div>

<style lang="scss">
    .body {
        margin: 2em;
    }

    hr {
        content: '';
        height: 0.1em;
        background: var(--nord-frost-1);
        justify-content: center;
        margin: 1em auto;
        bottom: 0;
    }

    .short {
        width: 8em;
    }
</style>
