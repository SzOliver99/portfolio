import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "table.svelte-16fm2m8{width:100%;text-align:left}td.svelte-16fm2m8{padding-bottom:5px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Projects | Oliver Szvetnyik</title>\\r\\n\\t<meta name=\\"description\\" content=\\"Svelte demo app\\" />\\r\\n</svelte:head>\\r\\n\\r\\n<main>\\r\\n    <h1>Projects</h1>\\r\\n    <table>\\r\\n        <tbody>\\r\\n            <tr>\\r\\n                <td>First Project</td>\\r\\n                <td><a href=\\"https://google.com\\">Link to</a></td>\\r\\n                <td>2024.09.11</td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <td>First Project</td>\\r\\n                <td><a href=\\"https://google.com\\">Link to</a></td>\\r\\n                <td>2024.09.11</td>\\r\\n            </tr>\\r\\n        </tbody>\\r\\n    </table>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n    table {\\r\\n        width: 100%;\\r\\n        text-align: left;\\r\\n    }\\r\\n\\r\\n    td {\\r\\n        padding-bottom: 5px;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AA4BI,oBAAM,CACF,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAChB,CAEA,iBAAG,CACC,cAAc,CAAE,GACpB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-8zsxhs_START -->${$$result.title = `<title>Projects | Oliver Szvetnyik</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-8zsxhs_END -->`, ""} <main data-svelte-h="svelte-bvtr5n"><h1>Projects</h1> <table class="svelte-16fm2m8"><tbody><tr><td class="svelte-16fm2m8">First Project</td> <td class="svelte-16fm2m8"><a href="https://google.com">Link to</a></td> <td class="svelte-16fm2m8">2024.09.11</td></tr> <tr><td class="svelte-16fm2m8">First Project</td> <td class="svelte-16fm2m8"><a href="https://google.com">Link to</a></td> <td class="svelte-16fm2m8">2024.09.11</td></tr></tbody></table> </main>`;
});
export {
  Page as default
};
