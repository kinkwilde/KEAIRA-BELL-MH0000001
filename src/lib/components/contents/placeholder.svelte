<script>
    console.log('COMPONENT', 'placeholder.svelte');
</script>

<div
    class="tw-relative tw-z-0 tw-h-full tw-w-full tw-bg-gradient-to-r tw-from-accent1 tw-to-accent3"
>
    <div
        class="tw-relative tw-z-5 tw-flex tw-h-full tw-w-full tw-items-center tw-bg-contain tw-bg-center tw-bg-no-repeat"
    >
        <div class="tw-container tw-flex tw-flex-col tw-items-center">
            <slot />
        </div>
    </div>
</div>
