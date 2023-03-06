<script>
    console.log('COMPONENT', 'icons.svelte');

    import IconSearch from '$lib/icons/search.svelte';
    import IconCart from '$lib/icons/cart.svelte';
</script>

<nav class="tw-inline-flex tw-items-center tw-space-x-4">
    <button class="cm-header-icon-links" aria-label="show options">
        <IconSearch />
    </button>
    <button class="cm-header-icon-links" aria-label="show options">
        <IconCart />
    </button>
</nav>
