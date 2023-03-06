<script>
    console.log('COMPONENT', 'hero.svelte');

    export let background = 'https://picsum.photos/1920/1080';

    export let title = '';
    export let text = '';

    export let linkOneText = 'Click Here';
    export let linkOneLink = '';

    export let linkTwoText = 'Click Here';
    export let linkTwoLink = '';

    const backgroundClass = `tw-bg-[url('${background}')]`;
</script>

<div class="{backgroundClass} tw-flex tw-aspect-[16/6] tw-items-center">
    {#if title !== '' || text !== ''}
        <div class="tw-container tw-flex tw-flex-col tw-items-center">
            <div class="tw-flex tw-w-11/12 tw-flex-col tw-items-center md:tw-w-2/3">
                {#if title !== ''}
                    <h3 class="cm-title tw-mb-0 tw-text-center">
                        {title}
                    </h3>
                {/if}
                {#if text !== ''}
                    <p
                        class="tw-mt-4 tw-mb-0 tw-max-w-prose tw-text-center sm:tw-mt-8 sm:tw-text-lg lg:tw-w-10/12"
                    >
                        {text}
                    </p>
                {/if}
            </div>
            {#if linkOneLink !== '' || linkTwoLink !== ''}
                <div
                    class="tw-mt-12 tw-flex tw-flex-col tw-space-x-0 tw-space-y-4 lg:tw-flex-row lg:tw-items-center lg:tw-justify-center lg:tw-space-x-8 lg:tw-space-y-0"
                >
                    {#if linkOneLink !== ''}
                        <a class="cm-button-primary" href={linkOneLink}>
                            {linkOneText}
                        </a>
                    {/if}
                    {#if linkTwoLink !== ''}
                        <a class="cm-button-secondary" href={linkTwoLink}>
                            {linkTwoText}
                        </a>
                    {/if}
                </div>
            {/if}
        </div>
    {/if}
</div>
