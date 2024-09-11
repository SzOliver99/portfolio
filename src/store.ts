import {writable} from 'svelte/store';

export const activeButton = writable<string | null>("homeButton");