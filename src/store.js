import { persisted } from 'svelte-persisted-store';

export const lastActiveButton = persisted('lastActiveButton', null);
export const lastActiveButtonIndex = persisted('activeButtonIndex', 0);
