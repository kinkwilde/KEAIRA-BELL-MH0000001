<script>
    console.log('COMPONENT', 'name.svelte');

    export let textSize = '!tw-text-6xl';
    export let textColor = 'tw-text-black';
    export let textColorDark = 'dark:tw-text-white';
</script>

<span class="{textSize} {textColor} {textColorDark} tw-inline-flex tw-leading-tight">
    <span class="tw-block tw-font-bold">wilde</span>
    <span class="tw-block tw-font-semi">.</span>
</span>
