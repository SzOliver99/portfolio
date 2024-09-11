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
		client: {"start":"_app/immutable/entry/start.DP_1LCsX.js","app":"_app/immutable/entry/app.H1Q1LIqe.js","imports":["_app/immutable/entry/start.DP_1LCsX.js","_app/immutable/chunks/entry.DgUSSglb.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.H1Q1LIqe.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Bd7bwfzC.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
