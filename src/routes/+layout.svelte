<script lang="ts">
    import '$lib/assets/scss/global.scss';
    import '../app.css';
    import Header from "$lib/components/Header.svelte";
    import {siteTitle} from "$lib/config";

    let { children } = $props();
</script>

<svelte:head>
    <title>{siteTitle}</title>
    <meta name="description" content="Aeon's Legends Wiki Thingy" />
    <meta property="og:title" content="Greenpedia - Aeon's Legends" />
    <meta property="og:description" content="Aeon's Legends Wiki Thingy" />
    <meta property="og:url" content="https://al.alchemix.dev/" />
    <meta property="theme-color" content="#43C26F" />
</svelte:head>

<div class="min-h-screen bg-base-200 text-base-content font-sans selection:bg-primary selection:text-primary-content">
    <Header />
    {@render children?.()}
</div>

<style lang="scss">
    div{
        height: 100%;
    }
</style>
