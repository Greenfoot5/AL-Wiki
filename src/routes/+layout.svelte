<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
    import '$lib/assets/scss/global.scss'
    import Footer from '$lib/components/Footer.svelte'
    // import { currentPage, isMenuOpen } from '$lib/assets/js/store'
    // import { navItems } from '$lib/config'
    // import { preloadCode } from '$app/navigation'
    // import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    export let data

    const transitionIn = { delay: 150, duration: 150 }
    const transitionOut = { duration: 100 }

    /**
     * Updates the global store with the current path. (Used for highlighting
     * the current page in the nav, but could be useful for other purposes.)
     **/
    // $: currentPage.set(data.path)

    /**
     * This pre-fetches all top-level routes on the site in the background for faster loading.
     * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
     *
     * Any route added in src/lib/config.js will be preloaded automatically. You can add your
     * own preloadData() calls here, too.
     **/
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
