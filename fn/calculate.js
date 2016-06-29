
function calculate (dataJson) {
	var json = dataJson;

	var danzhi = 0;
	var duoxue = 0;
	var nianzhi = 0;
	var yiyu = 0;
	for (q in json) {
		if (/2|6|9|14|17|21|27|31|36|38|42|48|50|54|58/.test(q.substring(1))) {
			danzhi += parseInt(json[q]);
		} else if (/4|8|11|16|19|23|25|29|34|40|44|46|52|56|60/.test(q.substring(1))) {
			duoxue += parseInt(json[q]);
		} else if (/1|7|10|13|18|22|26|30|33|39|43|45|49|55|57/.test(q.substring(1))) {
			nianzhi += parseInt(json[q]);
		} else {
			yiyu += parseInt(json[q]);
		}
	}
	return {
		danzhi: danzhi,
		duoxue: duoxue,
		nianzhi: nianzhi,
		yiyu: yiyu
	}
}




module.exports = calculate;