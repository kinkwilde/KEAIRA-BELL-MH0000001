<script>
    console.log('COMPONENT', 'header.svelte');

    import Icons from '$lib/components/theme/icons.svelte';
    import Logo from '$lib/components/theme/logo.svelte';
    import Mobile from '$lib/components/theme/mobile.svelte';
    import Navigation from '$lib/components/theme/navigation.svelte';
</script>

<div class="tw-bg-black dark:tw-bg-grey">
    <div class="tw-container tw-grid tw-grid-cols-2 tw-items-center tw-gap-4 tw-py-9">
        <div class="tw-flex tw-justify-start">
            <Logo textColor="tw-text-white" logoH1={true} />
        </div>
        <div class="tw-col-start-2 tw-flex tw-justify-end tw-space-x-4">
            <div class="tw-hidden xl:tw-inline-flex xl:tw-items-center">
                <Navigation />
            </div>
            <div class="tw-hidden md:tw-inline-flex md:tw-items-center">
                <Icons />
            </div>
            <div class="tw-inline-flex tw-items-center">
                <Mobile />
            </div>
        </div>
    </div>
</div>
