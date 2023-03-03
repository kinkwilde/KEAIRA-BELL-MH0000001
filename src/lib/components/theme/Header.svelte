<script>
    // console.log('Header.svelte');

    import Links from '$lib/components/theme/Links.svelte';
    import Logo from '$lib/components/theme/Logo.svelte';
    import Mobile from '$lib/components/theme/Mobile.svelte';
</script>

<div class="tw-bg-black dark:tw-bg-grey">
    <div class="tw-container tw-grid tw-grid-cols-2 tw-items-center tw-gap-4 tw-py-9">
        <div class="tw-flex tw-justify-start">
            <Logo textColor="tw-text-white" logoH1={true} />
        </div>
        <div class="tw-col-start-2 tw-flex tw-justify-end tw-space-x-4">
            <div class="tw-hidden lg:tw-block">
                <Links />
            </div>
            <div>
                <Mobile />
            </div>
        </div>
    </div>
</div>
