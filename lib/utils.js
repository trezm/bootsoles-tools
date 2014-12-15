module.exports = {
	toCamelCase: function(inputString) {
		var lowerCase = inputString.toLowerCase();
		var words = lowerCase.split('_');
		for (var i = 0; i < words.length; i++) {
			words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
		}

		return words.join("");
	},

	writeFile: function(fileName, string) {
		if (string && string.length > 0) {
			console.log("Making file: " + fileName);

			fs.writeFile(fileName, string, function(error) {
				if (error) {
					console.error(error);
					return;
				}

				console.log("Created file: " + fileName);
			});
		}
	}

}