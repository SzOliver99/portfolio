import { persisted } from 'svelte-persisted-store';

export const activeButton = persisted('lastActiveButton', null);
export const activeButtonIndex = persisted('activeButtonIndex', 0);
