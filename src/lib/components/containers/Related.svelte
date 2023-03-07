<script>
    console.log('COMPONENT', 'related.svelte');

    import Card from '$lib/components/contents/card.svelte';
</script>

<div class="tw-container">
    <div class="tw-mx-auto tw-mb-12 tw-flex tw-flex-col tw-items-center sm:tw-w-2/3">
        <h2 class="tw-mb-0 tw-text-center">Want to read more?</h2>
    </div>
    <div class="tw-grid tw-gap-4 md:tw-grid-cols-2 lg:tw-gap-8 xxl:tw-grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div class="tw-mx-auto tw-mt-12 tw-flex tw-flex-col tw-items-center sm:tw-w-2/3">
        <p class="tw-max-w-prose tw-text-center sm:tw-text-lg lg:tw-w-10/12">
            If you enjoy reading our articles, then why not read more.
        </p>
        <a class="cm-button-primary" href="/blog">Go To Blog</a>
    </div>
</div>
