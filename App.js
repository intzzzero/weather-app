import React from 'react';
import axios from 'axios';
import Loading from './Components/Loading';
import Weather from './Components/Weather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

const API_KEY = 'ac422c992e09c27fffb0ef16c0efe218';

export default class extends React.Component {
	state = {
		isLoading: true
	};

	getWeather = async (latitude, longitude) => {
		const { data: { main: { temp }, weather } } = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
		);
		this.setState({ isLoading: false, condition: weather[0].main, temp: temp });
	};

	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude);
			this.setState({ isLoading: false });
		} catch (error) {
			Alert.alert("Can't find");
		}
	};

	componentDidMount() {
		this.getLocation();
	}

	render() {
		const { isLoading, temp, condition } = this.state;
		return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
	}
}
