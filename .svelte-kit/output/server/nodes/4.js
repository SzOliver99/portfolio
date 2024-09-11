

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BElndBuk.js","_app/immutable/chunks/scheduler.D0-KXVTE.js","_app/immutable/chunks/index.DILkLGnt.js"];
export const stylesheets = ["_app/immutable/assets/4.C_1Kso7W.css"];
export const fonts = [];
