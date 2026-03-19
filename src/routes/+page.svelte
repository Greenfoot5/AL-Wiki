<script>
	import {
		Gamepad2,
		Users,
		ChartBar,
		ExternalLink,
		Sparkles, Asterisk, MessageCircleQuestionMark
	} from '@lucide/svelte';

	import { SiGithub, SiDiscord } from '@icons-pack/svelte-simple-icons';

	import { siteTitle, siteDescription, github, discord } from '$lib/config';

	// Mock data for the "Latest Updates" section
	const updates = [
		{ title: "Guild Dominion Update", date: "Mar 15, 2026", desc: "New 4X map mechanics and territory defense strategies added." },
		{ title: "Hero Balance Patch", date: "Mar 10, 2026", desc: "Adjustments to secondary scaled attributes to fix scaling bugs." },
		{ title: "Community Spreadsheet v2.0", date: "Mar 05, 2026", desc: "Matthias updated the beginner's guide with verified drop rates." }
	];
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content="Aeon's Legends Wiki Thingy" />
	<meta property="og:title" content="Greenpedia - Aeon's Legends" />
	<meta property="og:description" content="Aeon's Legends Wiki Thingy" />
	<meta property="og:url" content="https://al.alchemix.dev/" />
	<meta property="theme-color" content="#43C26F" />
</svelte:head>

<!-- Hero Section -->
<header class="relative overflow-hidden pt-20 pb-32">
	<!-- Background Decor -->
	<div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]"></div>
		<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[128px]"></div>
	</div>

	<div class="container mx-auto px-4 relative z-10 text-center">
		<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full badge badge-outline badge-lg mb-6 animate-fade-in-up">
			<Sparkles class="w-4 h-4 text-primary" />
			<span class="font-semibold uppercase tracking-wider text-primary">Wiki redesign now live!</span>
		</div>

		<h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text">
			Master Aeon's Legends
		</h1>

		<p class="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto mb-10 leading-relaxed">
			The definitive community wiki for <strong>Aeon's Legends</strong>.
			Track best drop stats, check out the latest news, and review the season timer.
		</p>

		<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
			<a href="/bis" class="btn btn-primary btn-lg shadow-lg shadow-primary/25 hover:-translate-y-0.5">
				View Stats & Drops
			</a>
			<a href={discord} target="_blank" class="btn btn-accent btn-lg border border-base-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
				<SiDiscord class="w-5 h-5" /> Join Community
			</a>
		</div>
	</div>
</header>

<!-- Main Content Grid -->
<main class="container mx-auto px-4 pb-24 space-y-24">

	<!-- Features Section -->
	<section id="features" class="grid md:grid-cols-3 gap-8">
		{#each [
			{ icon: ChartBar, title: "Best in Slot", desc: "Dive into the best stats each item can drop with, and their best when fully upgraded." },
			{ icon: Asterisk, title: "Codes", desc: "The latest reward codes listed with their rewards. Also contains the full history of codes." },
			{ icon: MessageCircleQuestionMark, title: "Your questions, answered", desc: "The frequently asked questions page can answer your... frequently asked questions!" }
		] as feature}
			<div class="card bg-base-100/50 border border-base-300 hover:border-primary/50 transition-colors group">
				<div class="card-body p-6">
					<div class="w-12 h-12 rounded-lg bg-base-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
						<feature.icon class="w-6 h-6 text-primary" />
					</div>
					<h3 class="card-title text-xl">{feature.title}</h3>
					<p class="text-base-content/70 leading-relaxed">{feature.desc}</p>
				</div>
			</div>
		{/each}
	</section>

	<!-- Latest Updates / Stats Teaser -->
	<section id="stats" class="bg-base-100/30 rounded-box p-8 md:p-12 border border-base-300/50">
		<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
			<div>
				<h2 class="text-3xl font-bold mb-2">Latest Updates</h2>
				<p class="text-base-content/70">Recent changes to the game and wiki data.</p>
			</div>
			<a href="#" class="link link-primary font-medium flex items-center gap-1 group">
				View All Updates <ExternalLink class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
			</a>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			{#each updates as update}
				<article class="card bg-base-200 border border-base-300 hover:border-base-content/30 transition-colors">
					<div class="card-body p-5">
						<div class="text-xs font-mono text-primary mb-2">{update.date}</div>
						<h4 class="font-bold text-lg">{update.title}</h4>
						<p class="text-sm text-base-content/70">{update.desc}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Contribution Callout -->
	<section class="text-center max-w-3xl mx-auto">
		<h2 class="text-2xl font-bold mb-4">Help Improve the Wiki</h2>
		<p class="text-base-content/70 mb-6">
			We rely on the community for accurate data. Found a bug in the stats?
			Submit a PR with screenshots to verify drop rates and attribute scaling.
		</p>
		<a href={github} class="btn btn-neutral btn-lg">
			<SiGithub class="w-5 h-5" /> Contribute on GitHub
		</a>
	</section>

</main>

<!-- Footer -->
<footer class="footer footer-center footer-horizontal p-10 bg-base-100 text-base-content border-t border-base-300">
	<aside>
		<div class="font-bold text-lg mb-1">{siteTitle}</div>
		<p class="text-sm text-base-content/60">
			Unofficial wiki for Aeon's Legends by Kaos IV.
		</p>
	</aside>
	<nav class="grid-flow-col gap-4">
		<a href={github} class="link link-hover hidden md:flex">Source Code</a>
		<a href={github} class="link link-hover md:hidden flex"><SiGithub size={24}/></a>
		<a href={discord} class="link link-hover hidden md:flex">Discord</a>
		<a href={discord} class="link link-hover md:hidden flex"><SiDiscord size={24}/></a>
	</nav>
	<nav>
		<div class="text-xs text-base-content/40">
			&copy; {new Date().getFullYear()} Greenfoot5
		</div>
	</nav>
</footer>


<style>
	/* Custom animations if Tailwind config doesn't cover them */
	@keyframes fade-in-up {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}
	.animate-fade-in-up {
		animation: fade-in-up 0.8s ease-out forwards;
	}
</style>
