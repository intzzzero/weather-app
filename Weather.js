import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

const Weather = ({ temp, condition }) => {
	return (
		<View style={styles.container}>
			<View style={styles.halfContainer}>
				<AntDesign name='cloudo' style={styles.icon} />
				<Text style={styles.temp}>{temp}℃</Text>
			</View>
			<View style={styles.halfContainer} />
		</View>
	);
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
	temp: {
		fontSize: 25,
		fontWeight: '500',
		color: 'rgba(0, 0, 0, 0.8)'
	},
	icon: {
		fontSize: 100,
		color: 'rgba(0, 0, 0, 0.8)'
	}
});

Weather.PropTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Atmosphere',
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

export default Weather;
