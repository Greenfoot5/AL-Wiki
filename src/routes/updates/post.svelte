<script>
    export let title;
    export let release;
</script>

<div class="body">
    <h1>{title}</h1>
    <p>Released: <code>{release}</code></p>
    <slot />
</div>

<style>
    .body {
        margin: 2%;
    }
</style>
