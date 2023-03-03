<script>
    // console.log('hero.svelte');

    export let title = 'The Freedom to Create the Websites You Want';
    export let text =
        'A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online';

    export let linkOneText = 'Click Here';
    export let linkOneLink = '';

    export let linkTwoText = 'Click Here';
    export let linkTwoLink = '';
</script>

<div class="tw-container tw-flex tw-flex-col tw-items-center">
    <div class="tw-flex tw-w-11/12 tw-flex-col tw-items-center md:tw-w-2/3">
        <h3
            class="tw-mb-0 tw-text-center tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl xl:tw-text-6xl"
        >
            {title}
        </h3>
        <p
            class="tw-mt-4 tw-mb-0 tw-max-w-prose tw-text-center sm:tw-mt-8 sm:tw-text-lg lg:tw-w-10/12"
        >
            {text}
        </p>
    </div>
    {#if linkOneLink !== '' || linkTwoLink !== ''}
        <div
            class="tw-mt-12 tw-flex tw-flex-col tw-space-x-0 tw-space-y-4 lg:tw-flex-row lg:tw-items-center lg:tw-justify-center lg:tw-space-x-8 lg:tw-space-y-0"
        >
            {#if linkOneLink}
                <a class="cm-button-primary" href={linkOneLink}>
                    {linkOneText}
                </a>
            {/if}
            {#if linkTwoLink}
                <a class="cm-button-secondary" href={linkTwoLink}>
                    {linkTwoText}
                </a>
            {/if}
        </div>
    {/if}
</div>
