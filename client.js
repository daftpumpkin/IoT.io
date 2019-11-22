$("ready", () => {
	$("#on").click(() => {
		fetch('http://cloud.arest.io/dp47/door?params=1').then(response => response.text())
			.then(data => {
				console.log(data);
			})
			.catch(e => console.log("Oops, error", e))
	})
	$("#off").click(() => {
		fetch('http://cloud.arest.io/dp47/door?params=0').then(response => response.text())
			.then(data => {
				console.log(data);
			})
			.catch(e => console.log("Oops, error", e))
	})
	setInterval(() => {
	fetch('http://cloud.arest.io/dp47/temperature').then(response => response.text())
		.then(data => {
			let obj = JSON.parse(data); //解析成JSON格式
			let esp_temperature_data=obj.temperature;
			console.log(esp_temperature_data);
			$("#temperature").html(esp_temperature_data.toFixed(2)+'℃');
		})
		.catch(e => console.log("Oops, error", e))
	fetch('http://cloud.arest.io/dp47/humidity').then(response => response.text())
		.then(data => {
			let obj = JSON.parse(data); //解析成JSON格式
			let esp_humidity_data=obj.humidity;
			console.log(esp_humidity_data);
			$("#humidity").html(esp_humidity_data.toFixed(2)+'%');
		})
		.catch(e => console.log("Oops, error", e))
}, 2000)
});
