import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>codeAmeba</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(220, 255, 20, 1)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'rgba(0, 0, 0, 0.8)',
		fontSize: 35,
		fontWeight: '600',
		padding: 10,
		borderWidth: 3,
		borderRadius: 15,
		borderColor: 'rgba(0, 0, 0, 0.8)'
	}
});
