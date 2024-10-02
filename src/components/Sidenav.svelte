<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const buttons = [
		{ name: 'home', path: '/portfolio/' },
		{ name: 'about', path: '/portfolio/about' },
		{ name: 'projects', path: '/portfolio/projects' }
	];

	let activePath = derived(page, ($page) => $page.url.pathname);

	const isActive = (buttonPath, currentPath) => {
		return buttonPath === currentPath;
	};
</script>

<ul class="flex flex-col gap-5 list-none">
	{#each buttons as button}
		<li id="sidenav-item" class="mb-0">
			<a
				class="sidenav-link {isActive(button.path, $activePath) ? 'active' : ''}"
				href={button.path}
				rel="prefetch"
			>
				{button.name}
			</a>
		</li>
	{/each}
</ul>

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
