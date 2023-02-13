<script>
    // console.log('Links.svelte');

    import IconSearch from '$lib/icons/Search.svelte';
    import IconCart from '$lib/icons/Cart.svelte';
</script>

<nav class="tw-space-x-4">
    <button class="cm-header-links" aria-label="show options">
        <IconSearch />
    </button>
    <button class="cm-header-links" aria-label="show options">
        <IconCart />
    </button>
</nav>
