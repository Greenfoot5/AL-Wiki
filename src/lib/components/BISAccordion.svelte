<script>
    import { HardHat, Sword, BowArrow, Wand, Shield, Hand, Footprints, Shirt, Swords, Bone, Anvil, Brush } from '@lucide/svelte';
    import { Accordion } from '@skeletonlabs/skeleton-svelte';
    import BISArmourTable from "$lib/components/BISArmourTable.svelte";
    import BISWeaponTable from "$lib/components/BISWeaponTable.svelte";
    import Callout from "$lib/components/Callout.svelte";

    let opened = $state([]);
    let weapons = $state([]);
    let { data } = $props();
</script>

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
            <Callout variant="info">
                Weapons (except shield) have a scaling attribute, primary/secondary, modifying str/dex/int/vit of the dropped weapon.
                The stats below show best possible value for the primary/secondary/default (unscaled) attribute, rather than in str/dex/int/vit.
            </Callout>
            <Accordion {weapons} onValueChange={(e) => (value = e.value)} multiple>
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
                        <BISArmourTable item={data.shield} caption="Shield (off-hand only)" />
                    {/snippet}
                </Accordion.Item>
            </Accordion>
        {/snippet}
    </Accordion.Item>
</Accordion>

<style>
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
