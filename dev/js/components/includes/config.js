let apiUrl = 'https://api.themoviedb.org/3';

export function buildUrl(endpoint, params) {
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

			default:
				params[param] = params[param].toString();
		}
		params[param] = encodeURIComponent(param);
		queryArray.push(`${param}=${params[param]}`);
	}
	return apiUrl+endpoint+'?'+queryArray.join('&');
}
