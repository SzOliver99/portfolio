export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.C_zlY9lr.js","app":"_app/immutable/entry/app.B7SzXd1D.js","imports":["_app/immutable/entry/start.C_zlY9lr.js","_app/immutable/chunks/entry.DHzlLbpv.js","_app/immutable/chunks/scheduler.D0-KXVTE.js","_app/immutable/chunks/index.BIHKRLAX.js","_app/immutable/entry/app.B7SzXd1D.js","_app/immutable/chunks/scheduler.D0-KXVTE.js","_app/immutable/chunks/index.DILkLGnt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
