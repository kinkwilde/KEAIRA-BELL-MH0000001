<script>
    // console.log('Copyright.svelte');

    import Logo from '$lib/components/theme/logo.svelte';

    const copyrightDate = new Date().getFullYear();
</script>

<div class="tw-bg-white tw-py-9 dark:tw-bg-black">
    <div class="tw-container tw-flex tw-flex-col tw-items-center">
        <Logo textSize="tw-text-4xl" />
        <p class="tw-mt-4 tw-mb-0 tw-text-xs tw-leading-none md:tw-text-sm">
            Copyright &copy; 2020 - {copyrightDate}. All Rights Reserved.
        </p>
    </div>
</div>
