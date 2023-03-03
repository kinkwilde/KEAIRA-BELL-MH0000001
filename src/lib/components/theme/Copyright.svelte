<script>
    console.log('COMPONENT', 'copyright.svelte');

    import Logo from '$lib/components/theme/logo.svelte';

    const copyrightDate = new Date().getFullYear();
</script>

<div class="tw-bg-white tw-py-9 dark:tw-bg-black">
    <div class="tw-container tw-flex tw-flex-col tw-items-center">
        <Logo textSize="tw-text-4xl" />
        <small class="tw-mt-4 tw-mb-0 tw-leading-none">
            Copyright &copy; 2020 - {copyrightDate}. All Rights Reserved.
        </small>
    </div>
</div>
