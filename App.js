import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

const API_KEY = 'ac422c992e09c27fffb0ef16c0efe218';

export default class extends React.Component {
	state = {
		isLoading: true
	};

	getWeather = async (latitude, longitude) => {
		const { data } = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
		);
		console.log(data);
	};

	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude);
			this.setState({ isLoading: false });
		} catch (error) {
			console.log("Can't find");
		}
	};

	componentDidMount() {
		this.getLocation();
	}

	render() {
		const { isLoading } = this.state;
		return isLoading ? <Loading /> : null;
	}
}
