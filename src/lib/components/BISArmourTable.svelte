<script>
    import BISArmourRow from "$lib/components/BISArmourRow.svelte";
    import Rarity from "$lib/components/Rarity.svelte";

    let { item, caption } = $props();
</script>
<table>
    {#if caption}
        <caption class="text-tertiary-400-600">{caption}</caption>
    {/if}
    <thead class="h6 text-tertiary-700-300">
    <tr>
        <th scope="col">Rarity</th>
        <th scope="col">Armour</th>
        <th scope="col">Magic Resistance</th>
        <th scope="col">Strength</th>
        <th scope="col">Dexterity</th>
        <th scope="col">Intelligence</th>
        <th scope="col">Vitality</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row"><Rarity rarity="rare" /></th>
        <BISArmourRow item={item.rare} />
    </tr>
    <tr>
        <th scope="row"><Rarity rarity="epic" /></th>
        <BISArmourRow item={item.epic} />
    </tr>
    <tr>
        <th scope="row"><Rarity rarity="legendary" /></th>
        <BISArmourRow item={item.legendary} />
    </tr>
    </tbody>
</table>

<style>
    th {
        padding: 0 1em;
    }

    table {
        text-align: center;
        overflow-x: auto;
    }

    caption {
        font-weight: bold;
    }
</style>
