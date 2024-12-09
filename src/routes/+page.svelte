<script>
	import { siteTitle } from '$lib/config';
	import Header from "$lib/components/Header.svelte";
	import Loader from "$lib/components/Loader.svelte";
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<Header />
<div style="margin: 2em;">
	<a href="season-timer">Season Timer</a><br />
	<a href="codes">Codes</a><br />
	<a href="bis">Best in Slot</a>
</div>


