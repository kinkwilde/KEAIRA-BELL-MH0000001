<script>
    console.log('COMPONENT', 'color.svelte');

    import { onMount } from 'svelte';

    import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../../../utils/helpers';

    let colorHidden = true;

    onMount(async () => {
        const colorDocument = document.documentElement;
        const colorButton = document.querySelector('#theme-btn');

        if (getLocalStorage('dark')) {
            colorDocument.classList.add('tw-dark');
        }

        colorHidden = false;

        colorButton.addEventListener('click', function () {
            if (colorDocument.classList.contains('tw-dark')) {
                removeLocalStorage('site-theme');

                colorDocument.classList.remove('tw-dark');
            } else {
                setLocalStorage('site-theme', 'dark');

                colorDocument.classList.add('tw-dark');
            }
        });
    });
</script>

<button class="cm-button-primary" class:tw-hidden={colorHidden} id="theme-btn">Swap Theme</button>
