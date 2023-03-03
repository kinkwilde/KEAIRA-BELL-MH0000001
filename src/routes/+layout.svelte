<script>
    import '../app.css';

    import ThemeHeader from '$lib/components/theme/Header.svelte';
    import ThemeFooter from '$lib/components/theme/Footer.svelte';

    import ThemeColor from '$lib/components/theme/Color.svelte';
    import ThemeCopyright from '$lib/components/theme/Copyright.svelte';
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
