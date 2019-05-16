//1-first step
window.addEventListener("load", ()=> { // arrow function means after the page is loaded this function happen

	let long;
	let lat;
	//6- let these class
	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	let locationTimezone = document.querySelector('.location-timezone');
	let temperatureSection = document.querySelector('.temperature');
	const temperatureSpan = document.querySelector('.temperature span');
	//2- if the vanigator in the browser exists function
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			//4- use the proxy 
			const proxy = 'https://cors-anywhere.herokuapp.com/';

			const api = `${proxy}https://api.darksky.net/forecast/95dd30c2347c76d5e17e53ce3397f513/${lat},${long}`;
			//3-fetch to get request from this url
			fetch(api)
			.then(response => { // means after get information from this data do something 
				return response.json();
			})
			.then(data => { // after it made in json 

				//5- pull the temputrue from currently
				const {temperature, summary, icon} = data.currently;

				//7- set the DOM elements from API
				temperatureDegree.textContent = temperature;
				temperatureDescription.textContent = summary;
				locationTimezone.textContent = data.timezone;
				//11- forimla for celiuzus
				let celsius = (temperature - 32) * (5 / 9);
				//9- set icons
				setIcons(icon, document.querySelector('.icon'));

				//10- change to selezous when event happens
				temperatureSection.addEventListener('click' , ()=> {

					if(temperatureSpan.textContent === 'f' ) {

						temperatureSpan.textContent = 'c';

						temperatureDegree.textContent = Math.floor(celsius);

					} else {

						temperatureSpan.textContent = 'f';

						temperatureDegree.textContent = temperature;

					}

				});
			});
		}); 
	}

	//8- skycons 
	function setIcons(icon, iconID) {

		const skycons = new Skycons({color: "#191970"});
		const currentIcon = icon.replace(/-/g, "_").toUpperCase();

		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}

}); 
