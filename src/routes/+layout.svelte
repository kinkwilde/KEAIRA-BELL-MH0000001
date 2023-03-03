<script>
    import '../app.css';

    import ThemeHeader from '$lib/components/theme/header.svelte';
    import ThemeFooter from '$lib/components/theme/footer.svelte';

    import ThemeColor from '$lib/components/theme/color.svelte';
    import ThemeCopyright from '$lib/components/theme/copyright.svelte';
</script>

<div class="tw-flex tw-h-screen tw-flex-col">
    <div class="tw-grow-0">
        <ThemeHeader />
    </div>
    <div class="tw-grow">
        <slot />
    </div>
    <div class="tw-grow-0">
        <ThemeFooter />
        <ThemeCopyright />
        <ThemeColor />
    </div>
</div>
