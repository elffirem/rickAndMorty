import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const AdenImage = require('./android/assets/pic.jpg'); // Replace with actual image path

function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.rowContainer}>
          <Image source={AdenImage} style={styles.image} />
          <View style={styles.columnContainer}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.subtitle}>Subtitle 1</Text>
            <Text style={styles.subtitle}>Subtitle 2</Text>
          </View>
        </View>
        {/* Add more rows here */}
        <View style={styles.rowContainer}>{/* ... */}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
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
});

export default App;
