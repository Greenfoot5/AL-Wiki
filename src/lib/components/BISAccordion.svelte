<script lang="ts">
    import { HardHat, Sword, BowArrow, Wand, Shield, Hand, Footprints, Shirt, Swords, Bone, Anvil, Brush } from '@lucide/svelte';
    import { Accordion } from '@skeletonlabs/skeleton-svelte';
    import BISArmourTable from "$lib/components/BISArmourTable.svelte";
    import BISWeaponTable from "$lib/components/BISWeaponTable.svelte";
    import Callout from "$lib/components/Callout.svelte";
    import ContentSlide from "$lib/components/ContentSlide.svelte";

    let { data } = $props();

    let armour = [
        {value: "head", title: "Head", icon: HardHat},
        {value: "shoulders", title: "Shoulders", icon: Anvil},
        {value: "chest", title: "Chest", icon: Shirt},
        {value: "gloves", title: "Hands", icon: Hand},
        {value: "legs", title: "Legs", icon: Bone},
        {value: "shoes", title: "Feet", icon: Footprints},
    ];
</script>

<Accordion multiple>
    {#each armour as item}
        {@const Icon = item.icon}
        <Accordion.Item value={item.value}>
            <Accordion.ItemTrigger class="h2 flex items-center gap-2">
                <Icon size={36} strokeWidth={2.5} /> <h2>{item.title}</h2>
            </Accordion.ItemTrigger>
            <!-- Panel -->
            <ContentSlide duration={250}>
                <BISArmourTable item={data[item.value].heavy} caption="Heavy" />
                <hr class="hr short" />
                <BISArmourTable item={data[item.value].medium} caption="Medium" />
                <hr class="hr short" />
                <BISArmourTable item={data[item.value].light} caption="Light" />
            </ContentSlide>
        </Accordion.Item>
        <hr class="hr" />
    {/each}

    <Accordion.Item value="cloak">
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Brush size={36} strokeWidth={2.5} /> <h2>Cloak</h2>
        </Accordion.ItemTrigger>
        <ContentSlide duration={250}>
            <BISArmourTable item={data.cloak} />
        </ContentSlide>
    </Accordion.Item>

    <hr class="hr" />
    <Accordion.Item value="weapons">
        <Accordion.ItemTrigger class="h2 flex items-center gap-2">
            <Swords size={36} strokeWidth={2.5} /> <h2>Weapons</h2>
        </Accordion.ItemTrigger>
        <ContentSlide duration={250}>
            <Callout variant="info">
                Weapons (except shield) have a scaling attribute, primary/secondary, modifying str/dex/int/vit of the dropped weapon.
                The stats below show best possible value for the primary/secondary/default (unscaled) attribute, rather than in str/dex/int/vit.
            </Callout>
            <Accordion multiple>
                <Accordion.Item value="Melee">
                    <Accordion.ItemTrigger class="h4 flex items-center gap-2">
                        <Sword size={24} strokeWidth={2.5} /> <h4>Melee</h4>
                    </Accordion.ItemTrigger>
                    <ContentSlide duration={250}>
                        <BISWeaponTable item={data.melee.sword} caption="Sword (one-handed)" />
                        <hr class="hr short">
                        <BISWeaponTable item={data.melee.axe} caption="Axe (one-handed)" />
                        <hr class="hr short">
                        <BISWeaponTable item={data.melee.greatsword} caption="GreatSword (two-handed)" />
                        <hr class="hr short">
                        <BISWeaponTable item={data.melee.greataxe} caption="GreatAxe (two-handed)" />
                    </ContentSlide>
                </Accordion.Item>
                <hr class="hr" />
                <Accordion.Item value="Bow">
                    <Accordion.ItemTrigger class="h4 flex items-center gap-2">
                        <BowArrow size={24} strokeWidth={2.5} /> <h4>Bow</h4>
                    </Accordion.ItemTrigger>
                    <ContentSlide duration={250}>
                        <BISWeaponTable item={data.bow.bow} caption="Bow (two-handed)" />
                    </ContentSlide>
                </Accordion.Item>
                <hr class="hr" />
                <Accordion.Item value="Staff">
                    <Accordion.ItemTrigger class="h4 flex items-center gap-2">
                        <Wand size={24} strokeWidth={2.5} /> <h4>Staff</h4>
                    </Accordion.ItemTrigger>
                    <ContentSlide duration={250}>
                        <BISWeaponTable item={data.staff.staff} caption="Staff (two-handed)" />
                    </ContentSlide>
                </Accordion.Item>
                <hr class="hr" />
                <Accordion.Item value="Shield">
                    <Accordion.ItemTrigger class="h4 flex items-center gap-2">
                        <Shield size={24} strokeWidth={2.5} /> <h4>Shield</h4>
                    </Accordion.ItemTrigger>
                    <ContentSlide duration={250}>
                        <BISArmourTable item={data.shield} caption="Shield (off-hand only)" />
                    </ContentSlide>
                </Accordion.Item>
            </Accordion>
        </ContentSlide>
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
