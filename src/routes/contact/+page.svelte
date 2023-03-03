<script>
    console.log('PAGE', 'Contact Page');

    import PageTitle from '$lib/components/contents/title.svelte';
</script>

<div class="cm-section">
    <PageTitle />
    <div class="tw-container">
        <div class="tw-mx-auto tw-max-w-prose">
            <form>
                <div class="tw-grid tw-grid-cols-2 tw-gap-8">
                    <div class="tw-flex tw-flex-col">
                        <label
                            class="tw-mb-4 tw-text-base tw-font-semi tw-leading-none tw-text-black"
                            for="contactName"
                        >
                            Name
                        </label>
                        <input
                            class="tw-rounded-lg tw-border tw-border-black tw-bg-white tw-p-3 tw-text-black"
                            id="contactName"
                            type="name"
                        />
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label
                            class="tw-mb-4 tw-text-base tw-font-semi tw-leading-none tw-text-black"
                            for="contactEmail"
                        >
                            Email
                        </label>
                        <input
                            class="tw-rounded-lg tw-border tw-border-black tw-bg-white tw-p-3 tw-text-black"
                            id="contactEmail"
                            type="email"
                        />
                    </div>
                    <div class="tw-col-span-2 tw-flex tw-flex-col">
                        <label
                            class="tw-mb-4 tw-text-base tw-font-semi tw-leading-none tw-text-black"
                            for="contactMessage"
                        >
                            Write your message
                        </label>
                        <textarea
                            class="tw-resize-y tw-rounded-lg tw-border tw-border-black tw-bg-white tw-p-3 tw-text-black"
                            id="contactMessage"
                        />
                    </div>
                </div>
                <div
                    class="tw-mt-12 tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center"
                >
                    <p class="tw-mb-8 tw-text-center tw-text-xs tw-leading-3 tw-text-black">
                        By clicking submit you agree to our terms of service, privacy policy and how
                        we use data as stated
                    </p>
                    <button class="cm-button-primary">Submit Form</button>
                </div>
            </form>
        </div>
    </div>
</div>
