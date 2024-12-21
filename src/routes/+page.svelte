<script>
	import { siteTitle } from '$lib/config';
	import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{siteTitle}</title>
	<meta data-key="description" name="description" content="Aeon's Legends Wiki Thingy">
	<meta property="og:title" content="Greenpedia - Aeon's Legends" />
	<meta property="og:description" content="Aeon's Legends Wiki Thingy" />
	<meta property="og:url" content="https://al.alchemix.dev/" />
</svelte:head>

<Header />
<div style="margin: 2em;">
	<a href="season-timer">Season Timer</a><br />
	<a href="codes">Codes</a><br />
	<a href="bis">Best in Slot</a>
</div>


