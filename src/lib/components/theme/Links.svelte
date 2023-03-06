<script>
    console.log('COMPONENT', 'links.svelte');

    import ThemeColor from '$lib/components/theme/color.svelte';
</script>

<div class="tw-bg-grey dark:tw-bg-gray">
    <div class="tw-container tw-grid tw-grid-cols-2 tw-items-center tw-gap-4 tw-py-2">
        <div class="tw-flex tw-justify-start">
            <nav>
                <ul
                    class="-tw-mx-4 tw-mb-0 tw-inline-flex tw-list-none tw-items-center tw-divide-x tw-divide-white tw-pl-0"
                >
                    <li>
                        <a href="/" class="cm-header-text-links tw-px-4 tw-text-sm">Help Centre</a>
                    </li>
                    <li>
                        <a href="/" class="cm-header-text-links tw-px-4 tw-text-sm">Order Status</a>
                    </li>
                    <li>
                        <a href="/" class="cm-header-text-links tw-px-4 tw-text-sm">
                            Company Information
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="tw-col-start-2 tw-flex tw-justify-end tw-space-x-4">
            <nav>
                <ul
                    class="-tw-mx-4 tw-mb-0 tw-inline-flex tw-list-none tw-items-center tw-divide-x tw-divide-white tw-pl-0"
                >
                    <li>
                        <a href="/" class="cm-header-text-links tw-px-4 tw-text-sm">
                            <ThemeColor />
                        </a>
                    </li>
                    <li>
                        <a href="/" class="cm-header-text-links tw-px-4 tw-text-sm">
                            <button class="tw-uppercase">Account / Sign In</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
