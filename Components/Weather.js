import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptions } from '../config';

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
