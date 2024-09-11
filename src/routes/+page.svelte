<script>
	import HomePage from '../components/Home.svelte';
</script>

<svelte:head>
	<title>Oliver Szvetnyik</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<article class="article">
	<HomePage />
</article>

<style>
	*, *::before, *::after {
		box-sizing: border-box;
        margin: 0;
        padding: 0;
	}

	article {
		height: 400px;
		width: 600px;
    }
</style>
