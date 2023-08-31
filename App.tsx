import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Container from './components/Container';
import styles from './styles';

const path = require('./assets/pic.jpg');
const background = require('./assets/wallpaper.jpg');
const data = [
  {title: 'Title', subtitle1: 'Subtitle1', subtitle2: 'Subtitle2', image: path},
  {title: 'Title', subtitle1: 'Subtitle1', subtitle2: 'Subtitle2', image: path},
  {title: 'Title', subtitle1: 'Subtitle1', subtitle2: 'Subtitle2', image: path},
  {title: 'Title', subtitle1: 'Subtitle1', subtitle2: 'Subtitle2', image: path},
  {title: 'Title', subtitle1: 'Subtitle1', subtitle2: 'Subtitle2', image: path},
  {title: 'Title', subtitle1: 'Subtitle1', subtitle2: 'Subtitle2', image: path},
]; //dummy data

function RickAndMortyHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Rick and Morty</Text>
    </View>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <RickAndMortyHeader></RickAndMortyHeader>
      <ImageBackground source={background} style={styles.imageBackground}>
        <ScrollView>
          {data.map((item, index) => (
            <Container
              title={item.title}
              subtitle1={item.subtitle1}
              subtitle2={item.subtitle2}
              image={item.image}></Container>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default App;
