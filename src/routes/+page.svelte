<script>
	import { siteTitle } from '$lib/config';
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{siteTitle}</title>
	<meta data-key="description" name="description" content="Aeon's Legends Wiki Thingy">
	<meta property="og:title" content="Greenpedia - Aeon's Legends" />
	<meta property="og:description" content="Aeon's Legends Wiki Thingy" />
	<meta property="og:url" content="https://al.alchemix.dev/" />
</svelte:head>

<dl class="space-y-2 ml-8">
	<div>
		<dt class="anchor font-bold"><a href="updates/1.3">V1.3 patch notes</a></dt>
		<dd class="opacity-60 text-base">Check out the latest patch notes</dd>
	</div>
	<div>
		<dt class="anchor font-bold"><a href="faq">Frequently Asked Questions (and other useful info)</a></dt>
		<dd class="opacity-60 text-base">Chances are, your questions are answered are here</dd>
	</div>
	<div>
		<dt class="anchor font-bold"><a href="season-timer">Season Timer</a></dt>
		<dd class="opacity-60 text-base">How long left of the season?</dd>
	</div>
	<div>
		<dt class="anchor font-bold"><a href="codes">Codes</a></dt>
		<dd class="opacity-60 text-base">FREE STUFF</dd>
	</div>
	<div>
		<dt class="anchor font-bold"><a href="bis">Best in Slot</a></dt>
		<dd class="opacity-60 text-base">What's the best roll?</dd>
	</div>
</dl>
