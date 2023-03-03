<script>
    console.log('COMPONENT', 'logo.svelte');

    import { page } from '$app/stores';

    import Text from '$lib/components/theme/name.svelte';

    export let logoH1 = false;
    export let textSize = '!tw-text-6xl';
    export let textColor = 'tw-text-black';
    export let textColorDark = 'dark:tw-text-white';
</script>

{#if $page.url.pathname === '/' && logoH1 === true}
    <h1 class="tw-mb-0" aria-label="Wildepoint logo">
        <Text {textSize} {textColor} {textColorDark} />
    </h1>
{:else if $page.url.pathname === '/' && logoH1 === false}
    <div aria-label="Wildepoint logo">
        <Text {textSize} {textColor} {textColorDark} />
    </div>
{:else}
    <a
        class="cm-focus tw-no-underline hover:tw-no-underline"
        href="/"
        aria-label="Wildepoint logo linking back to homepage"
    >
        <Text {textSize} {textColor} {textColorDark} />
    </a>
{/if}
