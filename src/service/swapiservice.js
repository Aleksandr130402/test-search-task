export default class SwapiService {
	_apiBase = 'https://swapi.dev/api';
	_imageUrl = 'https://starwars-visualguide.com/assets/img';

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
		}
		return await res.json();
	};

	getAllPlanets = async () => {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet);
	};

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet);
	};

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship);
	};

	getStarship = async (id) => {
		const starship = await this.getResource(`/starships/${id}/`);
		return this._transformStarship(starship);
	};

	getImage = (item, id) => {
		switch (item) {
			case 'person':
				return `${this._imageUrl}/characters/${id}.jpg`;
			case 'starships':
				return `${this._imageUrl}/starships/${id}.jpg`;
			case 'planets':
				return `${this._imageUrl}/planets/${id}.jpg`;
		}
	};

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPeople);
	};

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}/`);
		return this._transformPeople(person);
	};

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	};

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPariod: planet.rotation_period,
			diameter: planet.diameter
		};
	};

	_transformPeople = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		};
	};

	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity
		};
	};
}
