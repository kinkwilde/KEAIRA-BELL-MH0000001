<script>
    console.log('ROUTES', 'Layout');

    import '../app.css';

    import ThemeLinks from '$lib/components/theme/links.svelte';
    import ThemeHeader from '$lib/components/theme/header.svelte';
    import ThemeFooter from '$lib/components/theme/footer.svelte';
    import ThemeCopyright from '$lib/components/theme/copyright.svelte';
</script>

<div class="tw-flex tw-h-screen tw-flex-col">
    <div class="tw-grow-0">
        <span class="tw-hidden lg:tw-block">
            <ThemeLinks />
        </span>
        <ThemeHeader />
    </div>
    <div class="tw-grow">
        <slot />
    </div>
    <div class="tw-grow-0">
        <ThemeFooter />
        <ThemeCopyright />
    </div>
</div>
