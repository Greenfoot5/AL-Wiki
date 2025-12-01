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

<Accordion {opened} onValueChange={(e) => (opened = e.value)} multiple>
    <Accordion.Item value="head">
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <HardHat size={36} strokeWidth={2.5} /> <h2>Head</h2>
        </Accordion.ItemTrigger>
        <!-- Panel -->
        <Accordion.ItemContent>
            <BISArmourTable item={data.head.heavy} caption="Heavy" />
            <hr class="hr short" />
            <BISArmourTable item={data.head.medium} caption="Medium" />
            <hr class="hr short" />
            <BISArmourTable item={data.head.light} caption="Light" />
        </Accordion.ItemContent>
    </Accordion.Item>
    <hr class="hr" />
    <Accordion.Item value="shoulders">
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Anvil size={36} strokeWidth={2.5} /> <h2>Shoulders</h2>
        </Accordion.ItemTrigger>
        <!-- Panel -->
        <Accordion.ItemContent>
            <BISArmourTable item={data.shoulders.heavy} caption="Heavy" />
            <hr class="hr short">
            <BISArmourTable item={data.shoulders.medium} caption="Medium" />
            <hr class="hr short">
            <BISArmourTable item={data.shoulders.light} caption="Light" />
        </Accordion.ItemContent>
    </Accordion.Item>
    <hr class="hr" />
    <Accordion.Item value="chest">
        {#snippet lead()}{/snippet}
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Shirt size={36} strokeWidth={2.5} /> <h2>Chest</h2>
        </Accordion.ItemTrigger>
        <!-- Panel -->
        <Accordion.ItemContent>
            <BISArmourTable item={data.chest.heavy} caption="Heavy" />
            <hr class="hr short">
            <BISArmourTable item={data.chest.medium} caption="Medium" />
            <hr class="hr short">
            <BISArmourTable item={data.chest.light} caption="Light" />
        </Accordion.ItemContent>
    </Accordion.Item>
    <hr class="hr" />
    <Accordion.Item value="hands">
        {#snippet lead()}{/snippet}
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Hand size={36} strokeWidth={2.5} /> <h2>Hands</h2>
        </Accordion.ItemTrigger>
        <!-- Panel -->
        <Accordion.ItemContent>
            <BISArmourTable item={data.gloves.heavy} caption="Heavy" />
            <hr class="hr short">
            <BISArmourTable item={data.gloves.medium} caption="Medium" />
            <hr class="hr short">
            <BISArmourTable item={data.gloves.light} caption="Light" />
        </Accordion.ItemContent>
    </Accordion.Item>
    <hr class="hr" />
    <Accordion.Item value="legs">
        {#snippet lead()}{/snippet}
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Bone size={36} strokeWidth={2.5} /> <h2>Legs</h2>
        </Accordion.ItemTrigger>
        <!-- Panel -->
        <Accordion.ItemContent>
            <BISArmourTable item={data.legs.heavy} caption="Heavy" />
            <hr class="hr short">
            <BISArmourTable item={data.legs.medium} caption="Medium" />
            <hr class="hr short">
            <BISArmourTable item={data.legs.light} caption="Light" />
        </Accordion.ItemContent>
    </Accordion.Item>
    <hr class="hr" />
    <Accordion.Item value="feet">
        {#snippet lead()}{/snippet}
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Footprints size={36} strokeWidth={2.5} /> <h2>Feet</h2>
        </Accordion.ItemTrigger>
        <!-- Panel -->
        <Accordion.ItemContent>
            <BISArmourTable item={data.shoes.heavy} caption="Heavy" />
            <hr class="hr short">
            <BISArmourTable item={data.shoes.medium} caption="Medium" />
            <hr class="hr short">
            <BISArmourTable item={data.shoes.light} caption="Light" />
        </Accordion.ItemContent>
    </Accordion.Item>

    <hr class="hr" />
    <Accordion.Item value="cloak">
        {#snippet lead()}{/snippet}
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Brush size={36} strokeWidth={2.5} /> <h2>Cloak</h2>
        </Accordion.ItemTrigger>
        <!-- Panel -->
        <Accordion.ItemContent>
            <BISArmourTable item={data.cloak} />
        </Accordion.ItemContent>
    </Accordion.Item>

    <hr class="hr" />
    <Accordion.Item value="weapons">
        {#snippet lead()}{/snippet}
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Swords size={36} strokeWidth={2.5} /> <h2>Weapons</h2>
        </Accordion.ItemTrigger>
        <!-- Panel -->
        <Accordion.ItemContent>
            <Callout variant="info">
                Weapons (except shield) have a scaling attribute, primary/secondary, modifying str/dex/int/vit of the dropped weapon.
                The stats below show best possible value for the primary/secondary/default (unscaled) attribute, rather than in str/dex/int/vit.
            </Callout>
            <Accordion {weapons} onValueChange={(e) => (weapons = e.value)} multiple>
                <Accordion.Item value="Melee">
                    {#snippet lead()}{/snippet}
                    <Accordion.ItemTrigger class="h4 flex items-center gap-2">
                        <Sword size={24} strokeWidth={2.5} /> <h4>Melee</h4>
                    </Accordion.ItemTrigger>
                    <!-- Panel -->
                    <Accordion.ItemContent>
                        <BISWeaponTable item={data.melee.sword} caption="Sword (one-handed)" />
                        <hr class="hr short">
                        <BISWeaponTable item={data.melee.axe} caption="Axe (one-handed)" />
                        <hr class="hr short">
                        <BISWeaponTable item={data.melee.greatsword} caption="GreatSword (two-handed)" />
                        <hr class="hr short">
                        <BISWeaponTable item={data.melee.greataxe} caption="GreatAxe (two-handed)" />
                    </Accordion.ItemContent>
                </Accordion.Item>
                <hr class="hr" />
                <Accordion.Item value="Bow">
                    {#snippet lead()}{/snippet}
                    <Accordion.ItemTrigger class="h4 flex items-center gap-2">
                        <BowArrow size={24} strokeWidth={2.5} /> <h4>Bow</h4>
                    </Accordion.ItemTrigger>
                    <!-- Panel -->
                    <Accordion.ItemContent>
                        <BISWeaponTable item={data.bow.bow} caption="Bow (two-handed)" />
                    </Accordion.ItemContent>
                </Accordion.Item>
                <hr class="hr" />
                <Accordion.Item value="Staff">
                    {#snippet lead()}{/snippet}
                    <Accordion.ItemTrigger class="h4 flex items-center gap-2">
                        <Wand size={24} strokeWidth={2.5} /> <h4>Staff</h4>
                    </Accordion.ItemTrigger>
                    <!-- Panel -->
                    <Accordion.ItemContent>
                        <BISWeaponTable item={data.staff.staff} caption="Staff (two-handed)" />
                    </Accordion.ItemContent>
                </Accordion.Item>
                <hr class="hr" />
                <Accordion.Item value="Shield">
                    {#snippet lead()}{/snippet}
                    <Accordion.ItemTrigger class="h4 flex items-center gap-2">
                        <Shield size={24} strokeWidth={2.5} /> <h4>Shield</h4>
                    </Accordion.ItemTrigger>
                    <!-- Panel -->
                    <Accordion.ItemContent>
                        <BISArmourTable item={data.shield} caption="Shield (off-hand only)" />
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion>
        </Accordion.ItemContent>
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
