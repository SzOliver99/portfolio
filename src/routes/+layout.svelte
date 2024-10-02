<script>
	import '../app.css';
	import MainLogo from '../components/MainLogo.svelte';
	import Sidenav from '../components/Sidenav.svelte';
</script>

<div class="flex flex-grow mt-[130px] gap-5 justify-center">
	<div class="w-[150px] p-[10px] text-right">
		<div class="w-full h-[80px]">
			<MainLogo />
		</div>

		<Sidenav />
	</div>
	<section class="min-w-[640px] max-w-[640px]">
		<slot />
	</section>
</div>

<style>
</style>
