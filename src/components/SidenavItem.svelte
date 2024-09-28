<script lang="ts">
  import { activeButton, activeButtonIndex } from "../store";
  import { onDestroy } from 'svelte';

  export let className: string;
  export let text: string;
  export let href: string;
  let isActive: boolean = false;

  let list = ["home", "about", "projects"]


  const unsubscribe = activeButton.subscribe(value => {
    isActive = value === className;
  });

  function toggleActive() {
    activeButton.set(className);
    activeButtonIndex.set(list.indexOf(className));

  }

  onDestroy(() => {
    unsubscribe();
  });
</script>

<li id="sidenav-item" class="mb-0">
  {#if isActive}
    <a class="sidenav-link" class:active={isActive} on:click={toggleActive} href={href} rel="prefetch">{text}</a>
  {:else}
    <a class="sidenav-link" class:active={isActive} on:click={toggleActive} href={href} rel="prefetch">{text}</a>
  {/if}
</li>


<style>
  a {
    @apply bg-transparent text-[#7a7c85] font-normal;
		font-size: 17px;
		padding: 10px 12px;
	}

	a:hover, .sidenav-link.active {
    @apply text-white
	}

  .sidenav-link.active {
    @apply bg-[#202327] rounded;
    /* transition: all 0.3s ease; */
    box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, .1);
  }
</style>
