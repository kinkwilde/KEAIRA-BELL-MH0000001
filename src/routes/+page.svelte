<script>
    console.log('PAGE', 'Home Page');

    import PageHero from '$lib/components/contents/hero.svelte';
</script>

<div class="tw-aspect-[16/6]">
    <PageHero linkOneLink="/about" linkTwoLink="/blog" />
</div>
<div class="cm-section">
    <p>Page Content</p>
</div>
