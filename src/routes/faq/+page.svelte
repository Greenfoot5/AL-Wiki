<script>
    import Rarity from "$lib/components/Rarity.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import { Accordion } from "@skeletonlabs/skeleton-svelte";
    import {ArrowBigRightDash} from "@lucide/svelte";
    import Callout from "$lib/components/Callout.svelte";

    let value = $state([]);
</script>

<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>FAQs</title>
    <meta data-key="description" name="description" content="Frequently Asked Questions (and other useful info)">
    <meta property="og:title" content="Aeon's Legends - FAQs" />
    <meta property="og:description" content="Frequently Asked Questions (and other useful info)" />
    <meta property="og:url" content="https://al.alchemix.dev/faq" />
</svelte:head>

<div class="body">
    <PageTitle title="FAQs">
        Some questions that get frequently asked or other info that should be shared
    </PageTitle>

    <Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
        <Accordion.Item value="codes">
            <!-- Control -->
            {#snippet control()}<h3 class="h3">Any codes?</h3>{/snippet}
            <!-- Panel -->
            {#snippet panel()}
                <a href="/codes" class="anchor">Check out the codes page on the site</a>
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="passive-armour">
            {#snippet control()}<h3 class="h3">Passive skill doesn't grant any bonus?</h3>{/snippet}
            {#snippet panel()}
                Some skills grant bonuses based on what type of armour you use.
                For example, Heavy Metal grants bonus vitality based on your equipped heavy armour.
                Double check you've got the right armour equipped if you're not getting any bonus!
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="politeness">
            {#snippet control()}<h3 class="h3">How does politeness score work?</h3>{/snippet}
            {#snippet panel()}
                Whenever you send a message, and AI will analyse your message, it's context and previous messages you've sent to work out if it's "polite".
                The exact workings of this haven't been investigated, but chatting and engaging with others in global or guild chat will generally raise the score.
                Typically you can easily keep it above rare bonus and mostly above the epic bonus. Legendary however can be a little random currently however.
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="drop-difficulty">
            {#snippet control()}<h3 class="h3">What affects my drops when challenging harder expeditions?</h3>{/snippet}
            {#snippet panel()}
                Each map will drop a different tier of gear (i.e. the 2nd map drops T2 gear). <br />
                When increasing the stage number, e.g. 1-3 to 1-4, the xp & gold drops will increase. <br />
                When increasing the difficulty,
                i.e. from <span class="text-blue-400">normal (blue)</span> <ArrowBigRightDash class="inline" size={20}/>
                <span class="text-yellow-500">hard (yellow)</span> <ArrowBigRightDash class="inline" size={14}/>
                <span class="text-red-500">torment (red)</span>,
                drop rates for <Rarity rarity="rare"/>/<Rarity rarity="epic"/>/<Rarity rarity="legendary"/> gear increases as well as xp & gold rewards.
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="ranks">
            {#snippet control()}<h3 class="h3">What are the different PvP ranks?</h3>{/snippet}
            {#snippet panel()}
                Each rank is separated by 250 elo, and upon reaching a new rank (and winning a battle) you gain a title with the same name of your rank.
                Old titles do not disappear upon gaining new ones.<br />
                <img src="divisions.png"
                     alt="The PVP ranks are split into five divisions with four steps in each.
                     The five divisions are 'Scout', 'Knight', 'Centurion', 'Iron Guard' and 'Crusader'
                     Each step is the name of the division and then a suffix.
                     The first step has no suffix, the latter three have 'Custodian', 'Watcher' and 'Signifier' as the suffix."
                     style="max-height: 50%">
            {/snippet}
        </Accordion.Item>
        <hr class="hr" />
        <Accordion.Item value="synergies">
            {#snippet control()}<h3 class="h3">Synergies</h3>{/snippet}
            {#snippet panel()}
                Synergies work by granting buffs based on who is in your party.
                For example, gaining the priest synergy at level 1 with a priest in your team grants +2% bonus healing.
                <Callout variant="warning">Resetting synergies will NOT grant you your stones back.</Callout>
                The maximum amount of stones a FTP (free to play) can earn during a season is enough to max out 2 synergies. Spend your stones wisely!
            {/snippet}
        </Accordion.Item>
    </Accordion>
</div>

<style lang="scss">
    .body {
        margin: 2em;
    }
</style>
