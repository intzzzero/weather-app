import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Thunderstorm: {
		iconName: 'weather-lightning',
		bgColor: [ '#0099F7', '#F11712' ],
		title: 'Thunderstorm',
		subTitle: 'Runaway boy!!! Hurry up!!!'
	},
	Drizzle: {
		iconName: 'weather-rainy',
		bgColor: [ '#2C3E50', '#4CA1AF' ],
		title: 'Drizzle',
		subTitle: 'Drizzle? what is drizzle?'
	},
	Rain: {
		iconName: 'weather-pouring',
		bgColor: [ '#4DA0B0', '#D39D38' ],
		title: 'Rain',
		subTitle: '1 day 1 gang'
	},
	Snow: {
		iconName: 'weather-snowy',
		bgColor: [ '#000428', '#004e92' ],
		title: 'Snow',
		subTitle: 'All I want for christmas is you'
	},
	Clear: {
		iconName: 'weather-sunny',
		bgColor: [ '#fceabb', '#f8b500' ],
		title: 'Sunny',
		subTitle: "Oh my god I'm dead"
	},
	Clouds: {
		iconName: 'weather-cloudy',
		bgColor: [ '#2c3e50', '#2C7744' ],
		title: 'Cloudy',
		subTitle: 'Every cloud has a silver lining'
	},
	Haze: {
		iconName: 'weather-hazy',
		bgColor: [ '#f79d00', '#64f38c' ],
		title: 'Hazy',
		subTitle: 'Runaway boy!!! Hurry up!!!'
	},
	Mist: {
		iconName: 'weather-hail',
		bgColor: [ '#141E30', '#243B55' ],
		title: 'Misty',
		subTitle: 'Runaway boy!!! Hurry up!!!'
	},
	Smoke: {
		iconName: 'weather-windy',
		bgColor: [ '#000000', '#434343' ],
		title: 'Smoke',
		subTitle: 'Do not smoking at here never again'
	},
	Dust: {
		iconName: 'weather-windy-variant',
		bgColor: [ '#2C3E50', '#FD746C' ],
		title: 'Dusty',
		subTitle: 'Runaway boy!!! Hurry up!!!'
	},
	Fog: {
		iconName: 'weather-fog',
		bgColor: [ '#42275a', '#734b6d' ],
		title: 'Foggy',
		subTitle: 'Runaway boy!!! Hurry up!!!'
	},
	Sand: {
		iconName: 'weather-sunset',
		bgColor: [ '#ff4b1f', '#ff9068' ],
		title: 'Sand',
		subTitle: 'Fucking China'
	},
	Ash: {
		iconName: 'weather-cloudy-alert',
		bgColor: [ '#1D4350', '#A43931' ],
		title: 'Ash',
		subTitle: 'Ash? what is ash?'
	},
	Squall: {
		iconName: 'weather-hurricane',
		bgColor: [ '#114357', '#F29492' ],
		title: 'Squall',
		subTitle: 'Runaway boy!!! Hurry up!!!'
	},
	Tornado: {
		iconName: 'weather-tornado',
		bgColor: [ '#a80077', '#66ff00' ],
		title: 'Tornado',
		subTitle: 'Runaway boy!!! Hurry up!!!'
	}
};

const Weather = ({ temp, condition }) => {
	return (
		<LinearGradient colors={weatherOptions[condition].bgColor || [ '#F1F2B5', '#135058' ]} style={styles.container}>
			<StatusBar barStyle='light-content' />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					name={weatherOptions[condition].iconName || 'cloud-question'}
					style={styles.icon}
				/>
				<Text style={styles.temp}>{temp}℃</Text>
				<Text style={styles.condition}>{condition.toUpperCase()}</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
			</View>
		</LinearGradient>
	);
};

Weather.propTypes = {
	temp: propTypes.number.isRequired,
	condition: propTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Clear',
		'Clouds',
		'Haze',
		'Mist',
		'Smoke',
		'Dust',
		'Fog',
		'Sand',
		'Ash',
		'Squall',
		'Tornado'
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start'
	},
	temp: {
		fontSize: 30,
		fontWeight: '500',
		color: '#fff',
		opacity: 0.9
	},
	condition: {
		fontSize: 17,
		color: '#fff',
		opacity: 0.8
	},
	icon: {
		fontSize: 100,
		color: '#fff',
		opacity: 0.9
	},
	title: {
		fontSize: 35,
		fontWeight: '400',
		color: '#fff'
	},
	subTitle: {
		fontSize: 20,
		fontWeight: '600',
		color: '#fff',
		paddingVertical: 20
	}
});

export default Weather;
