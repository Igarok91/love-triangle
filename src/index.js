/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
	for (i = 0; i < preferences.length; i++) {
		var x = preferences[i];
		var y = preferences[x - 1];
		var z = preferences[y - 1];
		if (z == i + 1 && x != y) {
			count ++;
		}
	}
	return Math.floor(count / 3);
};
