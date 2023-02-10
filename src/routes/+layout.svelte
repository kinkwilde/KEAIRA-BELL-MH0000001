<script>
    import '../app.css';

    import { onMount } from 'svelte';

    onMount(async () => {
        var d = document.documentElement,
            t = document.querySelector('#theme-btn'),
            m = localStorage.getItem('site-theme');

        if (m == 'dark') {
            d.classList.add('theme-dark');
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

<slot />

<button class="" id="theme-btn" type="button">Swap Theme</button>
