let apiUrl = 'https://api.themoviedb.org/3';
// Private variable to store the url the the api


export let locale = {
	language: 'en-GB'
}

/**
 * Construct a url to <endpoint> including the <params>
 *
 * @author Oliver Scase <oscase@juiceweb.xyz>
 *
 * @param string endpoint The endpoint to add to the url.
 * @param object params   The parameters to include in the url
 * @param string apiUrl   [optional] The base url for the api
 *
 * @return string
 *
 */

export function buildUrl(endpoint, params, url = apiUrl) {
	if(typeof params !== 'object') throw 'Expected params to be an object';
	let queryArray = [];
	for (let param in params) {
		if(!params.hasOwnProperty(param)) continue;
		switch (typeof params[param]) {
			case 'object':
				if(!params[param]) {
					params[param] = ''
				} else {
					params[param] = JSON.parse(params[param]);
				}
				break;

			case 'undefined':
				break;
			default:
				params[param] = params[param].toString();
		}
		params[param] = encodeURIComponent(params[param]);
		queryArray.push(`${param}=${params[param]}`);
	}
	return url+endpoint+'?'+queryArray.join('&');
}
