
  let map = L.map('map',{
    center: [40.7826, -73.9656],
    zoom: 14
	});

  L.tileLayer('https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=v6ivVQaYw1ya6iP8Cjlu').addTo(map)
 
 
 // Make an AJAX request to get the data
  $.ajax({
    url: "https://data.cityofnewyork.us/resource/vfnx-vebw.json",		
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "LyDA2HbQ0T2itMDodrOu7AmxC"
    }
  }).done(function(response) {
	for(let i = 0; i < 200; i ++){
	var marker = L.marker([response[i].y, response[i].x])
	marker.addTo(map)

		let PopUpDiv = `
		<div>
			<h1> ${response[i].unique_squirrel_id} </h1>
				<p> The squrriel also had: <br>
					${response[i].primary_fur_color} fur
				</p>

				<p> The squrriels habitat: <br>
					${response[i].specific_location} 
				</p>
			<div id="colorExample" style="background-color: ${response[i].primary_fur_color};"></div>
		</div>
		`

	marker.bindPopup(PopUpDiv)
	}
  });






