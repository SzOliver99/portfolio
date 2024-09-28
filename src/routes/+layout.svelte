<script>
	import '../app.css';
	import MainLogo from '../components/MainLogo.svelte';
	import SidenavItem from '../components/SidenavItem.svelte';
  	// import Slider from '../components/Slider.svelte';
  	import { activeButtonIndex } from '../store';

	let activeIndex;
	$: activeIndex = $activeButtonIndex;
</script>

<div class="flex flex-grow mt-[130px] gap-5 justify-center">
	<div class="w-[150px] p-[10px] text-right">
		<div class="w-full h-[80px]">
			<MainLogo />
		</div>
		<ul class="flex flex-col gap-5 list-none">
			<!-- <Slider {activeIndex}></Slider> -->

			<SidenavItem className="home" text="home" href="/portfolio"></SidenavItem>
			<SidenavItem className="about" text="about" href="/portfolio/about"></SidenavItem>
			<SidenavItem className="projects" text="projects" href="/portfolio/projects"></SidenavItem>
		</ul>
		<!-- {#if activeIndex < 2}
			<button on:click={() => activeIndex++}>+</button>
		{/if}
		{#if activeIndex > 0}
			<button on:click={() => activeIndex--}>-</button>
		{/if}
		<button on:click={() => activeIndex = 0}>0</button>
		<button on:click={() => activeIndex = 2}>2</button> -->
	</div>
	<section class="min-w-[640px] max-w-[640px]">
		<slot />
	</section>
</div>

<style>
</style>
