# Weather-app
My first React Native app with Nomad Coders

***

## 리액트와 닮았지만 다르다
리액트에서 사용되는 JSX는 HTML과 JavaScript가 섞인 듯한 형태의 확장문법이다. 리액트 네이티브에서도 그와 유사한 형태의 문법을 사용하지만 다르다. 우선, HTML 태그가 아닌 리액트 네이티브에서 제공되는 컴포넌트를 불러서 사용해야 하며, 스타일의 경우에는 리액트 네이티브에서 CSS 엔진으로 새롭게 만든 자체적인 문법을 사용하는데, 이것은 리액트의 스타일드 컴포넌드(Styled-components)와 닮아있다.

```js
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
```