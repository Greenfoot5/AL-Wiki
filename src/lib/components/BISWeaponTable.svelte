<script>
    import Rarity from "$lib/components/Rarity.svelte";
    import BISWeaponRow from "$lib/components/BISWeaponRow.svelte";

    let { item, caption } = $props();
</script>
<table>
    {#if caption}
        <caption class="text-tertiary-400-600">{caption}</caption>
    {/if}
    <thead class="h6 text-tertiary-700-300">
    <tr>
        <th scope="col">Rarity</th>
        <th scope="col">Damage</th>
        <th scope="col">Attack Speed</th>
        <th scope="col">Strength</th>
        <th scope="col">Dexterity</th>
        <th scope="col">Intelligence</th>
        <th scope="col">Vitality</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row"><Rarity rarity="rare" /></th>
        <BISWeaponRow item={item.rare} />
    </tr>
    <tr>
        <th scope="row"><Rarity rarity="e" /></th>
        <BISWeaponRow item={item.epic} />
    </tr>
    <tr>
        <th scope="row"><Rarity rarity="l" /></th>
        <BISWeaponRow item={item.legendary} />
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
