import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { usePreventScreenCapture } from 'expo-screen-capture';

const Stack = createStackNavigator();

const pdf1Uri = 'https://css4.pub/2015/textbook/somatosensory.pdf';
const pdf2Uri = 'https://css4.pub/2017/newsletter/drylab.pdf';

export default function App() {
  usePreventScreenCapture();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PDFView" component={PDFViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleSelectPdf = (uri) => {
    navigation.navigate('PDFView', { uri });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="BG Version" onPress={() => handleSelectPdf(pdf1Uri)} />
        <Button title="ENG Version" onPress={() => handleSelectPdf(pdf2Uri)} />
      </View>
    </View>
  );
}

function PDFViewScreen({ route, navigation }) {
  const { uri } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri }}
        style={styles.webview}
        javaScriptEnabled={true}
        mixedContentMode="always"
      />
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

