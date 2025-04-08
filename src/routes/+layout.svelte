<script lang="ts">
    import '$lib/assets/scss/global.scss';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
    // import { currentPage, isMenuOpen } from '$lib/assets/js/store'
    // import { navItems } from '$lib/config'
    // import { preloadCode } from '$app/navigation'
    // import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    export let data

    const transitionIn = { delay: 150, duration: 150 }
    const transitionOut = { duration: 100 }
</script>

<svelte:head>
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Greenpedia" />
    <meta property="og:locale" content="en_GB" />
</svelte:head>


<!--
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div class="layout"> <!--class:open={$isMenuOpen}>-->

    {#key data.path}
        <main
                id="main"
                tabindex="-1"
                in:fade={transitionIn}
                out:fade={transitionOut}
        >
            <slot />
        </main>
    {/key}
    <Footer />
</div>

<style lang="scss">
    div{
        height: 100%;
    }
</style>
