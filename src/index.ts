const root_html = `<head> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></head><style>body{background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);background-size: 400% 400%;animation: gradient 15s ease infinite;height: 100vh;}.boujee-text{--bg-size: 200%; --color-one: #23d5ab; --color-two: #e73c7e; --color-three: #23a6d5; background: linear-gradient( 45deg, var(--color-one), var(--color-two), var(--color-three), var(--color-one) ) 0 0 / var(--bg-size) 100%; color: transparent; background-clip: text; -webkit-background-clip: text; animation: move-bg 15s infinite linear;}
@keyframes gradient{0%{background-position: 0% 50%;}50%{background-position: 100% 50%;}100%{background-position: 0% 50%;}}@keyframes move-bg{to{background-position: var(--bg-size) 0;}}</style><style>*{margin: 0; padding: 0; font-family: sans-serif;}.container{margin-top: 10vh; text-align: center; min-height: 600px; width: 100%;}form{position: absolute; top: 50%; left:50%; transform: translate(-50%,-50%);}.txtbox{height: 40px; width: 300px; margin-bottom: 15px; border: none; outline: none; resize: none; padding: 0 20px 0 20px; border-radius: 5px; transition: .5s;}.txtbox:focus,.txtbox:hover{background-color: black; color: white; box-shadow: 0 0 10px black;}.btn{height: 50px; width: 120px; color: white; background-color: black; font-size: 16px; margin:0 10px; border: none; outline: none; border-radius: 5px; transition: .5s;}.btn:hover{background-color: white; color: black; transition: .5s;}#submitbtn:hover{box-shadow: 3px 3px 8px black;}</style>
<body> <div class="d-flex flex-column justify-content-center w-100 h-100"> <div class="d-flex flex-column justify-content-center align-items-center"> <div class="container"> <h1 class="fw-dark text-white m-0">Shorten your URLs with fine-grained CONTROL</h1> <h4 class="fw-light text-white m-0">The resultant URL will look like: <span style="background-color: black;border-radius:0.8vh;padding: 0px 4px;"> <span class="boujee-text">minify.dorlexa.dev/&lt;alias&gt;</span> </span> </h4> <form class="form" id="form" name="form" action="/" method="POST"> <input type="text" name="alias" placeholder="ALIAS" class="txtbox"> <br><input placeholder="URL" name="url" rows="5" cols="21" class="txtbox" id="txtboxURL"></input> <br><input type="submit" class="btn" id="submitbtn"> </form> </div></div></div></div></body>`;

const err1_p1 = `<head> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></head><style>body{background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);background-size: 400% 400%;animation: gradient 15s ease infinite;height: 100vh;}.boujee-text{--bg-size: 200%; --color-one: #23d5ab; --color-two: #e73c7e; --color-three: #23a6d5; background: linear-gradient( 45deg, var(--color-one), var(--color-two), var(--color-three), var(--color-one) ) 0 0 / var(--bg-size) 100%; color: transparent; background-clip: text; -webkit-background-clip: text; animation: move-bg 15s infinite linear;}@keyframes gradient{0%{background-position: 0% 50%;}50%{background-position: 100% 50%;}100%{background-position: 0% 50%;}}
@keyframes move-bg{to{background-position: var(--bg-size) 0;}}</style><style>*{margin: 0; padding: 0; font-family: sans-serif;}.container{margin-top: 10vh; text-align: center; min-height: 600px; width: 100%;}form{position: absolute; top: 50%; left:50%; transform: translate(-50%,-50%);}.error{color: crimson; font-size: 14px; font-weight: 600; text-align: center;}.txtbox{height: 40px; width: 300px; margin-bottom: 8px; border: none; outline: none; resize: none; padding: 0 20px 0 20px; border-radius: 5px; transition: .5s;}.txtboxURL{height: 40px; width: 300px; margin-bottom: 15px; border: none; outline: none; resize: none; padding: 0 20px 0 20px; border-radius: 5px; transition: .5s;}.txtbox:focus,.txtbox:hover{background-color: black; color: white; box-shadow: 0 0 10px black;}.btn{height: 50px; width: 120px; color: white; background-color: black; font-size: 16px; margin:0 10px; border: none; outline: none; border-radius: 5px; transition: .5s;}.btn:hover{background-color: white; color: black; transition: .5s;}#submitbtn:hover{box-shadow: 3px 3px 8px black;}</style>
<body> <div class="d-flex flex-column justify-content-center w-100 h-100"> <div class="d-flex flex-column justify-content-center align-items-center"> <div class="container"> <h1 class="fw-dark text-white m-0">Shorten your URLs with fine-grained CONTROL</h1> <h4 class="fw-light text-white m-0">The resultant URL will look like: <span style="background-color: black;border-radius:0.8vh;padding: 0px 4px;"> <span class="boujee-text">minify.dorlexa.dev/&lt;alias&gt;</span> </span> </h4> <form class="form" id="form" name="form" action="/" method="POST"> <input type="text" name="alias" placeholder="ALIAS" class="txtbox"> <div class="error" id="errName">Alias already exists! Try another.</div><br><input value="`;
const err1_p2 = `" name="url" rows="5" cols="21" class="txtboxURL"></input> <br><input type="submit" class="btn" id="submitbtn"> </form> </div></div></div></div></body>`;

const succ_p1 = `<head> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></head><style>body{background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);background-size: 400% 400%;animation: gradient 15s ease infinite;height: 100vh;}.boujee-text{--bg-size: 200%; --color-one: #23d5ab; --color-two: #e73c7e; --color-three: #23a6d5; background: linear-gradient( 45deg, var(--color-one), var(--color-two), var(--color-three), var(--color-one) ) 0 0 / var(--bg-size) 100%; color: transparent; background-clip: text; -webkit-background-clip: text; animation: move-bg 15s infinite linear;}
@keyframes gradient{0%{background-position: 0% 50%;}50%{background-position: 100% 50%;}100%{background-position: 0% 50%;}}@keyframes move-bg{to{background-position: var(--bg-size) 0;}}</style><style>*{margin: 0; padding: 0; font-family: sans-serif;}a:link{text-decoration: none;}a:hover{color: #23d5ab; background-color: transparent; text-decoration: underline;}.container{margin-top: 40vh; text-align: center; min-height: 600px; width: 100%;}form{position: absolute; top: 50%; left:50%; transform: translate(-50%,-50%);}.txtbox{height: 40px; width: 300px; margin-bottom: 15px; border: none; outline: none; resize: none; padding: 0 20px 0 20px; border-radius: 5px; transition: .5s;}.txtbox:focus,.txtbox:hover{background-color: black; color: white; box-shadow: 0 0 10px black;}.btn{height: 50px; width: 120px; color: white; background-color: black; font-size: 16px; margin:0 10px; border: none; outline: none; border-radius: 5px; transition: .5s;}.btn:hover{background-color: white; color: black; transition: .5s;}#submitbtn:hover{box-shadow: 3px 3px 8px black;}</style>
<body> <div class="d-flex flex-column justify-content-center w-100 h-100"> <div class="d-flex flex-column justify-content-center align-items-center"> <div class="container"> <h1 class="fw-dark text-white m-0">URL Shortened!</h1> <h4 class="fw-light text-white m-0">Your resource can now be found at: <a style="background-color: black;border-radius:0.8vh;padding: 0px 4px;" href="/`;
const succ_p2 = `"> <span class="boujee-text">minify.dorlexa.dev/`
const succ_p3 = `</span> </a> </h4> </div></div></div></div></body>`;

export interface Env {
	MAPPINGS: KVNamespace;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		_ctx: ExecutionContext
	): Promise<Response> {
		if(request.method === "POST")
		{
			var formData: FormData = await request.formData();
			var alias = formData.get("alias");
			var url = formData.get("url");
			if(!alias || !url)
			{
				return new Response("Bad Request", {status: 400});
			}
			if(alias && await env.MAPPINGS.get(alias))
			{
				return new Response(err1_p1+url+err1_p2, {
					status: 401,
					headers: {
						'content-type': 'text/html;charset=UTF-8'
					}
				});
			}
			await env.MAPPINGS.put(alias, url);
			return new Response(succ_p1+alias+succ_p2+alias+succ_p3, {
				headers: {
					'content-type': 'text/html;charset=UTF-8'
				}
			});
		}

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
			else
			{
				return new Response(root_html, {
					headers: {
						'content-type': 'text/html;charset=UTF-8'
					}
				});
			}
		} catch (error) {
			console.log(error);
		}
		return errorResponse;
	}
};
