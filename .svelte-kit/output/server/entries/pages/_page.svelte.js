import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "h1.svelte-ikh1kv{margin:0;font-size:2em}",
  map: `{"version":3,"file":"Home.svelte","sources":["Home.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<!-- <h1 class=\\"title\\">Oliver Szvetnyik</h1>\\r\\n<p>Portfolio</p> -->\\r\\n<h1>Ray Space</h1>\\r\\n<p>Hi there, I'm Ray. I'm a <b>Software Engineer at Accenture</b> where I work on innovative e-government projects.</p>\\r\\n<p>I use this place to explore new ideas, experiment with different technologies, and to deconstruct complex tech concepts. If you're interested in my thoughts on something, please let me know!</p>\\r\\n\\r\\n<style>\\r\\n    h1 {\\r\\n        margin: 0;\\r\\n        font-size: 2em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAWI,gBAAG,CACC,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,GACf"}`
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return ` <h1 class="svelte-ikh1kv" data-svelte-h="svelte-11olq5c">Ray Space</h1> <p data-svelte-h="svelte-qmahka">Hi there, I&#39;m Ray. I&#39;m a <b>Software Engineer at Accenture</b> where I work on innovative e-government projects.</p> <p data-svelte-h="svelte-7yg1b6">I use this place to explore new ideas, experiment with different technologies, and to deconstruct complex tech concepts. If you&#39;re interested in my thoughts on something, please let me know!</p>`;
});
const css = {
  code: ".svelte-locjhk,.svelte-locjhk::before,.svelte-locjhk::after{box-sizing:border-box;margin:0;padding:0}article.svelte-locjhk{height:400px;width:600px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport HomePage from '../components/Home.svelte';\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Oliver Szvetnyik</title>\\r\\n\\t<meta name=\\"description\\" content=\\"Svelte demo app\\" />\\r\\n</svelte:head>\\r\\n\\r\\n<article class=\\"article\\">\\r\\n\\t<HomePage />\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\t*, *::before, *::after {\\r\\n\\t\\tbox-sizing: border-box;\\r\\n        margin: 0;\\r\\n        padding: 0;\\r\\n\\t}\\r\\n\\r\\n\\tarticle {\\r\\n\\t\\theight: 400px;\\r\\n\\t\\twidth: 600px;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAcC,cAAC,CAAE,cAAC,QAAQ,CAAE,cAAC,OAAQ,CACtB,UAAU,CAAE,UAAU,CAChB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAChB,CAEA,qBAAQ,CACP,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACL"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-o8cu1m_START -->${$$result.title = `<title>Oliver Szvetnyik</title>`, ""}<meta name="description" content="Svelte demo app" class="svelte-locjhk"><!-- HEAD_svelte-o8cu1m_END -->`, ""} <article class="article svelte-locjhk">${validate_component(Home, "HomePage").$$render($$result, {}, {}, {})} </article>`;
});
export {
  Page as default
};
