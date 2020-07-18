import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

const App = () => {
	const getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const { coords } = await Location.getCurrentPositionAsync();
			console.log(coords.latitude, coords.longitude);
		} catch (error) {
			Alert.alert('why not?', 'please...');
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return <Loading />;
};

export default App;
