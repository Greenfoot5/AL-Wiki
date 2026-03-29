<script>
    import Rarity from "$lib/components/Rarity.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import { ArrowBigRightDash } from "@lucide/svelte";
    import Callout from "$lib/components/Callout.svelte";
</script>

<svelte:head>
    <title>FAQs</title>
    <meta name="description" content="Frequently Asked Questions (and other useful info)" />
    <meta property="og:title" content="Aeon's Legends - FAQs" />
    <meta property="og:description" content="Frequently Asked Questions (and other useful info)" />
    <meta property="og:url" content="https://al.alchemix.dev/faq" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
    <PageTitle title="FAQs">
        Some questions that get frequently asked or other info that should be shared
    </PageTitle>

    <!-- DaisyUI Accordion List -->
    <div class="space-y-4">

        <!-- Codes -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">
                Any codes?
            </summary>
            <div class="collapse-content px-4 py-2">
                <a href="/codes" class="link link-primary font-medium">Check out the codes page on the site</a>
            </div>
        </details>

        <!-- Passive Armour -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">
                Passive skill doesn't grant any bonus?
            </summary>
            <div class="collapse-content px-4 py-2">
                <p class="text-base-content/80">
                    Some skills grant bonuses based on what type of armour you use.
                    For example, Heavy Metal grants bonus vitality based on your equipped heavy armour.
                    Double check you've got the right armour equipped if you're not getting any bonus!
                </p>
            </div>
        </details>

        <!-- Politeness -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">
                How does politeness score work?
            </summary>
            <div class="collapse-content px-4 py-2">
                <p class="text-base-content/80">
                    Whenever you send a message, an AI will analyse your message, its context and previous messages you've sent to work out if it's "polite".
                    The exact workings of this haven't been investigated, but chatting and engaging with others in global or guild chat will generally raise the score.
                    Typically you can easily keep it above rare bonus and mostly above the epic bonus. Legendary however can be a little random currently.
                </p>
            </div>
        </details>

        <!-- Drop Difficulty -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">
                What affects my drops when challenging harder expeditions?
            </summary>
            <div class="collapse-content px-4 py-2">
                <p class="text-base-content/80">
                    Each map will drop a different tier of gear (i.e. the 2nd map drops T2 gear). <br />
                    When increasing the stage number, e.g. 1-3 to 1-4, the XP & gold drops will increase. <br />
                    When increasing the difficulty,
                    i.e. from <span class="text-blue-400 font-bold">normal (blue)</span>
                    <ArrowBigRightDash class="inline mx-1" size={16} />
                    <span class="text-yellow-500 font-bold">hard (yellow)</span>
                    <ArrowBigRightDash class="inline mx-1" size={16} />
                    <span class="text-red-500 font-bold">torment (red)</span>,
                    drop rates for <Rarity rarity="rare"/>/<Rarity rarity="epic"/>/<Rarity rarity="legendary"/> gear increases as well as XP & gold rewards.
                </p>
            </div>
        </details>

        <!-- Ranks -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">
                What are the different PvP ranks?
            </summary>
            <div class="collapse-content px-4 py-2">
                <div class="text-base-content/80">
                    Each rank is separated by 250 ELO, and upon reaching a new rank (and winning a battle) you gain a title with the same name of your rank.
                    Old titles do not disappear upon gaining new ones.<br />
                    <div class="mt-4 flex justify-center">
                        <img src="divisions.png"
                             alt="The PVP ranks are split into five divisions with four steps in each.
                             The five divisions are 'Scout', 'Knight', 'Centurion', 'Iron Guard' and 'Crusader'.
                             Each step is the name of the division and then a suffix.
                             The first step has no suffix, the latter three have 'Custodian', 'Watcher' and 'Signifier' as the suffix."
                             class="rounded-box border border-base-300 shadow-sm"
                        style="max-height: 50%"/>
                    </div>
                </div>
            </div>
        </details>

        <!-- Synergies -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">
                Synergies
            </summary>
            <div class="collapse-content px-4 py-2">
                <div class="text-base-content/80">
                    Synergies work by granting buffs based on who is in your party.
                    For example, gaining the priest synergy at level 1 with a priest in your team grants +2% bonus healing.
                    <Callout variant="warning" class="mt-4">
                        Resetting synergies will NOT grant you your stones back.
                    </Callout>
                    <p class="mt-4">
                        The maximum amount of stones a FTP (free to play) can earn during a season is enough to max out 2 synergies. Spend your stones wisely!
                    </p>
                </div>
            </div>
        </details>

        <!-- Matchmaking -->
<!--        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">-->
<!--            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">-->
<!--                I'm facing enemies way above my level in PVP!-->
<!--            </summary>-->
<!--            <div class="collapse-content px-4 py-2">-->
<!--                <div class="text-base-content/80">-->
<!--                    <Callout variant="warning" class="mb-4">-->
<!--                        Matchmaking is based on your team's ELO, so if you bring teammates with higher ELO, you're going to face opponents who are above your personal ELO.-->
<!--                    </Callout>-->

<!--                    <p>-->
<!--                        Each account has two different ELO ratings.-->
<!--                        They have a personal ELO (the one on the leaderboard) and they also have a team ELO.-->
<!--                        The latter is based on your personal ELO, and adjusted based on who's in your team.-->
<!--                    </p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </details>-->

        <!-- Drop Rates -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">
                What are the chances for the drops?
            </summary>
            <div class="collapse-content px-4 py-2">
                <div class="text-base-content/80">
                    <p>
                        The formula:
                        <code>
                            (Base chance + politeness factor) × expedition map progress × difficulty factor
                        </code>
                    </p>
                    <p class="pt-2">
                        The base chances are as follows:
                    </p>
                    <ul>
                        <li><Rarity rarity="common" />: 80%</li>
                        <li><Rarity rarity="rare" />: 17%</li>
                        <li><Rarity rarity="epic" />: 2%</li>
                        <li><Rarity rarity="legendary" />: 1%</li>
                    </ul>
                    <p class="py-1">
                        For the <Rarity rarity="epic" /> and <Rarity rarity="legendary" />, the chances are shrunk based on the level you are in the expedition.
                        For instance if you are in the 1/10 level, these chances are the 1/10, = 0.5% and 0.2% and if you are in the last level, the chances are at their base + politeness.
                    </p>
                    <p>
                        Next, these chances are multiplied based on the difficulty by 20% and 50%, bringing them up to<br />
                        6% and 7.5% for <Rarity rarity="epic" /> and <br />
                        2.2% and 3% for <Rarity rarity="legendary" />
                    </p>
                </div>
            </div>
        </details>

        <!-- Wings -->
        <details class="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <summary class="collapse-title text-lg font-bold cursor-pointer hover:bg-base-200/50 transition-colors">
                How can I get Wings?
            </summary>
            <div class="collapse-content px-4 py-2">
                <div class="text-base-content/80">
                    The main method is paying for the season pass. At the end of the season (month) you will get all the premium rewards, if you completed it or not.
                    Other than this, Wings have only been given to beta testers & on a 7-day login event over Christmas.
                </div>
            </div>
        </details>

    </div>
</div>
