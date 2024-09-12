import { persisted } from 'svelte-persisted-store';

export const activeButton = persisted<string | null>('lastActiveButton', null);
export const activeButtonIndex = persisted<number>("activeButtonIndex", 0);