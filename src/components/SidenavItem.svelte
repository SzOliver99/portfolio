<script lang="ts">
	import { lastActiveButton, lastActiveButtonIndex } from '../store';
	import { onDestroy } from 'svelte';

	export let className: string;
	export let text: string;
	export let href: string;

	let isActive: boolean = false;
	let list = ['home', 'about', 'projects'];
	export function getLastActiveButtonIndex(): number {
		return list.indexOf($lastActiveButton);
	}

	const unsubscribe = lastActiveButton.subscribe((value) => {
		isActive = value === className;
	});

	function toggleActive(): void {
		lastActiveButton.set(className);
		lastActiveButtonIndex.set(getLastActiveButtonIndex());
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<li id="sidenav-item" class="mb-0">
	{#if isActive}
		<a class="sidenav-link" class:active={isActive} on:click={toggleActive} {href} rel="prefetch"
			>{text}</a
		>
	{:else}
		<a class="sidenav-link" class:active={isActive} on:click={toggleActive} {href} rel="prefetch"
			>{text}</a
		>
	{/if}
</li>

<style>
	a {
		@apply bg-transparent text-gray-200 font-normal;
		font-size: 17px;
		padding: 10px 12px;
	}

	a:hover,
	.sidenav-link.active {
		@apply text-[#fdbf35];
	}

	.sidenav-link.active {
		@apply bg-[#202327] rounded;
		/* transition: all 0.3s ease; */
		box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, 0.1);
	}
</style>
