<script lang="ts">
    import { HardHat, Sword, BowArrow, Wand, Shield, Hand, Footprints, Shirt, Swords, Bone, Anvil, Brush } from '@lucide/svelte';
    import BISArmourTable from "$lib/components/BISArmourTable.svelte";
    import BISWeaponTable from "$lib/components/BISWeaponTable.svelte";
    import Callout from "$lib/components/Callout.svelte";

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

<!-- Main Accordion Container -->
<div class="space-y-4">
    {#each armour as item}
        {@const Icon = item.icon}

        <!-- DaisyUI Collapse Item -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold flex items-center gap-3 cursor-pointer hover:bg-base-200/50 transition-colors">
                <Icon size={28} class="text-primary" />
                <span>{item.title}</span>
            </summary>

            <div class="collapse-content px-4 pt-2 pb-4">
                <BISArmourTable item={data[item.value].heavy} caption="Heavy" />

                <div class="divider my-2"></div>

                <BISArmourTable item={data[item.value].medium} caption="Medium" />

                <div class="divider my-2"></div>

                <BISArmourTable item={data[item.value].light} caption="Light" />
            </div>
        </details>
    {/each}

    <!-- Cloak Section -->
    <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
        <summary class="collapse-title text-lg font-bold flex items-center gap-3 cursor-pointer hover:bg-base-200/50 transition-colors">
            <Brush size={28} class="text-primary" />
            <span>Cloak</span>
        </summary>
        <div class="collapse-content px-4 py-2">
            <BISArmourTable item={data.cloak} />
        </div>
    </details>

    <!-- Weapons Section (Nested) -->
    <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
        <summary class="collapse-title text-lg font-bold flex items-center gap-3 cursor-pointer hover:bg-base-200/50 transition-colors">
            <Swords size={28} class="text-primary" />
            <span>Weapons</span>
        </summary>
        <div class="collapse-content px-4 py-2">
            <Callout variant="info" class="mb-4">
                Weapons (except shield) have a scaling attribute, primary/secondary, modifying str/dex/int/vit of the dropped weapon.
                The stats below show best possible value for the primary/secondary/default (unscaled) attribute, rather than in str/dex/int/vit.
            </Callout>

            <!-- Nested Accordion for Weapon Types -->
            <div class="space-y-3">
                <!-- Melee -->
                <details class="collapse bg-base-200 border border-base-300">
                    <summary class="collapse-title text-base font-semibold flex items-center gap-2 cursor-pointer hover:bg-base-300/50">
                        <Sword size={20} class="text-secondary" />
                        <span>Melee</span>
                    </summary>
                    <div class="collapse-content px-4 py-2">
                        <BISWeaponTable item={data.melee.sword} caption="Sword (one-handed)" />
                        <div class="divider my-2"></div>
                        <BISWeaponTable item={data.melee.axe} caption="Axe (one-handed)" />
                        <div class="divider my-2"></div>
                        <BISWeaponTable item={data.melee.greatsword} caption="GreatSword (two-handed)" />
                        <div class="divider my-2"></div>
                        <BISWeaponTable item={data.melee.greataxe} caption="GreatAxe (two-handed)" />
                    </div>
                </details>

                <!-- Bow -->
                <details class="collapse bg-base-200 border border-base-300">
                    <summary class="collapse-title text-base font-semibold flex items-center gap-2 cursor-pointer hover:bg-base-300/50">
                        <BowArrow size={20} class="text-secondary" />
                        <span>Bow</span>
                    </summary>
                    <div class="collapse-content px-4 py-2">
                        <BISWeaponTable item={data.bow.bow} caption="Bow (two-handed)" />
                    </div>
                </details>

                <!-- Staff -->
                <details class="collapse bg-base-200 border border-base-300">
                    <summary class="collapse-title text-base font-semibold flex items-center gap-2 cursor-pointer hover:bg-base-300/50">
                        <Wand size={20} class="text-secondary" />
                        <span>Staff</span>
                    </summary>
                    <div class="collapse-content px-4 py-2">
                        <BISWeaponTable item={data.staff.staff} caption="Staff (two-handed)" />
                    </div>
                </details>

                <!-- Shield -->
                <details class="collapse bg-base-200 border border-base-300">
                    <summary class="collapse-title text-base font-semibold flex items-center gap-2 cursor-pointer hover:bg-base-300/50">
                        <Shield size={20} class="text-secondary" />
                        <span>Shield</span>
                    </summary>
                    <div class="collapse-content px-4 py-2">
                        <BISArmourTable item={data.shield} caption="Shield (off-hand only)" />
                    </div>
                </details>
            </div>
        </div>
    </details>
</div>

<style>
    /* Optional: Customizing the divider color if base-300 isn't enough contrast */
    .divider {
        border-top-color: var(--fallback-b3, oklch(var(--b3)/0.5));
    }
</style>
