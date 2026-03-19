<script>
    import BISArmourRow from "$lib/components/BISArmourRow.svelte";
    import Rarity from "$lib/components/Rarity.svelte";

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
            <th class="text-centre">Armour</th>
            <th class="text-centre">Magic Resistance</th>
            <th class="text-centre">Strength</th>
            <th class="text-centre">Dexterity</th>
            <th class="text-centre">Intelligence</th>
            <th class="text-centre">Vitality</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row" class="font-bold"><Rarity rarity="rare" /></th>
            <BISArmourRow item={item.rare} />
        </tr>
        <tr>
            <th scope="row" class="font-bold"><Rarity rarity="epic" /></th>
            <BISArmourRow item={item.epic} />
        </tr>
        <tr>
            <th scope="row" class="font-bold"><Rarity rarity="legendary" /></th>
            <BISArmourRow item={item.legendary} />
        </tr>
        </tbody>
    </table>
</div>

<style>
    .text-centre {
        text-align: center;
    }
</style>
