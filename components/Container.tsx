import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

interface Props {
  image: any;
  title: string;
  subtitle1: string;
  subtitle2: string;
}

const Container = ({image, title, subtitle1, subtitle2}: Props) => {
  return (
    <View style={styles.rowContainer}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.columnContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle1}</Text>
        <Text style={styles.subtitle}>{subtitle2}</Text>
      </View>
    </View>
  );
};

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
});

export default Container;
