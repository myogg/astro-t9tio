interface Env {
	ASSETS: Fetcher;
	TTS_API_URL?: string;
	TTS_API_TOKEN?: string;
}

// 站点是纯静态的，token 不能跟着页面发到浏览器，所以朗读走这个同源代理。
// 上游地址与 token 放在 Cloudflare Worker 的环境变量里（TTS_API_URL / TTS_API_TOKEN）。
const DEFAULT_TTS_API = 'https://tts.134688.xyz';

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/api/tts') {
			return handleTts(request, env);
		}

		// 其余请求交给静态资源（Astro 构建产物 dist/）。
		return env.ASSETS.fetch(request);
	},
};

async function handleTts(request: Request, env: Env): Promise<Response> {
	const url = new URL(request.url);

	const text = url.searchParams.get('text');
	const voiceName = url.searchParams.get('voiceName') || 'zh-CN-XiaoxiaoNeural';

	if (!text) {
		return new Response('Missing text parameter', { status: 400 });
	}

	const api = (env.TTS_API_URL || DEFAULT_TTS_API).replace(/\/+$/, '');
	const params = new URLSearchParams({ text, voiceName });

	if (env.TTS_API_TOKEN) {
		params.set('token', env.TTS_API_TOKEN);
	}

	const res = await fetch(`${api}/api/synthesis?${params}`);

	if (!res.ok) {
		return new Response('TTS synthesis failed', { status: res.status });
	}

	return new Response(res.body, {
		headers: {
			'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
}
