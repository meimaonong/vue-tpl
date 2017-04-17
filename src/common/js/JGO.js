export default function(obj) {
	var tobj = {}
	if (obj.params) {
		tobj = {name: obj.name, params: { paramsObj: JSON.stringify(obj.params)}}
	} else {
		tobj = {name: obj.name }
	}
	
	return tobj
}