<script>
    console.log('PAGE', 'About Page');

    import Instagram from '$lib/components/contents/instagram.svelte';

    import Placeholder from '$lib/components/contents/placeholder.svelte';
</script>

<div class="cm-section">
    <div class="tw-container tw-flex tw-flex-col tw-justify-between tw-gap-12 lg:tw-flex-row">
        <div class="tw-flex tw-w-full tw-flex-col tw-justify-center lg:tw-w-6/12">
            <h1>Our Story</h1>
            <p>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum.In the
                first place we have granted to God, and by this our present charter confirmed for us
                and our heirs forever that the English Church shall be free, and shall have her
                rights entire, and her liberties inviolate; and we will that it be thus observed;
                which is apparent from
            </p>
        </div>
        <div class="tw-w-full lg:tw-w-6/12">
            <Placeholder>About Us</Placeholder>
        </div>
    </div>
</div>
<Instagram />
