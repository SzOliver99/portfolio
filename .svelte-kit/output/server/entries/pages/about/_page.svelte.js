import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-5hd8lx_START -->${$$result.title = `<title>About | Oliver Szvetnyik</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-5hd8lx_END -->`, ""} <main data-svelte-h="svelte-dw81c2"><h1>About me</h1> <p>I&#39;m Oliver Szvetnyik and 19 years old. I&#39;m learning to be a Software Engineer.</p> <p>My goal to learn Rust to be my main language</p> </main>`;
});
export {
  Page as default
};
