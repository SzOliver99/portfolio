<script>
	// import avatar from '$lib/images/avatar.jpg';
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
					<a class="sidenav-link active">About</a>
				</li>
				<li class="sidenav-item">
					<a class="sidenav-link">Projects</a>
				</li>
				<li class="sidenav-item">
					<a class="sidenav-link">Contact</a>
				</li>
			</ul>
		</nav>
	</aside>
	<article class="article">
		<h1 class="title">Oliver Szvetnyik</h1>
	</article>
</main>

<style>
	*, *::before, *::after {
		box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* font-family: 'Poppins', sans-serif; */
        font-weight: 400;
		color: #f3f6f9;
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
