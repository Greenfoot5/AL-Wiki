<script lang="ts">
    const { tier } = $props();
</script>

<div class="py-4">
    <h3 class="h3">Other Tiers</h3>
    <ul>
        {#if tier !== "t4"}
            <li><a href="/bis" class="anchor">View T4</a></li>
        {:else if tier !== "t3" || tier !== "t3.5"}
            <li><a href="/bis/t3" class="anchor">View T3</a></li>
        {/if}
    </ul>
</div>
