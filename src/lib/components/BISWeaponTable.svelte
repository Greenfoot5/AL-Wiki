<script>
    import Rarity from "$lib/components/Rarity.svelte";
    import BISWeaponRow from "$lib/components/BISWeaponRow.svelte";

    let { item, caption } = $props();
</script>

<div class="overflow-x-auto rounded-box border border-base-300 shadow-sm">
    <table class="table table-zebra w-full">
        {#if caption}
            <caption class="py-2 text-base font-bold text-base-content/70">
                {caption}
            </caption>
        {/if}
        <thead class="bg-base-300 text-base-content">
        <tr>
            <th class="whitespace-nowrap">Rarity</th>
            <th class="text-centre">Damage</th>
            <th class="text-centre">Attack Speed</th>
            <th class="text-centre">Primary Scaled</th>
            <th class="text-centre">Secondary Scaled</th>
            <th class="text-centre">Unscaled</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row" class="font-bold"><Rarity rarity="rare" /></th>
            <BISWeaponRow item={item.rare} />
        </tr>
        <tr>
            <th scope="row" class="font-bold"><Rarity rarity="epic" /></th>
            <BISWeaponRow item={item.epic} />
        </tr>
        <tr>
            <th scope="row" class="font-bold"><Rarity rarity="legendary" /></th>
            <BISWeaponRow item={item.legendary} />
        </tr>
        </tbody>
    </table>
</div>

<style>
    .text-centre {
        text-align: center;
    }
</style>
