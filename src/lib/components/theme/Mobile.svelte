<script>
    console.log('COMPONENT', 'mobile.svelte');

    import { onMount } from 'svelte';

    import IconMenu from '$lib/icons/menu.svelte';

    let menuHidden = true;

    onMount(async () => {
        const menuButton = document.querySelector('#theme-btn');

        menuHidden = false;

        menuButton.addEventListener('click', function () {
            // Open / Close / Toggle Panel Menu
        });
    });
</script>

<button class="cm-header-icon-links" aria-label="show options">
    <IconMenu />
</button>
