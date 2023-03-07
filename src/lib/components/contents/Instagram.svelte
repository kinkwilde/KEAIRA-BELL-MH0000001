<script>
    console.log('COMPONENT', 'instagram.svelte');

    import Placeholder from '$lib/components/contents/placeholder.svelte';
</script>

<div class="tw-bg-accent3">
    <div class="tw-container tw-py-9 md:tw-py-12">
        <div class="tw-text-center">
            <h2
                class="tw-mx-auto tw-w-9/12 tw-text-3xl tw-font-semi tw-leading-9 tw-text-white md:tw-w-full md:tw-leading-7 lg:tw-text-4xl lg:tw-leading-9"
            >
                Follow me on Instagram
            </h2>
            <p
                class="tw-mx-auto tw-mt-4 tw-text-base tw-font-normal tw-leading-6 tw-text-white md:tw-w-9/12 lg:tw-w-5/12"
            >
                Follow us on instagram @followuspleaseee and tag us to get featured on our timeline
            </p>
        </div>
        <div
            class="tw-mt-10 tw-grid tw-grid-cols-1 tw-gap-4 sm:tw-grid-cols-2 md:tw-gap-8 lg:tw-grid-cols-4 lg:tw-gap-8"
        >
            <div class="tw-aspect-[3/4]">
                <Placeholder>
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg"
                        alt="instagram"
                    />
                </Placeholder>
            </div>
            <div class="tw-aspect-[3/4]">
                <Placeholder>
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg"
                        alt="instagram"
                    />
                </Placeholder>
            </div>
            <div class="tw-aspect-[3/4]">
                <Placeholder>
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg"
                        alt="instagram"
                    />
                </Placeholder>
            </div>
            <div class="tw-aspect-[3/4]">
                <Placeholder>
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg"
                        alt="instagram"
                    />
                </Placeholder>
            </div>
        </div>
    </div>
</div>
