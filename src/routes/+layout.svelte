<script>
    import '../app.css';

    import ThemeHeader from '$lib/theme/header.svelte';
    import ThemeFooter from '$lib/theme/footer.svelte';
    import ThemeCopyright from '$lib/theme/Copyright.svelte';

    import { onMount } from 'svelte';

    onMount(async () => {
        var d = document.documentElement,
            t = document.querySelector('#theme-btn'),
            m = localStorage.getItem('site-theme');

        if (m == 'dark') {
            d.classList.add('tw-dark');
        }

        t.addEventListener('click', function () {
            if (d.classList.contains('tw-dark')) {
                d.classList.remove('tw-dark');
                localStorage.removeItem('site-theme');
            } else {
                d.classList.add('tw-dark');
                localStorage.setItem('site-theme', 'dark');
            }
        });
    });
</script>

<div class="tw-flex tw-h-screen tw-flex-col">
    <div class="tw-grow-0">
        <ThemeHeader />
    </div>
    <div class="tw-grow">
        <slot />
    </div>
    <div class="tw-grow-0">
        <ThemeFooter />
        <ThemeCopyright />
        <button class="cm-button-primary cm-focus" id="theme-btn">Swap Theme</button>
    </div>
</div>
