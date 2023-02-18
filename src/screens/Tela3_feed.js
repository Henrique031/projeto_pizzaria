import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    name: 'Comida 1',
    image: require('../../assets/pizza.jpg'),
  },
  {
    id: '2',
    name: 'Comida 2',
    image: require('../../assets/hamburguer.jpg'),
  },
  {
    id: '3',
    name: 'Comida 3',
    image: require('../../assets/pasta.jpg'),
  },
  // ...
];

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="person" size={32} color="black" />
        <MaterialCommunityIcons name="magnify" size={32} color="black" />
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 56,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    height: 100,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  itemName: {
    fontSize: 16,
    marginLeft: 16,
  },
  addButton: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 4,
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
