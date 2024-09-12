<script lang="ts">
	import '../app.css';
	import MainLogo from '../components/MainLogo.svelte';
	import SidenavItem from '../components/SidenavItem.svelte';
  	import Slider from '../components/Slider.svelte';
  	import { activeButtonIndex } from '../store';

	let activeIndex: number;
	$: activeIndex = $activeButtonIndex;
</script>

<div class="app">
	<div class="sidebar">
		<div class="img">
			<MainLogo />
		</div>
		<ul class="sidenav-list">
			<Slider {activeIndex}></Slider>

			<SidenavItem className="home" text="home" href="/portfolio"></SidenavItem>
			<SidenavItem className="about" text="about" href="/portfolio/about"></SidenavItem>
			<SidenavItem className="projects" text="projects" href="/portfolio/projects"></SidenavItem>
		</ul>
		{#if activeIndex < 2}
			<button on:click={() => activeIndex++}>+</button>
		{/if}
		{#if activeIndex > 0}
			<button on:click={() => activeIndex--}>-</button>
		{/if}
		<button on:click={() => activeIndex = 0}>0</button>
		<button on:click={() => activeIndex = 2}>2</button>
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
		text-align: right;
	}

	.img {
		width: 100%;
		height: 80px;
	}

	.sidenav-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		list-style-type: none;
		position: sticky;
		top: 200px;
	}

	.content {
		min-width: 640px;
		max-width: 640px;
	}
</style>
