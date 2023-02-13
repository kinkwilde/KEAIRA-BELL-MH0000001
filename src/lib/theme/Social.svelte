<script>
    // console.log('Footer.svelte');

    import IconGithub from '$lib/icons/Github.svelte';
    import IconTwitter from '$lib/icons/Twitter.svelte';
    import IconInstagram from '$lib/icons/Instagram.svelte';
</script>

<nav class="tw-flex tw-items-center tw-space-x-4">
    <a class="cm-focus tw-text-xl tw-text-white" href="/" aria-label="Github">
        <IconGithub />
    </a>
    <a class="cm-focus tw-text-xl tw-text-white" href="/" aria-label="Twitter">
        <IconTwitter />
    </a>
    <a class="cm-focus tw-text-xl tw-text-white" href="/" aria-label="Instagram">
        <IconInstagram />
    </a>
</nav>
