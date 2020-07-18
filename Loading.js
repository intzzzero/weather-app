import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Getting the fucking weather</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 30,
		paddingVertical: 100,
		backgroundColor: '#fdf6aa'
	},
	text: {
		color: 'rgba(0, 0, 0, 0.7)',
		fontSize: 30
	}
});

export default Loading;
