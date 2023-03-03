<script>
    console.log('COMPONENT', 'card.svelte');

    import IconLink from '$lib/icons/link.svelte';
</script>

<div
    class="tw-flex tw-h-64 tw-w-full tw-flex-col tw-justify-between tw-rounded-lg tw-bg-black tw-py-5 tw-px-4 dark:tw-bg-grey"
>
    <div>
        <h4 class="tw-mb-3 tw-font-bold tw-text-white dark:tw-text-white">13 things to work on</h4>
        <p class="tw-text-sm tw-text-white dark:tw-text-white">
            Our interior design experts work with you to create the space that you have been
            dreaming about.
        </p>
    </div>
    <div>
        <div class="tw-flex tw-items-center tw-justify-between tw-text-white dark:tw-text-white">
            <p class="tw-text-sm tw-text-white">March 28, 2020</p>
            <a
                class="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-full tw-bg-white tw-text-black"
                href="/blog/article"
            >
                <IconLink />
            </a>
        </div>
    </div>
</div>
