import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".svelte-1f8oqyo.svelte-1f8oqyo,.svelte-1f8oqyo.svelte-1f8oqyo::before,.svelte-1f8oqyo.svelte-1f8oqyo::after{box-sizing:border-box;margin:0;padding:0;font-weight:400;color:#f3f6f9}main.svelte-1f8oqyo.svelte-1f8oqyo{display:flex;min-width:800px;max-height:1800px;margin:5% 0 0 0;justify-content:center}aside.svelte-1f8oqyo.svelte-1f8oqyo{max-width:237px;width:150px;height:622px;padding:10px;border-radius:20px;text-align:left;position:sticky;top:30px}article.svelte-1f8oqyo.svelte-1f8oqyo{height:400px;width:800px;padding:20px;margin-left:25px;border-radius:20px;background-color:rgb(22, 22, 22);text-align:center;position:relative}.sidenav-list.svelte-1f8oqyo.svelte-1f8oqyo{display:flex;flex-direction:column;gap:20px;padding:20px;justify-content:space-around;list-style-type:none}.sidenav-item.svelte-1f8oqyo a.svelte-1f8oqyo{background-color:transparent;color:#7a7c85;font-weight:700;font-size:15px;padding:10px 12px}.sidenav-item.svelte-1f8oqyo a.svelte-1f8oqyo:hover{color:#fff}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\t// import avatar from '$lib/images/avatar.jpg';\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>Home</title>\\n\\t<meta name=\\"description\\" content=\\"Svelte demo app\\" />\\n</svelte:head>\\n\\n<main>\\n\\t<aside class=\\"sidebar\\">\\n\\t\\t<nav class=\\"sidenav\\">\\n\\t\\t\\t<ul class=\\"sidenav-list\\">\\n\\t\\t\\t\\t<li class=\\"sidenav-item\\">\\n\\t\\t\\t\\t\\t<a class=\\"sidenav-link active\\">About</a>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t<li class=\\"sidenav-item\\">\\n\\t\\t\\t\\t\\t<a class=\\"sidenav-link\\">Projects</a>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t<li class=\\"sidenav-item\\">\\n\\t\\t\\t\\t\\t<a class=\\"sidenav-link\\">Contact</a>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t</ul>\\n\\t\\t</nav>\\n\\t</aside>\\n\\t<article class=\\"article\\">\\n\\t\\t<h1 class=\\"title\\">Oliver Szvetnyik</h1>\\n\\t</article>\\n</main>\\n\\n<style>\\n\\t*, *::before, *::after {\\n\\t\\tbox-sizing: border-box;\\n        margin: 0;\\n        padding: 0;\\n        /* font-family: 'Poppins', sans-serif; */\\n        font-weight: 400;\\n\\t\\tcolor: #f3f6f9;\\n\\t}\\n\\n\\tmain {\\n        display: flex;\\n\\t\\tmin-width: 800px;\\n\\t\\tmax-height: 1800px;\\n\\t\\t/* gap: 25px; */\\n\\t\\tmargin: 5% 0 0 0;\\n\\t\\tjustify-content: center;\\n\\t\\t/* position: relative; */\\n\\t}\\n\\n\\taside {\\n\\t\\tmax-width: 237px;\\n\\t\\twidth: 150px;\\n\\t\\theight: 622px;\\n\\t\\t/* margin: 0 19px; */\\n        padding: 10px;\\n\\t\\tborder-radius: 20px;\\n        /* background-color: rgb(22, 22, 22); */\\n        text-align: left;\\n\\t\\tposition: sticky;\\n\\t\\ttop: 30px;\\n\\t}\\n\\n\\tarticle {\\n\\t\\t/* flex: 1; */\\n\\t\\theight: 400px;\\n\\t\\twidth: 800px;\\n\\t\\tpadding: 20px;\\n\\t\\tmargin-left: 25px;\\n\\t\\tborder-radius: 20px;\\n        background-color: rgb(22, 22, 22);\\n        text-align: center;\\n\\t\\tposition: relative;\\n    }\\n\\n\\t.sidenav-list {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: 20px;\\n\\t\\tpadding: 20px;\\n\\t\\tjustify-content: space-around;\\n\\t\\tlist-style-type: none;\\n\\t}\\n\\n\\t.sidenav-item a {\\n\\t\\tbackground-color: transparent;\\n\\t\\tcolor: #7a7c85;\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 15px;\\n\\t\\tpadding: 10px 12px;\\n\\t}\\n\\n\\t.sidenav-item a:hover {\\n\\t\\tcolor: #fff;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+BC,8BAAC,CAAE,8BAAC,QAAQ,CAAE,8BAAC,OAAQ,CACtB,UAAU,CAAE,UAAU,CAChB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CAEV,WAAW,CAAE,GAAG,CACtB,KAAK,CAAE,OACR,CAEA,kCAAK,CACE,OAAO,CAAE,IAAI,CACnB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MAAM,CAElB,MAAM,CAAE,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAChB,eAAe,CAAE,MAElB,CAEA,mCAAM,CACL,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CAEP,OAAO,CAAE,IAAI,CACnB,aAAa,CAAE,IAAI,CAEb,UAAU,CAAE,IAAI,CACtB,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,IACN,CAEA,qCAAQ,CAEP,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,IAAI,CACb,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,UAAU,CAAE,MAAM,CACxB,QAAQ,CAAE,QACR,CAEH,2CAAc,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,eAAe,CAAE,IAClB,CAEA,4BAAa,CAAC,gBAAE,CACf,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,IACf,CAEA,4BAAa,CAAC,gBAAC,MAAO,CACrB,KAAK,CAAE,IACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app" class="svelte-1f8oqyo"><!-- HEAD_svelte-t32ptj_END -->`, ""} <main class="svelte-1f8oqyo" data-svelte-h="svelte-1k74a22"><aside class="sidebar svelte-1f8oqyo"><nav class="sidenav svelte-1f8oqyo"><ul class="sidenav-list svelte-1f8oqyo"><li class="sidenav-item svelte-1f8oqyo"><a class="sidenav-link active svelte-1f8oqyo">About</a></li> <li class="sidenav-item svelte-1f8oqyo"><a class="sidenav-link svelte-1f8oqyo">Projects</a></li> <li class="sidenav-item svelte-1f8oqyo"><a class="sidenav-link svelte-1f8oqyo">Contact</a></li></ul></nav></aside> <article class="article svelte-1f8oqyo"><h1 class="title svelte-1f8oqyo">Oliver Szvetnyik</h1></article> </main>`;
});
export {
  Page as default
};
