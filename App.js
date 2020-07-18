import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
	const [ inputText, setInputText ] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{inputText}</Text>
			<TextInput onChangeText={inputText => setInputText(inputText)} style={styles.input} />
		</View>
	);
};

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
		padding: 10
	},
	input: {
		height: 20,
		width: 150,
		fontSize: 20,
		textAlign: 'center',
		color: 'rgba(0, 0, 0, 0.8)',
		borderBottomColor: 'rgba(0, 0, 0, 0.8)',
		borderBottomWidth: 3,
		marginTop: 30
	}
});

export default App;
