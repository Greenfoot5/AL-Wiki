<script lang="ts">
    import '$lib/assets/scss/global.scss';
    import '../app.css';
    import Header from "$lib/components/Header.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Greenpedia" />
    <meta property="og:locale" content="en_GB" />
</svelte:head>

<Header />

<div class="layout">
    {@render children?.()}
</div>

<style lang="scss">
    div{
        height: 100%;
    }
</style>
