<script>
    console.log('PAGE', 'Blog Page');

    import PageTitle from '$lib/components/contents/title.svelte';

    import BlogList from '$lib/components/containers/blog.svelte';
</script>

<div class="cm-section">
    <PageTitle />
    <BlogList />
</div>
