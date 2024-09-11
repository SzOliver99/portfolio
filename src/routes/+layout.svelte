<script lang="ts">
	import '../app.css';
	import SidenavItem from '../components/SidenavItem.svelte';
	import rust_logo from '../lib/images/rust-logo.png';
</script>

<div class="app">
	<div class="sidebar">
		<ul class="sidenav-list">
			<picture>
				<source srcset={rust_logo} type="image/png" />
                <img src={rust_logo} alt="Logo" />
			</picture>
			<SidenavItem id="homeButton" text="home" href="/portfolio"></SidenavItem>
			<SidenavItem id="aboutButton" text="about" href="/portfolio/about"></SidenavItem>
			<SidenavItem id="projectsButton" text="projects" href="/portfolio/projects"></SidenavItem>
		</ul>
	</div>
	<section class="content">
		<slot />
	</section>
</div>

<style>
	.app {
		flex-grow: 1;
		display: flex;
		gap: 20px;
		justify-content: center;
		margin: 130px auto auto;
	}

	.sidebar {
		width: 150px;
		padding: 10px;
	}

	picture img {
	}

	.sidenav-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		list-style-type: none;
		text-align: right;
	}

	.content {
		min-width: 640px;
		max-width: 640px;
	}
</style>
