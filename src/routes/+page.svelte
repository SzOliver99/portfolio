<script lang="ts">
	import HomePage from './Home.svelte';	
	import AboutMe from './AboutMe.svelte';
	import { onMount } from "svelte";
  import Projects from './Projects.svelte';
	
	let currentPage = 'home';

    // Function to set the current page based on the hash
    function updatePageFromHash() {
        const hash = window.location.hash.slice(1); // Remove the '#' from the hash
        currentPage = hash || 'home'; // Default to 'home' if there's no hash
    }

    // Listen for hash changes and update the page
    onMount(() => {
        updatePageFromHash(); // Check the hash when the component mounts
        window.addEventListener('hashchange', updatePageFromHash); // React to hash changes

        return () => {
            window.removeEventListener('hashchange', updatePageFromHash); // Cleanup when component unmounts
        };
    });

    // Manually change the hash when buttons are clicked
    function navigateTo(page: string) {
        window.location.hash = page;
    }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<aside class="sidebar">
		<nav class="sidenav">
			<ul class="sidenav-list">
				<li class="sidenav-item">
					<a class="sidenav-link active" on:click={() => navigateTo('home')}>Home</a>
				</li>
				<li class="sidenav-item">
					<a class="sidenav-link active" on:click={() => navigateTo('about')}>About</a>
				</li>
				<li class="sidenav-item">
					<a class="sidenav-link" on:click={() => navigateTo('projects')}>Projects</a>
				</li>
				<li class="sidenav-item">
					<a class="sidenav-link" on:click={() => navigateTo('contact')}>Contact</a>
				</li>
			</ul>
		</nav>
	</aside>
	<article class="article">
		{#if currentPage === 'home'}
			<HomePage />
		{:else if currentPage === 'about'}
			<AboutMe />
		{:else if currentPage === 'projects'}
			<Projects />
		{/if}
	</article>
</main>

<style>
	*, *::before, *::after {
		box-sizing: border-box;
        margin: 0;
        padding: 0;
	}

	main {
        display: flex;
		min-width: 800px;
		max-height: 1800px;
		/* gap: 25px; */
		margin: 5% 0 0 0;
		justify-content: center;
		/* position: relative; */
	}

	aside {
		max-width: 237px;
		width: 150px;
		height: 622px;
		/* margin: 0 19px; */
        padding: 10px;
		border-radius: 20px;
        /* background-color: rgb(22, 22, 22); */
        text-align: left;
		position: sticky;
		top: 30px;
	}

	article {
		/* flex: 1; */
		height: 400px;
		width: 800px;
		padding: 20px;
		margin-left: 25px;
		border-radius: 20px;
        background-color: rgb(22, 22, 22);
        text-align: center;
		position: relative;
    }

	.sidenav-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px;
		justify-content: space-around;
		list-style-type: none;
	}

	.sidenav-item a {
		background-color: transparent;
		color: #7a7c85;
		font-weight: 700;
		font-size: 15px;
		padding: 10px 12px;
	}

	.sidenav-item a:hover {
		color: #fff;
	}
</style>
