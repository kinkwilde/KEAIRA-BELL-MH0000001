<script>
    import Card from '$lib/components/contents/Card.svelte';
</script>

<div class="tw-container">
    <div class="tw-mx-auto tw-mb-12 tw-flex tw-flex-col tw-items-center sm:tw-w-2/3">
        <h2 class="tw-mb-0 tw-text-center">The Freedom to Create the Websites You Want</h2>
        <p
            class="tw-mt-4 tw-mb-0 tw-max-w-prose tw-text-center sm:tw-mt-8 sm:tw-text-lg lg:tw-w-10/12"
        >
            A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online
        </p>
    </div>
    <div
        class="tw-grid tw-gap-8 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 xl:tw-grid-cols-4"
    >
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div class="tw-mt-12 tw-text-center">
        <p>Want to read more?</p>
        <a class="cm-button-primary" href="/blog"> Go here </a>
    </div>
</div>
