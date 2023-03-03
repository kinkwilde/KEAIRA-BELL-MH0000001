<script>
    console.log('PAGE', 'Error Page');

    import { page } from '$app/stores';

    const { status } = $page;

    const title = `${status}`;
</script>

<div class="tw-py-12 lg:tw-py-24">
    <div class="tw-container tw-flex tw-flex-col tw-items-center">
        <div class="tw-flex tw-w-11/12 tw-flex-col tw-items-center tw-text-center md:tw-w-2/3">
            <p class="tw-mb-8 tw-font-semi tw-uppercase">{title}</p>
            <h2
                class="tw-text-center tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl xl:tw-text-6xl"
            >
                Looks like you've found the doorway to the great nothing
            </h2>
            <p class="cm-intro tw-mt-4 tw-w-9/12 lg:tw-text-xl">
                The content youre looking for doesnt exist. Either it was removed, or you mistyped
                the link.
            </p>
            <p class="tw-mb-0">
                Sorry about that! Please visit our hompage to get where you need to go.
            </p>
            <div class="tw-mt-12">
                <a href="/" class="cm-button-primary">Go back to Homepage</a>
            </div>
        </div>
    </div>
</div>
