import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={fontColor.text}>codeAmeba</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const fontColor = StyleSheet.create({
	text: {
		color: '#fff',
		fontSize: 35,
		backgroundColor: 'rgba(255, 220, 20, 1)'
	}
});
