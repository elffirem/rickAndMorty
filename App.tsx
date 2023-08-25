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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,

    backgroundColor: 'lightgrey',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 20,
    padding: 16,
    margin: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 10,
  },
  columnContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  imageBackground: {
    flex: 1, // Take the full available space
    resizeMode: 'cover', // Cover the entire background
  },
});

export default App;
