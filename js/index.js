$(document).ready(start);

			function start () {
				$("#city-select").submit(handleForm);
			}

			function handleForm(e) {
				e.preventDefault();
				var city = $("#city-type").val();
				// alert (city);

				var cityTrim =  $.trim(city);
				//alert (cityTrim);
		
				changeBackground(cityTrim);
			}

			function changeBackground(cityname) {
				// alert (cityname);
				if (cityname == "New York" || cityname == "NYC" || cityname == "New York City") {
					$('body').css('background', 'url(images/nyc.jpg) no-repeat center center fixed');
				}

				else if (cityname == "San Francisco" || cityname == "Bay Area" || cityname == "SF") {
					$('body').css('background', 'url(images/sf.jpg) no-repeat center center fixed');

				}


				else if (cityname == "Los Angeles" || cityname == "LA" || cityname == "LAX") {
					$('body').css('background', 'url(images/la.jpg) no-repeat center center fixed');

				}

				else if (cityname == "Austin" || cityname == "ATX") {
					$('body').css('background', 'url(images/austin.jpg) no-repeat center center fixed');

				}


				else if (cityname == "Sydney" || cityname == 'SYD') {
					$('body').css('background', 'url(images/sydney.jpg) no-repeat center center fixed');

				}

				else {

				}

				


			}