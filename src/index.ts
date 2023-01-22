export interface Env {
	MAPPINGS: KVNamespace;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		_ctx: ExecutionContext
	): Promise<Response> {
		var errorResponse = new Response("No Mapping Found! Please head to minify.dorlexa.dev to shorten a URL", {status:404});
		try {
			var shortform: string = request.url.split("/")[3];
			if(shortform)
			{
				var mapping = await env.MAPPINGS.get(shortform);
				if(mapping)
				{
					var response = new Response(null,{status: 301, headers: {
						Location:  mapping
					}});
					return response;
				}
			}
		} catch (error) {
			console.log(error);
		}
		return errorResponse;
	}
};
