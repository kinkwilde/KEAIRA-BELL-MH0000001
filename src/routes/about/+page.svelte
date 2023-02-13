<script>
    import PageHero from '$lib/components/contents/Hero.svelte';
    import Instagram from '$lib/components/contents/Instagram.svelte';
</script>

<div class="cm-section">
    <PageHero />
    <div class="tw-container tw-flex tw-flex-col tw-items-center">
        <img
            class="tw-h-auto tw-w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
        />
    </div>
    <div class="tw-container tw-flex tw-flex-col tw-justify-between tw-gap-12 lg:tw-flex-row">
        <div class="tw-flex tw-w-full tw-flex-col tw-justify-center lg:tw-w-5/12">
            <h1 class="tw-pb-4 tw-text-3xl tw-font-bold tw-leading-9 tw-text-black lg:tw-text-4xl">
                Our Story
            </h1>
            <p class="tw-text-base tw-font-normal tw-leading-6 tw-text-black">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum.In the
                first place we have granted to God, and by this our present charter confirmed for us
                and our heirs forever that the English Church shall be free, and shall have her
                rights entire, and her liberties inviolate; and we will that it be thus observed;
                which is apparent from
            </p>
        </div>
        <div class="tw-w-full lg:tw-w-8/12">
            <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-4 lg:tw-gap-4">
                <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <img
                        class="tw-w-full"
                        src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                        alt="Alexa featured"
                    />
                    <p class="tw-mt-4 tw-text-xl tw-font-medium tw-leading-5 tw-text-black">
                        Alexa
                    </p>
                </div>
                <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <img
                        class="tw-w-full"
                        src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                        alt="Alexa featured"
                    />
                    <p class="tw-mt-4 tw-text-xl tw-font-medium tw-leading-5 tw-text-black">
                        Alexa
                    </p>
                </div>
                <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <img
                        class="tw-w-full"
                        src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                        alt="Alexa featured"
                    />
                    <p class="tw-mt-4 tw-text-xl tw-font-medium tw-leading-5 tw-text-black">
                        Alexa
                    </p>
                </div>
                <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <img
                        class="tw-w-full"
                        src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                        alt="Alexa featured"
                    />
                    <p class="tw-mt-4 tw-text-xl tw-font-medium tw-leading-5 tw-text-black">
                        Alexa
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<Instagram />
