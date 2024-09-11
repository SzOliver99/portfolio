import { c as create_ssr_component, o as onDestroy, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const activeButton = writable("homeButton");
const css$1 = {
  code: ".sidenav-item.svelte-rvfe65 a.svelte-rvfe65{background-color:transparent;color:#7a7c85;font-weight:400;font-size:17px;padding:10px 12px}.sidenav-item.svelte-rvfe65 a.svelte-rvfe65:hover,.sidenav-link.active.svelte-rvfe65.svelte-rvfe65{color:#fff}.sidenav-link.active.svelte-rvfe65.svelte-rvfe65{background-color:#202327;border-radius:5px;transition:color 0.3s ease;box-shadow:4px 4px 3px 0 rgba(0, 0, 0, .1)}",
  map: '{"version":3,"file":"SidenavItem.svelte","sources":["SidenavItem.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { activeButton } from \\"../store\\";\\nimport { onDestroy } from \\"svelte\\";\\nexport let id;\\nexport let text;\\nexport let href;\\nlet isActive = false;\\nconst unsubscribe = activeButton.subscribe((value) => {\\n  isActive = value === id;\\n});\\nfunction toggleActive() {\\n  activeButton.set(id);\\n}\\nonDestroy(() => {\\n  unsubscribe();\\n});\\n<\/script>\\r\\n\\r\\n<li class=\\"sidenav-item\\">\\r\\n  <a class=\\"sidenav-link\\" class:active = {isActive} on:click={toggleActive} href={href} rel=\\"prefetch\\">{text}</a>\\r\\n</li>\\r\\n\\r\\n\\r\\n<style>\\r\\n  .sidenav-item a {\\r\\n\\t\\tbackground-color: transparent;\\r\\n\\t\\tcolor: #7a7c85;\\r\\n\\t\\tfont-weight: 400;\\r\\n\\t\\tfont-size: 17px;\\r\\n\\t\\tpadding: 10px 12px;\\r\\n\\t}\\r\\n\\r\\n\\t.sidenav-item a:hover, .sidenav-link.active {\\r\\n    color: #fff;\\r\\n\\t}\\r\\n\\r\\n  .sidenav-link.active {\\r\\n    background-color: #202327;\\r\\n    border-radius: 5px;\\r\\n    transition: color 0.3s ease;\\r\\n    box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, .1);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuBE,2BAAa,CAAC,eAAE,CAChB,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,IACf,CAEA,2BAAa,CAAC,eAAC,MAAM,CAAE,aAAa,mCAAQ,CACzC,KAAK,CAAE,IACV,CAEC,aAAa,mCAAQ,CACnB,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,IAAI,CAC3B,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAC5C"}'
};
const SidenavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { text } = $$props;
  let { href } = $$props;
  let isActive = false;
  const unsubscribe = activeButton.subscribe((value) => {
    isActive = value === id;
  });
  onDestroy(() => {
    unsubscribe();
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  $$result.css.add(css$1);
  return `<li class="sidenav-item svelte-rvfe65"><a class="${["sidenav-link svelte-rvfe65", isActive ? "active" : ""].join(" ").trim()}"${add_attribute("href", href, 0)} rel="prefetch">${escape(text)}</a> </li>`;
});
const css = {
  code: ".app.svelte-1ua9agn{flex-grow:1;display:flex;gap:20px;justify-content:center;margin:130px auto auto}.sidebar.svelte-1ua9agn{width:150px;padding:10px}.sidenav-list.svelte-1ua9agn{display:flex;flex-direction:column;gap:20px;list-style-type:none;text-align:right;padding-top:45px}.content.svelte-1ua9agn{min-width:640px;max-width:640px}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"../app.css\\";\\nimport SidenavItem from \\"../components/SidenavItem.svelte\\";\\n<\/script>\\r\\n\\r\\n<div class=\\"app\\">\\r\\n\\t<div class=\\"sidebar\\">\\r\\n\\t\\t<ul class=\\"sidenav-list\\">\\r\\n\\t\\t\\t<SidenavItem id=\\"homeButton\\" text=\\"home\\" href=\\"/\\"></SidenavItem>\\r\\n\\t\\t\\t<SidenavItem id=\\"aboutButton\\" text=\\"about\\" href=\\"/portfolio/about\\"></SidenavItem>\\r\\n\\t\\t\\t<SidenavItem id=\\"projectsButton\\" text=\\"projects\\" href=\\"/portfolio/projects\\"></SidenavItem>\\r\\n\\t\\t</ul>\\r\\n\\t</div>\\r\\n\\t<section class=\\"content\\">\\r\\n\\t\\t<slot />\\r\\n\\t</section>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.app {\\r\\n\\t\\tflex-grow: 1;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap: 20px;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tmargin: 130px auto auto;\\r\\n\\t}\\r\\n\\r\\n\\t.sidebar {\\r\\n\\t\\twidth: 150px;\\r\\n\\t\\tpadding: 10px;\\r\\n\\t}\\r\\n\\r\\n\\t.sidenav-list {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 20px;\\r\\n\\t\\tlist-style-type: none;\\r\\n\\t\\ttext-align: right;\\r\\n\\t\\tpadding-top: 45px;\\r\\n\\t}\\r\\n\\r\\n\\t.content {\\r\\n\\t\\tmin-width: 640px;\\r\\n\\t\\tmax-width: 640px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkBC,mBAAK,CACJ,SAAS,CAAE,CAAC,CACZ,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,KAAK,CAAC,IAAI,CAAC,IACpB,CAEA,uBAAS,CACR,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IACV,CAEA,4BAAc,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,IACd,CAEA,uBAAS,CACR,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KACZ"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1ua9agn"><div class="sidebar svelte-1ua9agn"><ul class="sidenav-list svelte-1ua9agn">${validate_component(SidenavItem, "SidenavItem").$$render(
    $$result,
    {
      id: "homeButton",
      text: "home",
      href: "/"
    },
    {},
    {}
  )} ${validate_component(SidenavItem, "SidenavItem").$$render(
    $$result,
    {
      id: "aboutButton",
      text: "about",
      href: "/portfolio/about"
    },
    {},
    {}
  )} ${validate_component(SidenavItem, "SidenavItem").$$render(
    $$result,
    {
      id: "projectsButton",
      text: "projects",
      href: "/portfolio/projects"
    },
    {},
    {}
  )}</ul></div> <section class="content svelte-1ua9agn">${slots.default ? slots.default({}) : ``}</section> </div>`;
});
export {
  Layout as default
};
