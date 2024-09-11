<script lang="ts">
  import { activeButton } from "../store";
  import { onDestroy } from 'svelte';

  export let id: string;
  export let text: string;
  export let href: string;
  let isActive: boolean = false;

  const unsubscribe = activeButton.subscribe(value => {
    isActive = value === id;
  });

  function toggleActive() {
    activeButton.set(id);
  }

  onDestroy(() => {
    unsubscribe();
  });
</script>

<li class="sidenav-item">
  <a class="sidenav-link" class:active = {isActive} on:click={toggleActive} href={href} rel="prefetch">{text}</a>
</li>


<style>
  .sidenav-item a {
		background-color: transparent;
		color: #7a7c85;
		font-weight: 400;
		font-size: 17px;
		padding: 10px 12px;
	}

	.sidenav-item a:hover, .sidenav-link.active {
    color: #fff;
	}

  .sidenav-link.active {
    background-color: #202327;
    border-radius: 5px;
    transition: color 0.3s ease;
    box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, .1);
  }
</style>
