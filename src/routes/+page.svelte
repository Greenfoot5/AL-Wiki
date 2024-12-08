<script>
	import { siteTitle } from '$lib/config';
	import Header from "$lib/components/Header.svelte";
	import Loader from "$lib/components/Loader.svelte";
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<Header />
<div>
	<a href="season-timer">Season Timer</a><br />
	<Loader selected="t"></Loader>

<!--	<a href="old-skills2.html">Skill Calculator V2 - in active development so this may be very unstable if available at all!</a><br />-->
</div>


